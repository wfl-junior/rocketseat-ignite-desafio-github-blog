import { ArticleContent } from "./ArticleContent";
import { ArticleHeader } from "./ArticleHeader";
import { PostContainer } from "./styles";

interface PostProps {}

export const Post: React.FC<PostProps> = () => (
  <PostContainer>
    <ArticleHeader />

    <ArticleContent
      children={`**Programming languages all have built-in data structures, but these often differ from one language to another.** This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\n\n[Dynamic typing](#)\n\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\n\n~~~javascript\nlet foo = 42;   // foo is now a number\nfoo = "bar";    // foo is now a string\nfoo = true;     // foo is now a boolean\r~~~
      `}
    />
  </PostContainer>
);
