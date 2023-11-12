import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  /*  const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=>item.category === 'popular')
            setMenu(popularItems)
        })
    },[]) */
  return (
    <div className="mb-12">
      <SectionTitle
        heading={"Check it out"}
        subHeading={"---FROM OUR MENU---"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 px-4">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
