import styled from "styled-components";
import { textLarge, textSmall, titleSmall } from "../../styles/typography";

export const HomeContainer = styled.div`
  padding-bottom: 2rem;
`;

export const SearchContainer = styled.div`
  width: 100%;
  margin-block: 4.5rem 3rem;
`;

export const SearchHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

export const PublicationsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.subtitle};

  ${titleSmall}
`;

export const PublicationsAmount = styled.header`
  color: ${({ theme }) => theme.colors.span};

  ${textSmall}
`;

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    gap: 2rem;
  }
`;

export const PostsMessage = styled.p`
  text-align: center;

  ${textLarge}
`;
