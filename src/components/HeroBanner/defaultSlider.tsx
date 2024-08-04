import scrollToElement from "@/util/scrollToElement";

const DefaultSlider = () => {
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <p className="text-[80px] md:text-[128px] font-[prata,serif] ">AWA</p>
      </div>
      <div className="text-[18px] md:text-[24px] font-medium text-center">
        <p className="mb-4 uppercase opacity-[0.9]">
          MEP-Low Current
          <br /> for contracting & trading
        </p>
        <p className="mb-4 text-black">SINCE 2015</p>
      </div>
      <div className="mt-8 flex justify-center items-center gap-12 text-center">
        <button
          className="bg-[#2D3E6A] p-2 border-none rounded-lg text-white text-[18px] h-fit"
          onClick={() => scrollToElement("contactus")}
        >
          CONTACT US
        </button>
        <div>
          <p className="text-[#254580] text-[20px] font-semibold">Call Us</p>
          <p className="font-semibold text-[18px]">+201006684663</p>
        </div>
      </div>
    </div>
  );
};

export default DefaultSlider;
