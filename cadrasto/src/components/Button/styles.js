import { styled } from 'styled-components'

export const Button = styled.button`
font-size: 3vh;
height: 10vh;
width: 19vw;
border-radius: 18px;
color: aliceblue;
margin:2vw;
cursor: pointer;
background: ${(props) => props.theme === 'primary' ? ' #000000' : 'transparent;'};
border:${(props) => props.theme === 'primary' ? ' none;' : 'solid 2px #ffffff'};


`

