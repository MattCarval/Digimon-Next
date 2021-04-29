import PropTypes from 'prop-types';
import * as S from './styled';

const Card = ({ title, imgSrc, subtitle }) => (
  <S.Wrapper>
    <h1>{title}</h1>
    <img src={imgSrc} alt="Digimon" />
    <h1>{subtitle}</h1>
  </S.Wrapper>
);

Card.defaultProps = {
  title: '',
  imgSrc: '',
  subtitle: '',
};

Card.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Card;
