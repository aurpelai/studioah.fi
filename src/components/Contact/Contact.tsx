import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as People } from '../../svg/people.svg';
import { company, people, social } from '../../data/about';
import {
  StyledContact,
  StyledContactList,
  StyledContent,
  StyledHeader,
  StyledImage,
  StyledPerson,
  StyledPersonInfo,
  StyledPersonName,
  StyledSocialMediaLogo,
  StyledSocialMediaLogos,
} from './Contact.styles';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <StyledContact>
      <StyledImage>
        <People />
      </StyledImage>

      <StyledContent>
        <StyledHeader>
          {t(company.longName)}
        </StyledHeader>
        <a href={`mailto:${company.email}`}>{company.email}</a>

        <StyledContactList>
          {people.map((datum) => (
            <StyledPerson key={datum.name}>
              <StyledPersonName>{datum.name}</StyledPersonName>
              <StyledPersonInfo>{t(`Titles.${datum.title}`)}</StyledPersonInfo>
              <StyledPersonInfo>{datum.phone}</StyledPersonInfo>
            </StyledPerson>
          ))}
        </StyledContactList>

        <StyledSocialMediaLogos>
          {social.map((datum) => (
            <a
              href={datum.url}
              key={datum.name}
              rel="noopener noreferrer"
              target="_blank"
              title={datum.name}
            >
              <StyledSocialMediaLogo imageUrl={`/images/social/${datum.image}`} />
            </a>
          ))}
        </StyledSocialMediaLogos>
      </StyledContent>
    </StyledContact>
  );
};

export default memo(Contact);
