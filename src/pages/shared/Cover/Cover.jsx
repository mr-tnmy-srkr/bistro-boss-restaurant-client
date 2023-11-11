import { Parallax } from 'react-parallax';


const Cover = ({img,title,info}) => {
  return (
    <div>
     <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-center text-neutral-content">
                    <div className="max-w-md  text-white">
                        <h1 className="mb-5 text-5xl font-bold uppercase w-full ">{title}</h1>
                        <p className="mb-5">{info}</p>

                    </div>
                </div>
            </div>
        </Parallax>

    </div>
  )
}

export default Cover