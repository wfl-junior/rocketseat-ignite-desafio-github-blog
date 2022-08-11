import ptBR from "date-fns/esm/locale/pt-BR";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useState } from "react";
import removeMarkdown from "remove-markdown";
import useSWR from "swr";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Loading } from "../../components/Loading";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import { api } from "../../services/api";
import {
  Content,
  HomeContainer,
  Posts,
  PostsMessage,
  PublicationsAmount,
  PublicationsTitle,
  SearchContainer,
  SearchHeader,
} from "./styles";

export interface Post {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

async function fetchPosts(key: string) {
  const query = key.replace(/^posts\//, "");

  const { data } = await api.get<{ items: Post[] }>(
    `/search/issues?q=${query}%20repo:wfl-junior/rocketseat-ignite-desafio-github-blog`,
  );

  return data.items.map((post): Post => {
    let body = removeMarkdown(post.body).replace(/\s/g, " ").replace(/\s$/, "");

    const maxLength = 100;

    if (body.length > maxLength) {
      body = body.substring(0, maxLength) + "...";
    }

    return {
      number: post.number,
      title: post.title,
      body,
      created_at: formatDistanceToNow(new Date(post.created_at), {
        addSuffix: true,
        locale: ptBR,
      }),
    };
  });
}

export const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query);
  const { data: posts, error } = useSWR(`posts/${debouncedQuery}`, fetchPosts);

  return (
    <HomeContainer>
      <Header />

      <Content>
        <Profile />

        <SearchContainer>
          <SearchHeader>
            <PublicationsTitle>Publicações</PublicationsTitle>
            <PublicationsAmount>6 publicações</PublicationsAmount>
          </SearchHeader>

          <Input
            type="text"
            placeholder="Buscar conteúdo"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </SearchContainer>

        {posts ? (
          posts.length ? (
            <Posts>
              {posts.map(post => (
                <PostCard key={post.number} post={post} />
              ))}
            </Posts>
          ) : (
            <PostsMessage>Sem resultados 😭</PostsMessage>
          )
        ) : error ? (
          <PostsMessage>Ocorreu um erro ao buscar pelos posts 😰</PostsMessage>
        ) : (
          <Loading />
        )}
      </Content>
    </HomeContainer>
  );
};
