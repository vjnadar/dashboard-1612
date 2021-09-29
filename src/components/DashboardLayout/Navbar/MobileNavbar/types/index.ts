import { DropdownItems } from "../../types";

export type MobileNavbarProps = {
  transformation: boolean;
  setTransformation: React.Dispatch<React.SetStateAction<boolean>>;
  searchbarOpen: boolean;
  toggle: (segmentName: string) => void;
  mobileNavVisibility: boolean;
  setMobileNavVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  profileDropdownOpen: boolean;
  notificationDropdownOpen: boolean;
  profileDropdownItems: DropdownItems[];
  notificationDropdownItems: DropdownItems[];
  location: string;
};
