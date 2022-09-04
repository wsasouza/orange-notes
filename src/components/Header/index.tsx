import { HeaderContainer, HeaderContent, NewItemButton } from './styles'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <NewItemButton>Novo Item</NewItemButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
