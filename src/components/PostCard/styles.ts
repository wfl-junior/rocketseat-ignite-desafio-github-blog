import styled, { css } from "styled-components";
import { textMedium, textSmall, titleMedium } from "../../styles/typography";

export const PostCardContainer = styled.a`
  padding: 2rem;
  border-radius: 10px;
  text-decoration: none;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    background-color: ${theme.colors.post};
    border: 2px solid ${theme.colors.post};

    transition: border-color 100ms linear;

    &:hover {
      border-color: ${theme.colors.label};
    }
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const Title = styled.h2`
  ${titleMedium}
`;

export const DateText = styled.span`
  display: inline-block;
  margin-top: calc(0.125rem * 2 * 1.6);
  color: ${({ theme }) => theme.colors.span};
  white-space: nowrap;

  ${textSmall}
`;

export const ContentPreview = styled.p`
  margin-top: 1.25rem;

  ${textMedium}
`;
