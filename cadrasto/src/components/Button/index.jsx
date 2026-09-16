import { Button } from './styles'

function DefaultButton({ children, ...props }) {
    console.log(props)
    return (

        <Button>{children}</Button>

    )

}
export default DefaultButton