import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { HomeContainer, HomeContent } from "./styles";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => (
  <HomeContainer>
    <Header />

    <HomeContent>
      <Profile />
    </HomeContent>
  </HomeContainer>
);
