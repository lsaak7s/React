import Button from "../../../components/Button"
import TopBackground from "../../../components/TopBackground"
import outraImg from '../../../assets/outraImg.png'
import api from "../../../services/api"
import { useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'

function ListUsers() {

    useEffect(() => {
        async function usersLoud() {
            const userApi = await api.get('/usuarios')

            console.log(userApi)
        }
        usersLoud()
    }, [])


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