import styled from "styled-components";
import { textMedium } from "../../../styles/typography";

export const ArticleContentContainer = styled.div`
  overflow: hidden;
  padding: 2.5rem 2rem;

  p {
    ${textMedium}
  }

  strong {
    ${textMedium}

    font-weight: 700;
  }

  a {
    ${textMedium}

    color: ${({ theme }) => theme.colors.blue};

    &:hover {
      text-decoration: underline;
    }
  }

  .line-break {
    white-space: pre-wrap;
  }
`;
