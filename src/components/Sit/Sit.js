import styled from "styled-components"
import { useState } from "react"

export default function Sit ({seats, index, setIds, ids, sitNum, setSitNum}) {
    const [select, setSelect] = useState(false)

    function indisponivel () {
        alert("Este assento não está disponível") 
    }

    function condicao () {
    select === false ? setSelect("selected") : setSelect(false)

    setIds( select === false ? [...ids, seats.id] : ids.filter((value, index) => 
    ids.indexOf(value) === index && seats.id !== value)
       )

    setSitNum( select === false ? [...sitNum, seats.name] : sitNum.filter((value, index) => 
    sitNum.indexOf(value) === index && seats.name !== value)
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