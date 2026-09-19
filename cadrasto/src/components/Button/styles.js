import { styled } from 'styled-components'

export const Button = styled.button`

height: 10vh;
width: 19vw;
border-radius: 18px;
color: aliceblue;
margin:2vw;
cursor: pointer;
background: ${(props) => props.theme === 'primary' ? ' #000000' : 'transparent;'};
border:${(props) => props.theme === 'primary' ? ' none;' : 'solid 2px #ffffff'};

@media (min-width:900px) {
   font-size:3vh;
}

@media (max-width:800px) {
   font-size:2vh;
}
@media (max-width:700px) {
   font-size:2vh;
}
@media (max-width:600px) {
   font-size:2vh;
}
@media (max-width:500px) {
   font-size:2vh;
}
`

