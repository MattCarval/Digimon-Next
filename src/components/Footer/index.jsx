import PropTypes from 'prop-types';
import Layout from '../Layout';
import SmothScroll from '../SmothScroll';
import * as S from './styled';

const Footer = ({ id, logoSrc, logoAlt, scrollTo, socialArray, createdBy }) => (
  <S.Wrapper id={id}>
    <Layout>
      <S.Content>
        <SmothScroll scrollTo={scrollTo}>
          <S.Logo src={logoSrc} alt={logoAlt} />
        </SmothScroll>
        <S.SocialBox>
          {!!socialArray &&
            socialArray.map(icon => (
              <S.Social href={icon.redirect} rel="noreferrer" target="_blank">
                <img src={icon.imgSrc} alt={icon.imgAlt} />
              </S.Social>
            ))}
        </S.SocialBox>
      </S.Content>
      <S.Created>
        <span>{`By ${createdBy}`}</span>
      </S.Created>
    </Layout>
  </S.Wrapper>
);

Footer.defaultProps = {
  id: '',
  logoSrc: '',
  scrollTo: '',
  socialArray: [],
  createdBy: '',
};

Footer.propTypes = {
  id: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string.isRequired,
  scrollTo: PropTypes.string,
  socialArray: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string,
      imgAlt: PropTypes.string.isRequired,
      redirect: PropTypes.string,
    }),
  ),
  createdBy: PropTypes.string,
};

export default Footer;
