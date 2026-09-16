import { useRef } from "react"

import api from '../../services/api'

import { Conteiner,  Form, Title, ConteinerInput, ConteinerInputEmail, Input, Inputlabel } from "./styles"

import imgHome from '../../assets/users.png'
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

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

        <img src={imgHome} alt="Imagen usuario" />

      </TopBackground>

      <Form>

        <div>

          <Title>Cadrastrar  Usuario</Title>

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


        <Button type="button" onClick={createNewUser}>
          Cadastro  Usuario
        </Button>

      </Form>

    </Conteiner>
  )
}

export default Home