import { Button } from './styles'
import PropsTypes from 'prop-types'

function DefaultButton({ children, ...props }) {
    //console.log(props)
    //console.log(abacate)
    return (

        <Button {...props}>{children}</Button>

    )

}
//Aqui estamos dizendo para o codigo que tipo de valor se trata
DefaultButton.prototype = {
    abacate: PropsTypes.number
    
}

export default DefaultButton