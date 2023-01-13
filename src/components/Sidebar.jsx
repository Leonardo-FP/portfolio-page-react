import Avatar from "../img/portfolio_photo.jpeg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./informationContainer";
import SocialNetworks from "./SocialNetwork";

const Sidebar = () => {
    return <aside id="sidebar">
                <img src={Avatar} />
                <p className="title">Desenvolvedor</p>
                <SocialNetworks />
                <InformationContainer />
                <a href="../leonardo_franca_paulelli.docx" download className="btn">Download Currículo</a>
            </aside>
};

export default Sidebar