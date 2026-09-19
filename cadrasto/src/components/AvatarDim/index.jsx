import {AvatarGrid} from './styles'

function DefaultAvatarGrid() {

    return (

        <AvatarGrid>
            {Array.from({ length: 4 }, (_, index) => (
                <img
                    key={index}
                    src={`https://avatarapi.runflare.run/public?username=avatar-${index}`}
                    alt=""
                />
            ))}
        </AvatarGrid>
    )

}
export default DefaultAvatarGrid