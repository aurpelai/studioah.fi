import styled from 'styled-components';
import { StyledSocialMediaLogoType } from './Contact.types';

export const StyledPersonInfo = styled.div``;

export const StyledPersonName = styled(StyledPersonInfo)`
  ${({ theme }) => theme.objects.Heading.Main3};
`;

export const StyledPerson = styled.li`
  &:not(:first-of-type) {
    margin-top: ${({ theme }) => theme.spacing.XXLARGE};
  }

  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing.XXLARGE};
  }
`;

export const StyledContactList = styled.ul`
  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing.XXXLARGE};
  }

  &:first-of-type {
    margin-top: ${({ theme }) => theme.spacing.XXLARGE};
  }
`;

export const StyledSocialMediaLogo = styled.div<StyledSocialMediaLogoType>`
  ${({ theme }) => theme.mixins.Transition()};
  background-color: ${({ theme }) => theme.colors.GREY_700};
  mask: url(${({ imageUrl }) => imageUrl}) no-repeat center;
  mask-size: 100%;
  height: ${({ theme }) => theme.spacing.MEDIUM};
  width: ${({ theme }) => theme.spacing.MEDIUM};

  &:hover {
    background-color: ${({ theme }) => theme.colors.GREY_800};
  }
`;

export const StyledHeader = styled.div`
  ${({ theme }) => theme.objects.Heading.Main2};
`;

export const StyledContact = styled.section`
  align-items: center;
  color: ${({ theme }) => theme.colors.GREY_700};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
