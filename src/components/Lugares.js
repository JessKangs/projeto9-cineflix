import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import Footer from './Footer/Footer'

function Sit ({seats, index, setId, id}) {
    const [select, setSelect] = useState(false)

    function indisponivel () {
        alert("Este assento não está disponível") 
    }

    function condicao () {
    select === false ? setSelect("selected") : setSelect(false)

    setId( select === false ? [...id, seats.id] : id.filter((value, index) => 
    id.indexOf(value) === index && seats.id !== value)
       )

   
 }

    return (
        <Assento 
        select={select}
        isAvailable={seats.isAvailable} 
        key={index} 
        onClick={seats.isAvailable ? condicao : indisponivel}>
            <h2 key={index}>{seats.name}</h2>
        </Assento>
    )
}

export default function Lugares () {
   const [dataSits, setDataSits] = useState('')
    const [sits, setSits] = useState([])
    const {idSessao} = useParams()

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)

        request.then(resposta => 
            
            {setSits(resposta.data.seats)
            setDataSits(resposta.data)
            }
            )

            
            
    }, [])

    console.log(dataSits)

   
    const [id, setId] = useState([])
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')

    function enviar (e){

        e.prevent.default();

        const body = {
            id,
            nome,
            cpf
        }

        console.log(body)
         nome.length !== 0 && cpf.length !== 0 && id.length !== 0 ? console.log("funciona")  : alert("Preencha os campos do formulário corretamente!") 

    }
    return (
        <>
        <Instruções>
        <h1>Selecione o(s) assento(s)</h1> 
        </Instruções>
        
        <Assentos>

            {sits.map((seats, index) =>
            <Sit seats={seats} index={index} setId={setId} id={id}/>
           )}

        </Assentos>

        <Disponibilidade>
                <Bolinha>
                    <Selected></Selected>
                    <h1>Selecionado</h1>
                </Bolinha>

                <Bolinha>
                    <Disponível></Disponível>
                    <h1>Disponível</h1>
                </Bolinha>

                <Bolinha>
                    <Indisponivel></Indisponivel>
                    <h1>Indisponível</h1>
                </Bolinha>
        </Disponibilidade>

        <Form>
            <form onSubmit={enviar}>
                <label>Nome do comprador:</label>
                <input onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome..." required value={nome}/>

                <label>CPF do comprador:</label>
                <input onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu cpf..." required value={cpf}/>
            </form>
        </Form>

            <Link to="/sucesso">
                <Button type="submit">Reservar assento(s)</Button>
            </Link>
       

        <Footer 
        title={dataSits.movie.title} 
        posterURL={dataSits.movie.posterURL} 
        time={dataSits.name} 
        weekday={dataSits.day.weekday}  /> 
        
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

const Assentos = styled.div`
    display: flex;
    justify-content: center;
    width: 400px;
    flex-wrap: wrap;
    margin: 0 5px;
`

const Assento = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 25px;
    font-size: 12px;
    margin-right: 10px;
    margin-bottom: 18px;
    border-radius: 50%;
    border: 1px solid ${(props) =>  
        props.select === 'selected' && props.isAvailable ? '#1AAE9E' :
        props.isAvailable === false ? '#F7C52B' : 
        props.isAvailable === true ? '#808F9D' :'' };
    background-color: ${props => 
        props.select === 'selected' && props.isAvailable ? '#8DD7CF' :
        props.isAvailable === false ? '#FBE192' : 
        props.isAvailable ? '#C3CFD9' : ''};
`

const Disponibilidade = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 13px;
    color: #4E5A65;
    margin-top: 15px;
`
const Bolinha = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-top: 8px;
    }
`

const Selected = styled.div`
    border-radius: 50%;
    width: 26px;
    height: 26px;
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
    `

const Disponível = styled.div`
    border-radius: 50%;
    width: 26px;
    height: 26px;
    border: 1px solid #808F9D;
    background-color: #C3CFD9;
`
const Indisponivel = styled.div`
    border-radius: 50%;
    width: 26px;
    height: 26px;
    border: 1px solid #F7C52B;
    background-color: #FBE192;
    `

const Form = styled.div`
    margin-left: 24px;
    margin-top: 42px;
    font-size: 18px;

    form {
    width: 400px;
    height: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    }

    form > input {
        width: 327px;
        height: 51px;
        border-radius: 3px;
        border: none;
    }

    input::placeholder {
        font-style: italic;
        font-size: 18px;
        color: #AFAFAF;
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