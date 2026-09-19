import Button from "../../../components/Button"
import TopBackground from "../../../components/TopBackground"

import outraImg from '../../../assets/users.png'
import trash from '../../../assets/trash.svg'
import use from '../../../assets/use.png'

import api from "../../../services/api"
import { useEffect, useState } from 'react'


import { Container, Title, ConteinerUser, CardUser, TrashIcon, AvatarUser } from "./styles"


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

        <Container>

            <TopBackground >

                {outraImg}

            </TopBackground>

            <Title>Listagem de Usuarios</Title>

            <ConteinerUser>
                {users.map((user) => (

                    <CardUser key={user.id}>
                        <AvatarUser >

                            {use}

                        </AvatarUser>

                        <div>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.age}</p>
                        </div>

                        <TrashIcon src={trash} alt='lixo'></TrashIcon>

                    </CardUser>
                )
                )}</ConteinerUser >


            <Button>Voltar</Button>

        </Container >

    )

}

export default ListUsers