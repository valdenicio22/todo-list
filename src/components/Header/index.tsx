import { ContainerHeader } from './styles'
import bgDark from '../../assets/bg-desktop-dark.jpg'

export function Header(){
    return (
        <ContainerHeader>
            <img src={bgDark} alt="background dark mode"/>
        </ContainerHeader>
    );
}