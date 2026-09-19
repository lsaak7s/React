import styled from "styled-components";

export const Container = styled.div`
background-color:darkblue;
display:flex;
flex-direction:column;
min-height: 100vh;
align-items:center;
justify-content:space-evenly;
padding:20px;
`


export const ConteinerUser = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr ;
gap:10px;
@media (max-width:750px) {
    grid-template-columns: 1fr ;
}
`

export const CardUser = styled.div`
background-color:black;
border-radius:18px;
height: auto;
min-height: 160px;
padding: 16px;
box-sizing: border-box;

> div {
  flex: 1;
  min-width: 0;
}

p {
  color:aliceblue;
  margin: 8px 0;
  font-size: 16px;
  overflow-wrap: anywhere;
}

> img {
  flex-shrink: 0;
}
`

export const AvatarUser = styled.img`
 width: 30%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;

`

export const TrashIcon = styled.img`
cursor: pointer;
width:2vw;
`