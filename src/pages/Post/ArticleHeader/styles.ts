import styled from "styled-components";
import { textLarge, textMedium, titleLarge } from "../../../styles/typography";

export const ArticleHeaderContainer = styled.div`
  margin-top: -5rem;
  isolation: isolate;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.profile};
  box-shadow: 0 2px 28px rgb(0 0 0 / 0.2);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

export const Title = styled.h1`
  ${titleLarge}
`;

export const Footer = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 1.5rem;
    justify-content: flex-start;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.label};
`;

export const FooterInfoText = styled.span`
  color: ${({ theme }) => theme.colors.span};

  ${textMedium}
`;

export const ErrorMessage = styled.p`
  text-align: center;

  ${textLarge}
`;
