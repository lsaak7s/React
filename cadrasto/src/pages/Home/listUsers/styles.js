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
gap:10px;

grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;
width:100%;

@media (max-width:1200px) {
    grid-template-columns:1fr 1fr 1fr 1fr 1fr;
    width:100%;
}

@media (max-width:900px) {
    grid-template-columns:1fr 1fr 1fr 1fr ;
    width:100%;
}

@media (max-width:700px) {
    grid-template-columns:1fr 1fr 1fr ;
    width:100%;
}

@media (max-width:500px) {
    grid-template-columns: 1fr 1fr ;
    width:100%;
}

@media (max-width:300px) {
    grid-template-columns: 1fr ;
    width:100%;
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
@media (max-width: 500px) {
grid-template-columns: 1fr ;
}
`

export const AvatarUser = styled.img`
    width: 30%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;

  @media (max-width: 500px) {
  width:30vw; 
 }
`

export const TrashIcon = styled.img`
cursor: pointer;

@media (max-width: 200px) {
 width:6vw; 
}

`