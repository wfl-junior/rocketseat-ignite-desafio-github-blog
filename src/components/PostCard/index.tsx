import { Post } from "../../pages/Home";
import {
  ContentPreview,
  DateText,
  Header,
  PostCardContainer,
  Title,
} from "./styles";

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <PostCardContainer href="#">
    <Header>
      <Title>{post.title}</Title>
      <DateText>{post.created_at}</DateText>
    </Header>

    <ContentPreview>{post.body}</ContentPreview>
  </PostCardContainer>
);
