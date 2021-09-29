import { DropdownItems } from "../../../DashboardLayout/Navbar/types";
export type DropdownProps = {
  dropdownItems: DropdownItems[];
  dropdownDirectionReverse?: boolean;
  setOpen: (segmentName: string) => void;
  open: boolean;
  dropdownName: string;
  avatarImgSrc: string;
  large?: boolean;
  small?: boolean;
  hideDropdownArrowIcon?: boolean;
};
