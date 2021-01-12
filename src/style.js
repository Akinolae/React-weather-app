import styled from "styled-components"
import bg from "./assets/images/weather.jpg"
export const Div = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position:center;
    background-image: url(${bg});
    box-sizing: border-box;
`
export const Link = styled.a`
    color: grey;
    text-decoration: none;
`
export const Container = styled.div`
    width: 100%;
    max-width: 60%;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`
export const Socials = styled.div`
    width: 100%;
    max-width: 25%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
`
export const Text = styled.p`
    text-align: center;
`