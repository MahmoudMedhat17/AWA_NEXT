const WhyChooseUs = () => {
  return (
    <div
      id="chooseus"
      className="my-8 mx-4 sm:my-0 sm:mx-0 p-0 sm:p-4 lg:py-20 lg:px-4 xl:py-20 xl:px-32 flex flex-col md:flex-row justify-center items-start"
    >
      <div className="w-full md:w-[50%] order-2 md:order-1">
        <h3 className="text-[#2D3E6A] text-[20px] sm:text-[24px] lg:text-[36px] xl:text-[40px] font-medium mb-6">
          Why Choose Us
        </h3>
        <p className="text-[16px] md:text-[16px] lg:text-[20px] xl:text-[24px] mb-4">
          AWA can arrange service and maintenance agreements, which are
          individually tailored to meet the specific requirements of each
          client. The Company comprises a team of highly trained engineers and
          technicians that provide 24-hour, 7-days a week break down service.{" "}
        </p>
        <ul className="text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[24px] p-2 sm:pl-8 list-disc">
          <li>Engineering</li>
          <li>Mechanical works</li>
          <li>Trading</li>
          <li>Maintenance</li>
          <li>Conceptual and preliminary engineering</li>
          <li>Evaluation of tender documents</li>
          <li>Design review and value engineering</li>
          <li>Project cost estimation</li>
          <li>Equipment and materials procurement</li>
          <li>Planning and scheduling</li>
          <li>Detailed design & shop drawings</li>
          <li>
            Inspection, quality assurance and control Testing &commissioning
          </li>
          <li>Operator training</li>
        </ul>
      </div>
      <div className="w-full md:w-[50%] block xl:ml-16 order-1 md:order-2">
        <img
          src="/images/why-choose-us.svg"
          className="max-w-[100%] h-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
