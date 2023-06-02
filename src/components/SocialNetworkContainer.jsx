import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  {
    name: "Linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/yagoaguiardev/",
  },
  { name: "Github", icon: <FaGithub />, link: "https://github.com/Yagoaguiar" },
  {
    name: "Whatsapp",
    icon: <FaWhatsapp />,
    link: "https://api.whatsapp.com/send?phone=5561981565959&text=Ol%C3%A1,%20acabei%20de%20olhar%20o%20seu%20portif%C3%B3lio!%20s://api.whatsapp.com/send?phone=5561981565959&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20site!%20",
  },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          target="blank"
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
