import { Container, ConteinerUser, CardUser, TrashIcon, AvatarUser } from "./styles"
import Button from "../../../components/Button"
import TopBackground from "../../../components/TopBackground"
import Title from "../../../components/Titulo"
import AvatarGrid from "../../../components/AvatarDim"

import trash from '../../../assets/trash.svg'

import { useNavigate } from 'react-router-dom'
import api from "../../../services/api"
import { useEffect, useState } from 'react'

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

        await api.delete(`/usuarios/${id}`)

        const userUpdate = users.filter(user => user.id !== id)

        setUsers(userUpdate)

    };


    return (

        <Container>

            <TopBackground>

                <AvatarGrid />

            </TopBackground>

            <Title>User List</Title>

            <Button type="Button" onClick={() => navegate('/')}>To go back</Button>
            
            <ConteinerUser>

                {users.map((user) =>

                    <CardUser key={user.id}>

                        <AvatarUser src={`https://avatarapi.runflare.run/public?usearname=${user.id}`} />

                        <div>
                            <p>Name: {user.name}</p>
                            <p>Age: {user.age}</p>
                            <p>Email: {user.email}</p>
                        </div>

                        <TrashIcon src={trash} alt='lixo' onClick={() => deletUser(user.id)} >

                        </TrashIcon>

                    </CardUser>
                )}</ConteinerUser >

        </Container >

    )

}

export default ListUsers