import styled from "styled-components";
import { textLink } from "../../styles/typography";

export const LinkContainer = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  ${textLink}
`;