import { Button } from './styles'
import PropsTypes from 'prop-types'

function DefaultButton({ children, theme, ...props }) {
    //console.log(props)
    //console.log(abacate)
    return (

        <Button {...props} theme={theme}>{children}</Button>

    )

}
//Aqui estamos dizendo para o codigo que tipo de valor se trata
DefaultButton.prototype = {
    abacate: PropsTypes.number,
    theme: PropsTypes.string
}

export default DefaultButton