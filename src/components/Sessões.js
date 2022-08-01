import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom";
import axios from "axios";

import Footer from "./Footer/Footer";


export default function Sessões ({filmes}) {
    const {idFilme} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
            const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`)

            request.then( resposta => {
                setData(resposta.data)
            })
    }, [])

    return (
        <>
            <Instruções>
                <h1>Selecione o horário</h1>    
            </Instruções>

            {data.length !== 0 ? data.days.map((session, index) =>
            <SessionTime key={index}>
                <h2>{`${session.weekday} - ${session.date}`}</h2>
                
                <Botões>
                {session.showtimes.map((time, index) => 
                <Link to={`/lugares/${time.id}`}>
                    < TimeButton key={index}>
                    {time.name}
                    </TimeButton>
                </Link>
                )}    
                </Botões>

            </SessionTime>
            ): ''}

            <Footer posterURL={data.posterURL} title={data.title} />

        </>
    )
}

const Instruções = styled.div`
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 110px;
`
const SessionTime = styled.div`
    margin-left: 24px;
    margin-top: 25px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-size: 20px;
    }
`

const TimeButton = styled.button`
    width: 83px;
    height: 43px;
    background: #E8833A;
    color: white;
    border-radius: 3px;
    border: none;
    font-size: 18px;
    margin-right: 8px;
    display:flex;
    align-items: center;
    justify-content: center;

`
const Botões = styled.div`
    display: flex;
    flex-direction: row;

    a {
        text-decoration: none;
    }
`