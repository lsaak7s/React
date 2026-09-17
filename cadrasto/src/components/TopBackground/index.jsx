import { TopBackground } from './styles'

function DefaultTopBackground({children}) {

    return (

        <TopBackground alt="Imagen usuario">
            <img src={children} alt="Imagem usuário" />
        </TopBackground>

    )

}
export default DefaultTopBackground
