import styled from "styled-components"
import {Link} from "react-router-dom"

export default function Confirmação ({pedidoInfo, usuInfo}) {

    //console.log(pedidoInfo)
    //console.log(usuInfo.body.id)
    
    return (
        <>
       
        <Instruções >
             <h1>Pedido feito com sucesso!</h1>
         </Instruções>
 
         <Item>
             <h1>Filme e sessão</h1>
             <h2>{pedidoInfo.movie.title}</h2>
             <h2> {pedidoInfo.day.date} {pedidoInfo.name} </h2>
         </Item>
        
         <Item>
             <h1>Ingressos</h1>
             {usuInfo.nome.map((value, index) =>
                <h2>Assento {value}</h2>)}
         </Item>
 
         <Item>
             <h1>Comprador</h1>
             <h2>Nome: {usuInfo.body.nome}</h2>
             <h2>CPF: {usuInfo.body.cpf}</h2>
         </Item>
        
        <Link to="/"><Button>Voltar pra Home</Button></Link>
 
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
    color: #247A6B;
    font-weight: bold;
`

const Item = styled.div`
    margin-top: 30px;
    margin-left: 35px;
    

    h1 {
        font-weight: bold;
        font-size: 24px;
    }

    h2 {
        font-size: 22px;
        margin-top: 10px;
    }
    `

const Button = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    color: white;
    border-radius: 3px;
    border: none;
    font-size: 18px;
    margin: 57px 20% 30px 20%;
    `