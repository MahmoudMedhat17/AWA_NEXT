import { ImgsData } from "./Data";

const OurValues = () => {
  return (
    <div id="values" className="flex flex-col justify-center items-center">
      <div>
        <h2 className="text-[24px] sm:text-[40px] font-medium mb-4">
          Our Values
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        {ImgsData.map((images) => (
          <div
            key={images.id}
            className={`${images.id === 5 ? "mb-16" : "mb-4"} xl:even:ml-48`}
          >
            <img src={images.imageUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
