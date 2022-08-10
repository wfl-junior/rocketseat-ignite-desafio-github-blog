import styled from "styled-components";
import { textMedium, titleLarge } from "../../../styles/typography";

export const ArticleHeaderContainer = styled.div`
  margin-top: -5rem;
  isolation: isolate;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.profile};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin-top: 1.25rem;

  ${titleLarge}
`;

export const Footer = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const FooterInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.label};
`;

export const FooterInfoText = styled.span`
  color: ${({ theme }) => theme.colors.span};

  ${textMedium}
`;
