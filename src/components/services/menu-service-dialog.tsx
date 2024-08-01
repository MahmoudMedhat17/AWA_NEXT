import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MenuServicesIcon from "./menu-service-icon";

interface IServiceDialogProps {
  item: {
    iconImage: string;
    image: string;
    title: string;
    description: string;
    list?: string[];
  };
  i: number;
}
const MenuServiceDialog = ({ item, i }: IServiceDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <MenuServicesIcon i={i} img={item.iconImage} iconTitle={item.title} />
      </DialogTrigger>
      <DialogContent className="h-[80vh] lg:w-fit w-[80vw] flex flex-col md:flex-row items-center lg:justify-center overflow-auto gap-8">
        <div className="sm:min-w-200">
          <img src={item.image} />
        </div>
        <div className="w-full sm:min-w-200 h-full">
          <DialogTitle className="text-[#2D3E6A] text-xl md:text-2xl lg:text-3xl py-4 uppercase">
            {item.title}
          </DialogTitle>
          <DialogDescription className="text-black lg:text-base pb-4 max-w-[90%]">
            {item.description}
          </DialogDescription>
          <DialogDescription>
            <ul className="pl-4">
              {item.list?.map((list) => (
                <li className="text-black lg:text-lg list-disc" key={list}>
                  {list}
                </li>
              ))}
            </ul>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuServiceDialog;
