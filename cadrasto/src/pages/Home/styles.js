import styled from 'styled-components'

export const Conteiner = styled.div`
display: flex;
flex-direction:column ;
align-items: center;
justify-content: center;
height: 100vh;
background-color:  navy;
`

export const Form = styled.form`
display: flex;
align-items: center;
flex-flow:column;
gap: 30px;
`

export const Inputlabel = styled.label`
span{
   
    color: rgb(255, 0, 0);
}
display: flex;
align-items: center;
flex-flow: row,wrap;
height:14px;
width:1px;
font-size:2vw;
color: aliceblue;

@media (max-width:700px) {
    font-size:5vw;
}


`

export const ConteinerInput = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-flow: row;
gap:10px;


input{
    font-size: 3vh;
    width:40vh;
    height: 8vh;
    border-radius: 10px;
    background-color: aliceblue;
    border: none ;
}
@media (max-width:700px) {
    display:inline;
    flex-flow:row;
}

`

export const ConteinerInputName = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-flow: row;

input{
    font-size: 3vh;
    width:35vh;
    height: 8vh;
    border-radius: 5px;
    background-color: aliceblue;
    border: none ;
    cursor: pointer;
}
@media (max-width:700px) {
   input{
    width:100%;
   } 
}
`

export const ConteinerInputAge = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-flow: row;
input{
    font-size: 3vh;
    width:8vh;
    height: 8vh;
    border-radius: 5px;
    background-color: aliceblue;
    border: none ;
    cursor: pointer;
}
@media (max-width:700px) {
   input{
    width:20%;
   } 
}
`

export const ConteinerInputEmail = styled.div`
display:flex;

input{
    font-size: 3vh;
    max-width: 30vw;
    width:40vw;
    height: 8vh;
    border-radius: 5px;
    border: none;
    background-color: aliceblue;
    cursor: pointer;
 }
 @media (max-width:700px) {
   input{
    width:100%;
   } 
}

`

