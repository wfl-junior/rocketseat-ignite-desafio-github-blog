import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => (
  <HomeContainer>
    <Header />
  </HomeContainer>
);
