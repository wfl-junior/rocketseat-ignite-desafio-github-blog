import rangeParser from "parse-numeric-range";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "styled-components";
import { ArticleContentContainer } from "./styles";

interface ArticleContentProps {
  children: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ children }) => {
  const { colors } = useTheme();

  return (
    <ArticleContentContainer>
      <ReactMarkdown
        children={children}
        className="line-break"
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");

            if (!match) {
              return <code className={className} {...props} />;
            }

            const meta = node?.data?.meta as string | undefined;

            const applyHighlights: lineTagPropsFunction = highlights => {
              if (!meta) {
                return {};
              }

              const regex = /{([\d,-]+)}/;
              const metadata = meta.replace(/\s/g, "");
              const strlineNumbers = regex.test(metadata)
                ? regex.exec(metadata)![1]
                : "0";

              const highlightLines = rangeParser(strlineNumbers);
              const data = highlightLines.includes(highlights)
                ? "highlight"
                : undefined;

              return { data };
            };

            return (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                className="codeStyle"
                showLineNumbers={true}
                wrapLines={!!meta}
                useInlineStyles={true}
                lineProps={applyHighlights}
                children={String(children).replace(/\s$/g, "")}
                style={
                  {
                    ...oneDark,
                    'code[class*="language-"]': {
                      ...oneDark['code[class*="language-"]'],
                      backgroundColor: colors.post,
                      color: colors.markdownCodeText,
                    },
                    'pre[class*="language-"]': {
                      ...oneDark['pre[class*="language-"]'],
                      backgroundColor: colors.post,
                      color: colors.markdownCodeText,
                    },
                  } as any
                }
                {...props}
              />
            );
          },
        }}
      />
    </ArticleContentContainer>
  );
};
