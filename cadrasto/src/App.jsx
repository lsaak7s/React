import { Conteiner, TopBackground, Form, Title, ConteinerInput, Input, Inputlabel, Button } from "./styles"

import imgHome from './assets/users.png'

export function App() {
  return (
    <Conteiner>

      <TopBackground>

        <img  src={imgHome}/>

      </TopBackground>

      <Form>

        <Title>Cadrasto Usuario</Title>

        <ConteinerInput>

          <div>

            <div>
              <Inputlabel>Name<span>*</span>
                <Input type="text" placeholder="Name do usuario" />
              </Inputlabel>
            </div>

            <div>
              <Inputlabel>Age<span>*</span>
                <Input type="Number" placeholder="Age do usuario" />
              </Inputlabel>
            </div>

            <div>
              <Inputlabel>email<span>*</span>
                <Input type="email" placeholder="Email do usuario" />
              </Inputlabel>
            </div>

          </div>

        </ConteinerInput>

        <Button>Cadrasto Usuario</Button>

      </Form>

    </Conteiner>
  )
}
