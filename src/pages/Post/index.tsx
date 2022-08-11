import { useParams } from "react-router-dom";
import useSWR from "swr";
import { api } from "../../services/api";
import { formatCreatedAt } from "../../utils/formatCreatedAt";
import { ArticleContent } from "./ArticleContent";
import { ArticleHeader } from "./ArticleHeader";
import { PostContainer } from "./styles";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  comments: number;
  html_url: string;
  user: {
    login: string;
  };
}

async function fetchPost(key: string): Promise<IPost> {
  const number = key.replace(/^post\//, "");

  const { data } = await api.get<IPost>(
    `/repos/wfl-junior/rocketseat-ignite-desafio-github-blog/issues/${number}`,
  );

  return {
    title: data.title,
    body: data.body,
    comments: data.comments,
    created_at: formatCreatedAt(data.created_at),
    html_url: data.html_url,
    user: {
      login: data.user.login,
    },
  };
}

export const Post: React.FC = () => {
  const { number } = useParams();
  const { data: post, error } = useSWR(`post/${number}`, fetchPost);

  return (
    <PostContainer>
      <ArticleHeader post={post} error={error} />

      {post ? <ArticleContent children={post.body} /> : null}
    </PostContainer>
  );
};
