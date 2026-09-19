import Title from "../../components/Titulo"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import AvatarGrid from "../../components/AvatarDim"

import { Conteiner, Form, ConteinerInput, ConteinerInputEmail, ConteinerInputName, ConteinerInputAge, Inputlabel } from "./styles"

import { useRef } from "react"
import api from '../../services/api'
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

        <Title>Register User</Title>

        <ConteinerInput>

          <ConteinerInputName>
            <div>
              <Inputlabel>User<span>*</span></Inputlabel>
              <input type="text" placeholder="" ref={inputName} />
            </div>
          </ConteinerInputName>


          <ConteinerInputAge>
            <div>
              <Inputlabel>Age<span>*</span></Inputlabel>
              <input type="Number" placeholder="" ref={inputAge} />
            </div>
          </ConteinerInputAge>

          <ConteinerInputEmail>

            <div>
              <Inputlabel>Email<span>*</span></Inputlabel>
              <input type="email" placeholder="" ref={inputEmail} />
            </div>

          </ConteinerInputEmail>

        </ConteinerInput>


        <div>
          <Button type="Reloud" onClick={createNewUser} >
            User Registration
          </Button>

          <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>
            View user list
          </Button>
        </div>


      </Form >

    </Conteiner >
  )
}

export default Home