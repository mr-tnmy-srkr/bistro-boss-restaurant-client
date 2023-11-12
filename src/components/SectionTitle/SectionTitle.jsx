const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center md:w-4/12 my-8 mx-auto ">
      <p className="text-yellow-600 mb-4">{subHeading}</p>
      <h3 className="text-4xl uppercase py-4 border-y-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
