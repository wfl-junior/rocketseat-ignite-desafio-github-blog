import { ThemeProvider } from "styled-components";
import { Post } from "./pages/Post";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />

    <Post />
  </ThemeProvider>
);
