import React, { memo } from 'react';
import { company } from '../../data/about';
import { StyledCompanyName, StyledEmail, StyledFooter } from './Footer.styles';

const Footer = () => (
  <StyledFooter>
    <StyledCompanyName>
      {company.fullName}
    </StyledCompanyName>
    <StyledEmail href={`mailto:${company.email}`}>
      {company.email}
    </StyledEmail>
  </StyledFooter>
);

export default memo(Footer);
