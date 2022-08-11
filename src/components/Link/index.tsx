import { LinkProps as RouterLinkProps } from "react-router-dom";
import { LinkContainer, RouterLinkContainer } from "./styles";

interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {}

export const Link: React.FC<LinkProps> = props => <LinkContainer {...props} />;

export const RouterLink: React.FC<RouterLinkProps> = props => (
  <RouterLinkContainer {...props} />
);
