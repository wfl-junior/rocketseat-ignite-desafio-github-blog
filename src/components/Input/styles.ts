import styled, { css } from "styled-components";
import { textMedium } from "../../styles/typography";

export const InputContainer = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    background-color: ${theme.colors.input};
    border: 1px solid ${theme.colors.border};

    &:focus {
      border-color: ${theme.colors.blue};
    }

    &::placeholder {
      color: ${theme.colors.label};
    }
  `}

  ${textMedium}
`;
