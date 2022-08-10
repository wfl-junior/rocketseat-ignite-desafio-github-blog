import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../../components/Link";
import {
  ArticleHeaderContainer,
  Footer,
  FooterInfo,
  FooterInfoText,
  Header,
  Title,
} from "./styles";

interface ArticleHeaderProps {}

export const ArticleHeader: React.FC<ArticleHeaderProps> = () => (
  <ArticleHeaderContainer>
    <Header>
      <Link href="#" target="_blank">
        <FontAwesomeIcon icon={faChevronLeft} />
        Voltar
      </Link>

      <Link href="#" target="_blank">
        Ver no GitHub
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </Link>
    </Header>

    <Title>JavaScript data types and data structures</Title>

    <Footer>
      <FooterInfo>
        <FontAwesomeIcon icon={faGithub} />
        <FooterInfoText>wfl-junior</FooterInfoText>
      </FooterInfo>

      <FooterInfo>
        <FontAwesomeIcon icon={faCalendarDay} />
        <FooterInfoText>Há 1 dia</FooterInfoText>
      </FooterInfo>

      <FooterInfo>
        <FontAwesomeIcon icon={faComment} />
        <FooterInfoText>5 comentários</FooterInfoText>
      </FooterInfo>
    </Footer>
  </ArticleHeaderContainer>
);
