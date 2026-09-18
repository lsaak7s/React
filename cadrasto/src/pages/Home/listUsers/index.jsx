import Button from "../../../components/Button"
import TopBackground from "../../../components/TopBackground"
import outraImg from '../../../assets/outraImg.png'
import api from "../../../services/api"
import { useEffect, useState } from 'react'
//import { useNavigate } from 'react-router-dom'

function ListUsers() {

    // Se realmente mudou algo os users atualiza a tela

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {

            const { data } = await api.get('/usuarios')

            setUsers(data)

            console.log(data)
        }

        getUsers()

    }, [])


    return (

        <div>
            
            <TopBackground >

                {outraImg}

            </TopBackground>

            <h1>Listagem de Usuarios</h1>

            {users.map((user) =>

                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                </div>

            )}

            <Button>Voltar</Button>

        </div>

    )

}

export default ListUsers