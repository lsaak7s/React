import Button from "../../../components/Button"
import TopBackground from "../../../components/TopBackground"
import outraImg from '../../../assets/outraImg.png'

function ListUsers() {


    return (

        <div>
            <TopBackground >

                {outraImg}

            </TopBackground>

            <h1>Listagem de Usuarios</h1>
            <Button>Voltar</Button>
        </div>

    )

}

export default ListUsers