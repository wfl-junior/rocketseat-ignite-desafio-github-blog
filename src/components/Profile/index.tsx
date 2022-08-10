import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = () => (
  <ProfileContainer>
    <Avatar src="https://github.com/wfl-junior.png" />

    <Info>
      <Header>
        <Title>Wallace Júnior</Title>

        <Link href="https://github.com/wfl-junior" target="_blank">
          GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </Header>

      <Description>
        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
        massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar
        vel mass.
      </Description>

      <Footer>
        <FooterInfo>
          <FontAwesomeIcon icon={faGithub} />
          <FooterInfoText>wfl-junior</FooterInfoText>
        </FooterInfo>

        <FooterInfo>
          <FontAwesomeIcon icon={faBuilding} />
          <FooterInfoText>Rocketseat</FooterInfoText>
        </FooterInfo>

        <FooterInfo>
          <FontAwesomeIcon icon={faUserGroup} />
          <FooterInfoText>32 seguidores</FooterInfoText>
        </FooterInfo>
      </Footer>
    </Info>
  </ProfileContainer>
);
