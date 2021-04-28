import PropTypes from 'prop-types';
import * as S from './styled';

const Layout = ({ children }) => <S.Wrapper>{children}</S.Wrapper>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
