import { styled } from 'styled-components'

export const Button = styled.button`
font-size:3vh;
height: 10vh;
width: 19vw;
border-radius: 18px;
color: rgba(255, 255, 255, 0.77);
margin:2vw;
background: ${(props) => props.theme === 'primary' ? ' #000000' : 'transparent;'};
border:${(props) => props.theme === 'primary' ? ' none;' : 'solid 2px rgba(255, 255, 255, 0.77)'};

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

cursor: pointer;
  transition: filter 0.2s, transform 0.1s;

  &:hover {
    filter: brightness(5.0);
  }

  &:active {
    filter: brightness(5.0);
    transform: scale(0.96);
  }
`

