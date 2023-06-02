import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <a href="tel:+5561981565959" target="blank">(61) 98156-5959</a>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <a href="mailto:contato@programadoryago.com" target="blank">
            contato@programadoryago.com
          </a>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <a href="https://www.google.com.br/maps/place/Centro+Empresarial+Mont+Blanc/@-15.8056338,-47.9050496,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3b00e5dcbb1b:0x76ebe4fc51a312e!8m2!3d-15.805639!4d-47.9024693!16s%2Fg%2F11gxvz11t7?entry=ttu"
          target="blank" >
            Brasília - DF
          </a>
        </div>
      </div>
    </section>
  );
};
export default InformationContainer;
