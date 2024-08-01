import Link from "next/link";

const footerData = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About Us",
    link: "#aboutus",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Choose Us",
    link: "#chooseUs",
  },
  {
    title: "Values",
    link: "#values",
  },
  {
    title: "Our Vision",
    link: "#ourVision",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact Us",
    link: "#contactus",
  },
];

const FooterData = () => {
  return (
    <div className="flex flex-wrap justify-center m-[5px] gap-4 sm:gap-6 text-[0.8rem] sm:text-[1.1rem] sm:font-semibold">
      {footerData.map((footer) => (
        <Link href={footer.link} key={footer.link}>
          {footer.title}
        </Link>
      ))}
    </div>
  );
};

export default FooterData;
