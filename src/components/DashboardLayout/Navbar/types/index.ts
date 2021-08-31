export type DropdownItems = { name: string; action: () => void; isFinalItem?: boolean };
export type NavbarProps = {
    transformation: boolean;
    setTransformation: React.Dispatch<React.SetStateAction<boolean>>;
    mobileView: boolean;
};
