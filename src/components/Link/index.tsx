import { LinkContainer } from "./styles";

interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {}

export const Link: React.FC<LinkProps> = props => <LinkContainer {...props} />;
