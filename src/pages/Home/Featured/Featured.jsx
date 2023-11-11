import SectionTitle from "../../../cpmponents/SectionTitle/SectionTitle"
import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
  return (
    <div>
     <div
     style={{ backgroundImage: `url(${featuredImg})` }}
      className= {`bg-fixed text-white pt-8 my-20 bg-gray-600 bg-blend-overlay `}>
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="flex flex-col md:flex-row w-full justify-center items-center bg-slate-900 bg-opacity-60 lg:pb-20 lg:pt-12 md:px-8 lg:px-36">
                <div className="flex-1">
                    <img className="" src={featuredImg} alt="" />
                </div>
                <div className="flex-1 md:ml-10 w-full p-4">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured