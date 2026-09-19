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

export const AvatarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }
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

export const AvatarUser = styled.img`
background-color:#fff6f6;

`

export const TrashIcon = styled.img`
color: #fff6f6;
`