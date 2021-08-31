import React from 'react';
import Modal from '../Modal';
import { SearchbarProps } from './types';
import './Searchbar.scss';
function Searchbar({ open, toggle }: SearchbarProps): JSX.Element {
    return (
        <>
            {open ? <Modal modalCloseFunction={toggle} arg="SEARCH_BAR" /> : <></>}
            <div className="Searchbar" data-test="Searchbar">
                <div className={!open ? 'Searchbar__container' : 'Searchbar__container slide-down'} data-test="Searchbar__container">
                    <input className="Searchbar__input" type="text" placeholder="SEARCH" data-test="Searchbar__input" />
                </div>
            </div>
        </>
    );
}

export default Searchbar;
