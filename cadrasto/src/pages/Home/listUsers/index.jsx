import Button from "../../../components/Button"
import TopBackground from "../../../components/TopBackground"

import outraImg from '../../../assets/users.png'
import trash from '../../../assets/trash.svg'

import { useNavigate } from 'react-router-dom'


import api from "../../../services/api"
import { useEffect, useState } from 'react'


import { Container, Title, ConteinerUser, CardUser, TrashIcon, AvatarUser } from "./styles"


function ListUsers() {

    // Se realmente mudou algo os users atualiza a tela

    const navegate = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {

            const { data } = await api.get('/usuarios')

            setUsers(data)

            console.log(data)
        }

        getUsers()

    }, [])

    async function deletUser(id) {

        await api.delete(`/lista-de-usuarios/${id}`)

        const userUpdate = users.filter(user => user.id !== id)

        setUsers(userUpdate)

    }


    return (

        <Container>

            <TopBackground>

                {outraImg}

            </TopBackground>

            <Title>Listagem de Usuarios</Title>

            <ConteinerUser>
                {users.map((user) =>

                    <CardUser key={user.id}>

                        <AvatarUser src={`https://avatarapi.runflare.run/public?usearname=${user.id}`} />

                        <div>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.age}</p>
                        </div>

                        <TrashIcon src={trash} alt='lixo' onClick={() => deletUser(user.id)} >

                        </TrashIcon>

                    </CardUser>

                )}</ConteinerUser >


            <Button type="Button" onClick={() => navegate('/')}>Voltar</Button>
        </Container >

    )

}

export default ListUsers