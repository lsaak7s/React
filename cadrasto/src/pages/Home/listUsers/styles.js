import styled from "styled-components";

export const Container = styled.div`
background-color:darkblue;
display:flex;
flex-direction:column;
min-height:100vh;
align-items:center;
justify-content:space-evenly;
padding:20px;
`

export const Title = styled.h2``

export const ConteinerUser = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr ;
gap:20px;

@media (max-width:750px) {
    grid-template-columns: 1fr ;
}

`

export const CardUser = styled.div`
background-color:aqua;
padding:16px;
border-radius:15px;
display:flex;
align-items:center;
justify-content:space-between;
gap:20px;
max-width:900px;
`

export const AvatarUser = styled.div`
height:80px;

`

export const TrashIcon = styled.div`
color: #fff6f6;
`