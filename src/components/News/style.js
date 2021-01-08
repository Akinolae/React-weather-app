import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    max-width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
`

export const Text = styled.p`
    text-align: center;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
    margin: auto;
    width: 100%;
    max-width: 70%;
`
export const Card = styled.div`
    width: 100%;
    max-width: 20em;
    border: 2px solid grey;
    border-radius: 6px;
    height: 300px;
    background: white;
`

export const Image = styled.img`
    width: 100%;
    height: 200px;
`