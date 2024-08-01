import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MenuServicesIcon = ({
  img,
  i,
  iconTitle,
}: {
  img: string;
  i: number;
  iconTitle: string;
}) => {
  return (
    <div className="w-[50px] relative">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <img
              style={{ rotate: `${-(180 / 6) * i - 104}deg` }}
              src={img}
              className={`w-[100px] md:w-[150px]`}
            />
          </TooltipTrigger>
          <TooltipContent
            style={{
              rotate: `${-(180 / 6) * i - 104}deg`,
            }}
            className={`absolute ml-2 bg-gray-200 whitespace-nowrap py-1 rounded z-50 transform ${
              i <= 2
                ? "translate-x-4 -translate-y-20"
                : "translate-x-20 translate-y-4"
            }`}
          >
            <p>{iconTitle}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
export default MenuServicesIcon;
