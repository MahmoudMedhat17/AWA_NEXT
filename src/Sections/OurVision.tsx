const OurVision = () => {
  return (
    <div
      id="ourVision"
      className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full h-fit lg:h-[1000px] bg-cover bg-center"
      style={{ backgroundImage: "url(images/vision-mission.jpg)" }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:gap-[10rem] lg:m-[5rem]">
        {/* Our vision */}
        <div className="p-[2rem] lg:w-[50%] xl:max-w-[40%] lg:border-2 lg:border-white lg:rounded-lg backdrop-blur-[10px]">
          <h3 className="text-[#2D3E6A] text-[25px] lg:text-[28px] font-semibold mb-[1rem]">
            Our Vision
          </h3>
          <p className="text-[18px] lg:text-[22px] xl:text-[30px] opacity-[0.9] mb-[1rem]">
            Our Vision is to be your First Choice for Security and Investigation
            services in partnership with all commercial, industrial, business
            clients and government and First Nations throughout Egypt.
          </p>
        </div>
        {/* Our Mission */}
        <div className="p-[2rem] xl:ml-24 lg:w-[50%] xl:max-w-[40%] lg:border-2 lg:border-white lg:rounded-lg backdrop-blur-[10px]">
          <h3 className="text-[#2D3E6A] text-[25px] lg:text-[28px] font-semibold mb-[1rem]">
            Our Mission
          </h3>
          <p className="text-[18px] lg:text-[22px] xl:text-[30px] opacity-[0.9] mb-[1rem]">
            Our mission is to deliver customized, professional security and
            investigative solutions in Egypt and Gulf area demonstrating
            responsiveness, diligence, and professionalism by building on our
            Country values of courage, wisdom, honesty and respect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
