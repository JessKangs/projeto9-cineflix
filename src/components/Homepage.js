import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Homepage ({filmes}) {
    return (
        <>
        
            <Instruções>
                <h1>Selecione o filme</h1>    
            </Instruções>

            <RenderFilmes>
                {filmes.map ((poster, index) =>
                <Link to={`sessoes/${poster.id}`}>
                    <MovieCard>
                        <img key={index} src={poster.posterURL} alt="poster"/>
                    </MovieCard>
                </Link>
                )}
            </RenderFilmes>

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

const RenderFilmes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const MovieCard = styled.div`
    width: 145px;
    height: 209px;
    border-radius: 3px;
    border: 1px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.184);
    margin-top: 20px;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    background-color: white;
`