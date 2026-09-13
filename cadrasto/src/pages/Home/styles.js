import styled from 'styled-components'

export const Conteiner = styled.div`
display: flex;
flex-direction:column ;
align-items: center;
justify-content: center;
height: 100vh;
background-color:  navy;
`
export const TopBackground = styled.div`
img{    height: 40vh;
    
}
display: flex;
justify-content: center;


height: 40vh;
width: 60vw;

background: linear-gradient(to right, #fe7e5d, #7f3841);
border-radius:20px;
`
export const Form = styled.form`
display: flex;
align-items: center;
flex-flow:column;
gap: 10px;
`
export const Title = styled.h2`
font-size:30px ;
color: #ffffff;
margin: 3vh;
`
export const ConteinerInput = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-flow: row,wrap;
gap:10px;

input{
    font-size: 3vh;
    width:45vh;
    height: 7vh;
    border-radius: 10px;
    background-color: aliceblue;
    border: none ;
}
`
export const ConteinerInputEmail = styled.div`
input{
    font-size: 3vh;
    max-width: 51vw;
    width:60vw;
    height: 7vh;
    border-radius: 10px;
    border: none;
    background-color: aliceblue;
}


`
export const Inputlabel = styled.label`
span{
    color: red;
}
display: flex;
align-items: start;
flex-flow: row;

font-size: 2vw;
color: aliceblue;
`
export const Button = styled.button`
font-size: 3vh;
height: 9vh;
width: 19vw;
border:none;
border-radius: 10px;
color: aliceblue;
background: linear-gradient(to right, #fe7e5d, #7f3841);
`
export const Input = styled.input``