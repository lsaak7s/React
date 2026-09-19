import { useRef } from "react"

import { Conteiner, Form, ConteinerInput, ConteinerInputEmail, Input, Inputlabel } from "./styles"

import api from '../../services/api'

import  Title  from "../../components/Titulo"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"

import AvatarGrid from "../../components/AvatarDim"
import { useNavigate } from 'react-router-dom'

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function createNewUser() {
    const data = await api.post('/usuarios', {

      email: inputEmail.current.value,
      //Aqui estamos transformando a informaçao em um valor numerico
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    })
    console.log(data)

  };

  return (

    <Conteiner>

      <TopBackground>

        <AvatarGrid />

      </TopBackground>

      <Form>

        <div>

          <Title>Cadrastrar Usuario</Title>

        </div>

        <ConteinerInput>

          <div>
            <Inputlabel>Name<span>*</span></Inputlabel>
            <Input type="text" placeholder="Name do usuario" ref={inputName} />

          </div>


          <div>
            <Inputlabel>Age<span>*</span></Inputlabel>
            <Input type="Number" placeholder="Age do usuario" ref={inputAge} />

          </div>

        </ConteinerInput>

        <ConteinerInputEmail>

          <div>
            <Inputlabel>email<span>*</span></Inputlabel>
            <Input type="email" placeholder="Email do usuario" ref={inputEmail} />
          </div>

        </ConteinerInputEmail>


        <Button type="button" onClick={createNewUser} theme="primary">
          Cadastro  Usuario
        </Button>

        <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>
          Ver Lista de usuarios
        </Button>

      </Form >

    </Conteiner >
  )
}

export default Home