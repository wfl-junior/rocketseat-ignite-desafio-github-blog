import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 4rem 1rem 8.375rem;
  background-image: url(/images/header-background-image.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.profile};
  position: relative;
`;

export const LeftEffect = styled.img`
  position: absolute;
  left: 0;
  top: 4.375rem;
`;

export const RightEffect = styled.img`
  position: absolute;
  right: 0;
  top: 1.875rem;
`;
