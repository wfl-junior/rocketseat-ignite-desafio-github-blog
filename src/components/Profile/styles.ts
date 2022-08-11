import styled from "styled-components";
import { textMedium, titleLarge } from "../../styles/typography";

export const ProfileContainer = styled.div`
  isolation: isolate;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.profile};
  border-radius: 10px;
  margin-top: -5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 2px 28px rgb(0 0 0 / 0.2);

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: row;
  }
`;

export const Avatar = styled.img`
  aspect-ratio: 1 / 1;
  width: 9.25rem;
  border-radius: 8px;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Title = styled.h1`
  ${titleLarge}
`;

export const Description = styled.p`
  margin-top: 0.5rem;

  ${textMedium}
`;

export const Footer = styled.footer`
  padding-top: 1.5rem;
  margin-top: auto;
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
  font-size: 1.125rem;
`;

export const FooterInfoText = styled.span`
  color: ${({ theme }) => theme.colors.subtitle};

  ${textMedium}
`;
