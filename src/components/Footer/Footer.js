import styled from "styled-components"

export default function Footer ({posterURL, title, time, weekday}) {
    return (
        <>
        
            <StatusBottom>
               
               <BottomMovieCard>
                    <img src={posterURL} alt="poster do filme" />
                </BottomMovieCard>
                <Data>
                <h2>{title}</h2>
                <h2>{weekday} - {time}</h2>
               </Data>
            </StatusBottom>
        </>
    )
}

const StatusBottom = styled.div`
    min-width: 400px;
    max-width: 400px;
    height: 117px;
    width: auto;
    background-color: #DFE6ED;
    position: fixed;
    bottom: 0;
    display:flex;
    align-items: center;

    h2{
        font-size: 26px;
        margin-left: 14px;
    }
`

const BottomMovieCard = styled.div`
    width: 64px;
    height: 89px;
    border-radius: 3px;
    border: 1px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.184);
    margin-left: 10px;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    font-size: 26px;
    background-color: white;
`

const Data = styled.div`
    height: 58px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    `