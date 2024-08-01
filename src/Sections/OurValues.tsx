interface ImagesData {
  id: number;
  imageUrl: string;
}

const OurValues = () => {
  const ImgsData: ImagesData[] = [
    {
      id: 1,
      imageUrl: "/images/Value-1.png",
    },
    {
      id: 2,
      imageUrl: "/images/Value-2.png",
    },
    {
      id: 3,
      imageUrl: "/images/Value-3.png",
    },
    {
      id: 4,
      imageUrl: "/images/Value-4.png",
    },
    {
      id: 5,
      imageUrl: "/images/Value-5.png",
    },
  ];

  return (
    <div id="values" className="flex flex-col justify-center items-center">
      <div>
        <h2 className="text-[24px] sm:text-[40px] font-medium mb-[1rem]">
          Our Values
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        {ImgsData.map((images) => (
          <div
            key={images.id}
            className={`${
              images.id === 5 ? "mb-[4rem]" : "mb-[1rem]"
            } xl:even:ml-[12rem]`}
          >
            <img src={images.imageUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
