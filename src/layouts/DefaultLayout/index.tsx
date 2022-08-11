import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { DefaultLayoutContainer, PageContainer } from "./styles";

interface DefaultLayoutProps {}

export const DefaultLayout: React.FC<DefaultLayoutProps> = () => (
  <DefaultLayoutContainer>
    <Header />

    <PageContainer>
      <Outlet />
    </PageContainer>
  </DefaultLayoutContainer>
);
