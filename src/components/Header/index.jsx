import PropTypes from 'prop-types';
import Layout from '../Layout';
import SmothScroll from '../SmothScroll';
import * as S from './styled';

const Header = ({ id, logoSrc, logoAlt, scrollText, scrollTo }) => (
  <S.Wrapper id={id}>
    <Layout>
      <S.Nav>
        <S.Logo src={logoSrc} alt={logoAlt} />
        <SmothScroll scrollTo={scrollTo}>
          <S.Redirect>{scrollText}</S.Redirect>
        </SmothScroll>
      </S.Nav>
    </Layout>
  </S.Wrapper>
);

Header.defaultProps = {
  id: '',
  logoSrc: '',
  scrollText: '',
  scrollTo: '',
};

Header.propTypes = {
  id: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string.isRequired,
  scrollText: PropTypes.string,
  scrollTo: PropTypes.string,
};

export default Header;
