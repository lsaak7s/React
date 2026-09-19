import { styled } from 'styled-components'

export const AvatarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
  width: 50vw;
  max-width: 560px;
  margin: 0 auto;

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }
`