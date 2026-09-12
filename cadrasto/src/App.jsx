import { Conteiner, TopBackground, Form, Title, ConteinerInput, ConteinerInputEmail, Input, Inputlabel, Button } from "./styles"

import imgHome from './assets/users.png'

export function App() {
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
            <Input type="text" placeholder="Name do usuario" />

          </div>


          <div>
            <Inputlabel>Age<span>*</span></Inputlabel>
            <Input type="Number" placeholder="Age do usuario" />

          </div>

        </ConteinerInput>

        <ConteinerInputEmail>

          <div>
            <Inputlabel>email<span>*</span></Inputlabel>
            <Input type="email" placeholder="Email do usuario" />
          </div>

        </ConteinerInputEmail>


        <Button>Cadrasto Usuario</Button>

      </Form>

    </Conteiner>
  )
}
