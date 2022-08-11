import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";
import { api } from "../../services/api";
import { Link } from "../Link";
import {
  Avatar,
  Description,
  Footer,
  FooterInfo,
  FooterInfoText,
  Header,
  Info,
  ProfileContainer,
  Title,
} from "./styles";

interface User {
  login: string;
  name: string;
  avatar_url: string;
  company: string | null;
  followers: number;
  html_url: string;
  bio: string;
}

async function fetchUser(): Promise<User> {
  const { data } = await api.get<User>("/users/wfl-junior");

  return {
    login: data.login,
    name: data.name,
    avatar_url: data.avatar_url,
    company: data.company,
    followers: data.followers,
    html_url: data.html_url,
    bio: data.bio,
  };
}

export const Profile: React.FC = () => {
  const { data: user } = useSWR("user", fetchUser);

  return (
    <ProfileContainer>
      <Avatar src={user?.avatar_url || "https://github.com/wfl-junior.png"} />

      <Info>
        <Header>
          <Title>{user?.name || "Wallace Júnior"}</Title>

          <Link href={user?.html_url || "#"}>
            GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Header>

        <Description>
          {user?.bio ||
            "Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipi. Nunc, volutpat pulvinar vel mass."}
        </Description>

        <Footer>
          <FooterInfo>
            <FontAwesomeIcon icon={faGithub} />
            <FooterInfoText>{user?.login || "wfl-junior"}</FooterInfoText>
          </FooterInfo>

          <FooterInfo>
            <FontAwesomeIcon icon={faBuilding} />
            <FooterInfoText>{user?.company || "Sem empresa"}</FooterInfoText>
          </FooterInfo>

          <FooterInfo>
            <FontAwesomeIcon icon={faUserGroup} />
            <FooterInfoText>{user?.followers || 0} seguidores</FooterInfoText>
          </FooterInfo>
        </Footer>
      </Info>
    </ProfileContainer>
  );
};
