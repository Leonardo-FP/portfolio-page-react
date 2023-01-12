import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/leonardo-franca-paulelli-695642220/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/Leonardo-FP" },
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/leo0_fp/" },
  ];

const SocialNetworks = () => {
    return <section id="social-networks">
                {socialNetworks.map((network) => (
                    <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank">{network.icon}</a>
                ))}
            </section>
};

export default SocialNetworks;