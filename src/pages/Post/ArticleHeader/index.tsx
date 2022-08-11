import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { IPost } from "..";
import { Link, RouterLink } from "../../../components/Link";
import { Loading } from "../../../components/Loading";
import {
  ArticleHeaderContainer,
  ErrorMessage,
  Footer,
  FooterInfo,
  FooterInfoText,
  Header,
  Title,
} from "./styles";

interface ArticleHeaderProps {
  post?: IPost;
  error: any;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  post,
  error,
}) => {
  let errorMessage = "Não foi possível buscar os dados do post 😰";

  if (error?.response.status === 404) {
    errorMessage = "Não foi possível encontrar o post com este número 🤔";
  }

  return (
    <ArticleHeaderContainer>
      <Header>
        <RouterLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </RouterLink>

        <Link href={post?.html_url || "#"}>
          Ver no GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </Header>

      {post ? (
        <Fragment>
          <Title>{post.title}</Title>

          <Footer>
            <FooterInfo>
              <FontAwesomeIcon icon={faGithub} />
              <FooterInfoText>{post.user.login}</FooterInfoText>
            </FooterInfo>

            <FooterInfo>
              <FontAwesomeIcon icon={faCalendarDay} />
              <FooterInfoText>{post.created_at}</FooterInfoText>
            </FooterInfo>

            <FooterInfo>
              <FontAwesomeIcon icon={faComment} />
              <FooterInfoText>{post.comments} comentários</FooterInfoText>
            </FooterInfo>
          </Footer>
        </Fragment>
      ) : error ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        <Loading />
      )}
    </ArticleHeaderContainer>
  );
};
