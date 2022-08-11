import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { textLink } from "../../styles/typography";

const linkStyling = css`
  color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  ${textLink}

  line-height: 0;
`;

export const LinkContainer = styled.a`
  ${linkStyling}
`;

export const RouterLinkContainer = styled(Link)`
  ${linkStyling}
`;
