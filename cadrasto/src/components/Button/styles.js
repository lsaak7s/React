import { styled } from 'styled-components'

export const Button = styled.button`
font-size: 3vh;
height: 9vh;
width: 19vw;
border:${(props) => props.theme === 'primary'
                ? ' none;'
                : 'solid 2px #ffffff'};
border-radius: 20px;
color: aliceblue;
background: ${(props) => props.theme === 'primary'
                ? 'linear-gradient(to right, #fe7e5d, #7f3841)'
                : 'transparent;'};
`

