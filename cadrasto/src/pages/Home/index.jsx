import { useRef } from "react"

import { Conteiner, TopBackground, Form, Title, ConteinerInput, ConteinerInputEmail, Input, Inputlabel, Button } from "./styles"

import imgHome from '../../assets/users.png'

export function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  function createNewUser() {

    console.log(inputName.current.value)
    console.log(inputAge.current.value)
    console.log(inputEmail.current.value)

  }

  return (

    <Conteiner>

      <TopBackground>

        <img src={imgHome} alt="Imagen usuario" />

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


        <Button type="button" onClick={createNewUser} >Cadrasto Usuario</Button>

      </Form>

    </Conteiner>
  )
}
