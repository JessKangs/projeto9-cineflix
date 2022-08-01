import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Homepage from "./Homepage"
import Sessions from "./Sessões"
import Lugares from "./Lugares";
import Confirmação from "./Confirmação"

export default function App () {

    //Importar informações da lista de filmes
 
       
        const [filmes, setFilmes] = useState([]);
           

   //console.log(idFilme)

    useEffect(() => {
        const request =  axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        request.then(resposta => {
            setFilmes(resposta.data)
        });
    }, []);
    
    const [pedidoInfo, setPedidoInfo] = useState('')
    const [usuInfo, setUsuInfo] = useState('')

    function pedidoData (dataSits) {
        setPedidoInfo(dataSits)
    }

    function usuData (body, sitNum) {
        setUsuInfo({body: body, nome: sitNum})
    }
 
   
return (
    <BrowserRouter>
        <Top>
            <h1>CINEFLEX</h1>
        </Top>
        
        <Routes>

        <Route path="/" element={<Homepage filmes={filmes}/>} />

        <Route path="sessoes/:idFilme" element={<Sessions filmes={filmes}/>}/>

        <Route path="lugares/:idSessao" element={<Lugares pedidoData={pedidoData} usuData={usuData} filmes={filmes}/>}/>

        <Route path="/sucesso" element={<Confirmação pedidoInfo={pedidoInfo} usuInfo={usuInfo} />} /> 
        </Routes>


    </BrowserRouter>
)
}

const Top = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    font-size: 34px;
    color: #E8833A;
    display: flex;
    justify-content: center;
    align-items: center;
`