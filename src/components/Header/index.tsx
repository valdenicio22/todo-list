import { ContainerHeader } from './styles'

import bgDarkIMG from '../../assets/bg-desktop-dark.jpg'
import bgLightIMG from '../../assets/bg-desktop-light.jpg'

interface HeaderProps{
    isMoon: boolean,
}

export const Header = ({isMoon}: HeaderProps) => {
    return (
        <ContainerHeader>
            <img src={ isMoon ? bgLightIMG : bgDarkIMG } alt=""/>
        </ContainerHeader>
    );
}