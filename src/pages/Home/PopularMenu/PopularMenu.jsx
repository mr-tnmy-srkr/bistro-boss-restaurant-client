import { useEffect, useState } from "react"
import SectionTitle from "../../../cpmponents/SectionTitle/SectionTitle"
import MenuItem from "../../shared/MenuItem/MenuItem"

const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=>item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
  return (
    <div className="mb-12">
        <SectionTitle heading={"Check it out"} subHeading={"---FROM OUR MENU---"}>
        </SectionTitle>
       <div className="grid md:grid-cols-2 gap-8 ">
       {
            menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
        }
       </div>
    </div>
  )
}

export default PopularMenu