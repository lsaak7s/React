import { styled } from 'styled-components'

export const Button = styled.button`
font-size: 3vh;
height: 10vh;
width: 19vw;
border-radius: 18px;
color: aliceblue;
margin:2vw;
border:${(props) => props.theme === 'primary' ? ' none;' : 'solid 2px #ffffff'};

background: ${(props) => props.theme === 'primary' ? 'linear-gradient(to right, #fe7e5d, #7f3841)' : 'transparent;'};
`

