import styled from 'styled-components';

const FooterBase = styled.footer`
  background:  ${({ theme }) => theme.body};
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: 18px;
  color:  ${({ theme }) => theme.text};
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
export default FooterBase;
