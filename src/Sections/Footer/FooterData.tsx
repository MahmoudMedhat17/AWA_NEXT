import Link from "next/link";
import { footerData } from "../Data";

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
