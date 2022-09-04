import styled from "styled-components";

/* APP HEADER */
export const AppHeader = styled.div`
    display: flex;
    padding: 1vh 0 0 0;
    margin: 2rem 0 0 0;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-shadow: 1px 1px 12px rgba(0, 0, 0, 0.3);
    background: transparent;
    z-index: 1;
`

/* VIDEO */
export const Video = styled.video`
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    filter: grayscale(0.22) brightness(0.5) contrast(1.5) saturate(1.9) sepia(0.10);
    transition: .2s all ease-in-out;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`

/* NAV */
export const NavDiv = styled.div` 
    width: 100%;
    display: flex;
    transform: scale(.5);
    justify-content: space-between;
    margin: 0rem 0 -2rem 0;
 `

/* COIN CHARTS */
export const CoinCharts = styled.div`
    opacity: .8;
    box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0 -1rem 0;
    border-radius: 5px;
    height: 12rem;
    width: 50%;
    background:transparent;
    transition: .2s all ease-in-out;
    &:hover {
        box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
    }
`

export const Charts = styled.div`
    height: 25vh;
    width: 35vw;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

/* INPUT */
export const StyledInput = styled.input`
width: 100%;
padding: 0.5rem 2rem;
margin: 0vh 0 1vw;
box-shadow: 1px 1px 10px rgba(0,0,0,.4);
color: white;
border: 1px solid rgba(0,0,0,.2);
text-align: center;
border-radius: 5px;
outline: none;
transition: .2s all ease-in-out;
background: rgba(255,255,255,.9);
&:hover {
    background: rgba(190, 190, 190, .2);
    box-shadow: 1px 1px 12px rgba(0,0,0,.5);
    border: 1px solid rgba(0,0,0,.1);
    transform: scale(1.05)
}
`

export const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
padding: 0;
margin: 0;
`

/* COIN TABLE */
export const CoinTable = styled.div`
    opacity: .8;
    border-radius: 5px;
    padding: .5rem 0 1rem 0;
    margin: 2rem .5rem -1rem .5rem;
    box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.8);
    width: 85%;
    height: 55vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: transparent;
    transition: .2s all ease-in-out;
    text-shadow: 1px 1px 10px rgba(0,0,0,.9);
    &:hover {
        box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
    }
`

export const ListHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5rem 0;
`

export const CoinHeader = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 90%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    font-weight: bold;
    margin: .5vh 0 .5vh 0;
`

export const CoinList = styled.div`
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.9);
    width: 90%;
    overflow: scroll;
`

export const CoinContainer = styled.div`
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    transition: .2s all ease-in-out;
    cursor: pointer;
    border-bottom: 1px solid rgba(0,0,0,.1);
    box-shadow: 1px 1px 10px rgba(0,0,0,.1);
    transition: .2s all ease-in-out;

    &:hover{
        background: ${props => props.dark};
        text-shadow: 1px 1px 10px rgba(0,0,0,.7);
        font-weight: bold;
        border-radius: 5px;
        color: white;
        box-shadow: 1px 1px 12px rgba(0,0,0,.4);
    }
`

export const CoinDiv = styled.div` 
    margin: .5rem 0;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 1px 1px 16px rgba(255,255,255,.7);
`