import {
  ContentPreview,
  DateText,
  Header,
  PostCardContainer,
  Title,
} from "./styles";

interface PostCardProps {}

export const PostCard: React.FC<PostCardProps> = () => (
  <PostCardContainer href="#">
    <Header>
      <Title>JavaScript data types and data structures</Title>
      <DateText>Há 1 dia</DateText>
    </Header>

    <ContentPreview>
      Programming languages all have built-in data structures, but these often
      differ from one language to another. This article attempts to list the
      built-in data structures available in...
    </ContentPreview>
  </PostCardContainer>
);
