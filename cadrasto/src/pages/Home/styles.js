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
font-size: 2vw;
color: aliceblue;
`

export const ConteinerInput = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-flow: row,wrap;
gap:10px;


input{
    font-size: 3vh;
    width:40vh;
    height: 8vh;
    border-radius: 10px;
    background-color: aliceblue;
    border: none ;
}
`

export const ConteinerInputName = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-flow: row,wrap;

input{
    font-size: 3vh;
    width:35vh;
    height: 8vh;
    border-radius: 5px;
    background-color: aliceblue;
    border: none ;
    cursor: pointer;
}
`

export const ConteinerInputAge = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-flow: row,wrap;
input{
    font-size: 3vh;
    width:8vh;
    height: 8vh;
    border-radius: 5px;
    background-color: aliceblue;
    border: none ;
    cursor: pointer;
}
`

export const ConteinerInputEmail = styled.div`
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

`

