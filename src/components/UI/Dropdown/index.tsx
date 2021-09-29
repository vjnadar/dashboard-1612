import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { DropdownProps } from "./types";
import "./Dropdown.scss";

function DropDown({
  dropdownItems,
  dropdownDirectionReverse,
  setOpen,
  open,
  dropdownName,
  avatarImgSrc,
  large,
  small,
  hideDropdownArrowIcon
}: DropdownProps): JSX.Element {
  let dropdownContentOpenStr = dropdownDirectionReverse ? `Dropdown__content open drop-down-direction-reverse` : `Dropdown__content open`;
  dropdownContentOpenStr = large ? `${dropdownContentOpenStr} large` : dropdownContentOpenStr;
  dropdownContentOpenStr = small ? `${dropdownContentOpenStr} small` : dropdownContentOpenStr;
  return (
    <div className="Dropdown" onClick={() => setOpen(dropdownName)} role="button" aria-label={`${dropdownName}_BUTTON`}>
      <ul className="Dropdown__list">
        <li className="Dropdown__avatar">
          <Avatar alt={avatarImgSrc} src={avatarImgSrc} className="Dropdown__avatar-icon" role="image" aria-label={`${dropdownName}_IMAGE`} />
          {!hideDropdownArrowIcon ? <ArrowDropDownIcon className={!open ? "Dropdown__avatar-arrow-icon" : "Dropdown__avatar-arrow-icon spin"} /> : <></>}
        </li>
        <li className="Dropdown__container">
          <ul className={!open ? "Dropdown__content" : dropdownContentOpenStr} aria-label={`${dropdownName}_ITEMS`}>
            {dropdownItems.map((item) => (
              <li onClick={item.action} key={item.name} className={item?.isFinalItem ? "Dropdown__item Dropdown--final-item" : "Dropdown__item"}>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
