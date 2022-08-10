import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";
import {
  Content,
  HomeContainer,
  Posts,
  PublicationsAmount,
  PublicationsTitle,
  SearchContainer,
  SearchHeader,
} from "./styles";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => (
  <HomeContainer>
    <Header />

    <Content>
      <Profile />

      <SearchContainer>
        <SearchHeader>
          <PublicationsTitle>Publicações</PublicationsTitle>
          <PublicationsAmount>6 publicações</PublicationsAmount>
        </SearchHeader>

        <Input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>

      <Posts>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Posts>
    </Content>
  </HomeContainer>
);
