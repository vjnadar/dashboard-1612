import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { DropdownProps } from './types';
import './Dropdown.scss';

function Dropdown({ dropdownItems, dropdownDirectionReverse, setOpen, open, dropdownName, avatarImgSrc, large }: DropdownProps): JSX.Element {
    let dropdownContentOpenStr = dropdownDirectionReverse ? `Dropdown__content open drop-down-direction-reverse` : `Dropdown__content open`;
    dropdownContentOpenStr = large ? `${dropdownContentOpenStr} large` : dropdownContentOpenStr;
    return (
        <ul className="Dropdown" data-test="Dropdown" onClick={() => setOpen(dropdownName)}>
            <li className="Dropdown__avatar" data-test="Dropdown__avatar">
                <Avatar alt={avatarImgSrc} src={avatarImgSrc} />
                <ArrowDropDownIcon />
            </li>
            <li className="Dropdown__container" data-test="Dropdown__container">
                <ul className={!open ? 'Dropdown__content' : dropdownContentOpenStr} data-test="Dropdown__content">
                    {dropdownItems.map((item,index) => (
                        <li
                            onClick={item.action}
                            key={`item.name:${index}`} 
                            className={item?.isFinalItem ? 'Dropdown__item Dropdown--final-item' : 'Dropdown__item'}
                            data-test="Dropdown__item"
                        >
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    );
}

export default Dropdown;
