import Button from "../../../components/Button"
import TopBackground from "../../../components/TopBackground"
import outraImg from '../../../assets/outraImg.png'
import { useNavigate } from 'react-router-dom'

function ListUsers() {

    const navigate = useNavigate()

    return (

        <div>
            <TopBackground >

                {outraImg}

            </TopBackground>

            <h1>Listagem de Usuarios</h1>
            <Button onclick={() => navigate('')}>Voltar</Button>
        </div>

    )

}

export default ListUsers