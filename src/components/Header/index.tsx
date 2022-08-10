import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <HeaderContainer>
    <img src={logo} alt="" />
  </HeaderContainer>
);
