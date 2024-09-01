import styled from 'styled-components';

const LogoTextBox = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

function LogoText({ logoText }) {
  return <LogoTextBox>{logoText}</LogoTextBox>;
}

export default LogoText;
