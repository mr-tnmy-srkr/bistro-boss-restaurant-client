import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.png'


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" info="Would you like to try a dish?"></Cover>
      Menu
    </div>
  );
};

export default Menu;
