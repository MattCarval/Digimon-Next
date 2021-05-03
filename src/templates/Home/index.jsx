import { useState, useEffect } from 'react';
import { Header, Body, Footer } from '../../components';
import api from '../../../services/api';
import * as S from './styled';

const LOGO_HEADER = '/assets/logoTitle.png';
const LOGO_FOOTER = '/assets/agumon.png';
const WHATSAPP_ICON = '/assets/whatsAppIcon.svg';
const GITHUB_ICON = '/assets/gitHubIcon.svg';
const LINKEDIN_ICON = '/assets/linkedinIcon.svg';

const Home = () => {
  const [allDigimon, setAllDigimon] = useState([]);

  const haveAllDigimons = async () => {
    const response = await api.get();
    return setAllDigimon(response.data);
  };

  useEffect(() => {
    haveAllDigimons();
  }, []);

  const socialArrayProp = [
    {
      imgSrc: LINKEDIN_ICON,
      imgAlt:
        'Quadrado com bordas arredondadas solido, com o letras i e n vazadas, demonstrando a rede social linkedIn ',
      redirect: 'https://www.linkedin.com/in/mattcarval/',
    },
    {
      imgSrc: WHATSAPP_ICON,
      imgAlt:
        'Simbolo de um balão de voz com um telefone em seu centro indicando o aplicativo whatsapp',
      redirect:
        'https://api.whatsapp.com/send?phone=5534999504154&text=Ol%C3%A1%2C%20tudo%20bem%3F',
    },
    {
      imgSrc: GITHUB_ICON,
      imgAlt:
        'Quadrado com bordas arredondadas, sendo este solido, com um contorno vazada formando a sombra de um gato indicando a rede de versionamento de código GitHub',
      redirect: 'https://github.com/MattCarval',
    },
  ];
  return (
    <S.Container>
      <Header
        id="header"
        scrollText="Contato"
        scrollTo="footer"
        logoSrc={LOGO_HEADER}
        logoAlt="Logo composta por um circulo, sendo este composto por uma pequena criatura semelhante a um dinossauro saltando para frente, e ao seu lado há o as escritas digimon e next, levando sugestão ao antigo desenho animado digimon e ao framework NextJs"
      />
      <Body title="Search for your favorite digimon" data={allDigimon} />
      <Footer
        id="footer"
        logoSrc={LOGO_FOOTER}
        logoAlt="Criatura semelhante a um dinossauro de costas, olhando por cima de seu ombro, levando o olhar para a localização atual do usuário do site"
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
