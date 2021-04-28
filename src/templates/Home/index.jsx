import { Header, Footer } from '../../components';
import * as S from './styled';

const LOGO_HEADER = '/assets/logoTitle.png';
const LOGO_FOOTER = '/assets/agumon.png';
const WHATSAPP_ICON = '/assets/whatsAppIcon.svg';
const GMAIL_ICON = '/assets/gmailIcon.svg';
const GITHUB_ICON = '/assets/gitHubIcon.svg';
const LINKEDIN_ICON = '/assets/linkedinIcon.svg';

const Home = () => {
  const socialArrayProp = [
    {
      imgSrc: LINKEDIN_ICON,
      imgAlt: 'teste',
      redirect: 'https://www.linkedin.com/in/mattcarval/',
    },
    {
      imgSrc: WHATSAPP_ICON,
      imgAlt: 'teste',
      redirect:
        'https://api.whatsapp.com/send?phone=5534999504154&text=Ol%C3%A1%2C%20tudo%20bem%3F',
    },
    {
      imgSrc: GITHUB_ICON,
      imgAlt: 'teste',
      redirect: 'https://github.com/MattCarval',
    },
    {
      imgSrc: GMAIL_ICON,
      imgAlt: 'teste',
      redirect:
        'mailto:matheusfariadecarvalho@gmail.com?subject=FW: Assunto&body=Olá, tudo bem?',
    },
  ];
  return (
    <S.Container>
      <Header
        id="header"
        scrollText="Contato"
        scrollTo="footer"
        logoSrc={LOGO_HEADER}
        logoAlt="teste"
      />
      <Footer
        id="footer"
        logoSrc={LOGO_FOOTER}
        logoAlt="teste"
        scrollTo="header"
        socialArray={socialArrayProp}
        createdBy="MattCarval"
      />
    </S.Container>
  );
};

export default Home;

export async function getStaticProps() {
  return { props: {} };
}
