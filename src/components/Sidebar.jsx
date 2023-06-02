import phot from "../img/yago.jpeg";
import "../styles/components/sidebar.sass";
import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "../components/InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={phot} alt="Yago Aguiar" className="photo" />
      <p className="tittle">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <p>informações de contato</p>
      <a href="" className="btn">
        Donwload currículo
      </a>
    </aside>
  );
};

export default Sidebar;
