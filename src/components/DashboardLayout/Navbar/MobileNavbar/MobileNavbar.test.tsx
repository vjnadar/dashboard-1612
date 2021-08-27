import * as React from 'react';
import { createWrapper, findByDataTestAttribute, findByClassAttribute } from '../../../../utilities';
import { Wrapper } from '../../../../generalTypes';
import { WrapperTypes } from '../../../../utilities/testFunctions/enums';
import MobileNavbar from '.';
import {profileDropdownItems,notificationDropdownItems} from '../data';

function createMobileNavbarTestWrapper({
    transformation,
    setTransformation,
    searchbarOpen,
    toggle,
    mobileNavVisibility,
    setMobileNavVisibility,
    profileDropdownOpen,
    notificationDropdownOpen,
    profileDropdownItems,
    notificationDropdownItems,
}): Wrapper {
    return createWrapper(MobileNavbar, WrapperTypes.Shallow, {
        transformation,
        setTransformation,
        searchbarOpen,
        toggle,
        mobileNavVisibility,
        setMobileNavVisibility,
        profileDropdownOpen,
        notificationDropdownOpen,
        profileDropdownItems,
        notificationDropdownItems,
    });
}
describe('this test-suite unit tests <MobileNavbar/>', () => {
    let wrapper: Wrapper;
    beforeEach(() => {
        wrapper = createMobileNavbarTestWrapper({
            transformation: false,
            setTransformation: jest.fn(),
            searchbarOpen: false,
            toggle: jest.fn(),
            mobileNavVisibility: true,
            setMobileNavVisibility: jest.fn(),
            profileDropdownOpen: false,
            notificationDropdownOpen: false,
            profileDropdownItems,
            notificationDropdownItems,
        });
    });
    it('should check if <MobileNavbar/> renders properly', () => {
        const navbar: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar');
        expect(navbar.length).toBe(1);
    });
    it('should check if the Mobile-Navbar__route-name div of <MobileNavbar/> render properly', () => {
        const routeName: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar__route-name');
        expect(routeName.length).toBe(1);
    });
    it('should check if the Mobile-Navbar__toggle-item li of <MobileNavbar/> render properly', () => {
        const routeName: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar__toggle-item');
        expect(routeName.length).toBe(2);
    });
    it('should check if the Mobile-Navbar__items div of <MobileNavbar/> render properly', () => {
        const navbarItems: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar__items');
        expect(navbarItems.length).toBe(1);
    });
    it('should check if the list items of Mobile-Navbar__items ,in the <MobileNavbar/>, render properly', () => {
        const navbarItem: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar__item');
        expect(navbarItem.length).toBe(3);
    });
    it('should check if the avatars of Mobile-Navbar__items ,in the <MobileNavbar/>, render properly', () => {
        const navbarItem: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar__item-avatar');
        expect(navbarItem.length).toBe(3);
    });
    it('should check if the texts of Mobile-Navbar__items ,in the <MobileNavbar/>, render properly', () => {
        const navbarItem: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar__item-text');
        expect(navbarItem.length).toBe(3);
    });
    it('should check if the dropdown arrow icons of Mobile-Navbar__items ,in the <MobileNavbar/>, render properly', () => {
        const navbarItem: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar__item-arrow');
        expect(navbarItem.length).toBe(2);
    });
    it('should check if the dropdown section of Mobile-Navbar__item-list ,in the <MobileNavbar/>, render properly', () => {
        const navbarItem: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar__item-list');
        expect(navbarItem.length).toBe(2);
    });
});
describe('this test-suite tests the behaviour of <MobileNavbar/>', () => {
    it('should test the toggle-button (transformation button) ,of <MobileNavbar/>.', () => {
        const mockSetTransformation=jest.fn();
        const wrapper = createMobileNavbarTestWrapper({
            transformation: false,
            setTransformation: mockSetTransformation,
            searchbarOpen: false,
            toggle: jest.fn(),
            mobileNavVisibility: true,
            setMobileNavVisibility: jest.fn(),
            profileDropdownOpen: false,
            notificationDropdownOpen: false,
            profileDropdownItems ,
            notificationDropdownItems,
        });
        const toggleItem: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar__toggle-item').at(0);
        toggleItem.simulate('click');
        expect(mockSetTransformation).toHaveBeenCalledWith(true);
    });
    it('should test the toggle-button (toggle mobilenavbar button) ,of <MobileNavbar/>.', () => {
        const mockSetMobileNavVisibility=jest.fn();
        const wrapper = createMobileNavbarTestWrapper({
            transformation: true,
            setTransformation: jest.fn(),
            searchbarOpen: false,
            toggle: jest.fn(),
            mobileNavVisibility: true,
            setMobileNavVisibility: mockSetMobileNavVisibility,
            profileDropdownOpen: false,
            notificationDropdownOpen: false,
            profileDropdownItems ,
            notificationDropdownItems,
        });
        const toggleButton: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Nav__btn-icon');
        toggleButton.simulate('click');
        expect(mockSetMobileNavVisibility).toHaveBeenCalledWith(false);
    });
    it('should test the toggle-button (toggle search bar button) ,of <MobileNavbar/>.', () => {
        const mockToggle=jest.fn();
        const wrapper = createMobileNavbarTestWrapper({
            transformation: true,
            setTransformation: jest.fn(),
            searchbarOpen: false,
            toggle: mockToggle,
            mobileNavVisibility: true,
            setMobileNavVisibility: jest.fn(),
            profileDropdownOpen: false,
            notificationDropdownOpen: false,
            profileDropdownItems ,
            notificationDropdownItems,
        });
        const toggleButton: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar__item').at(0);
        toggleButton.simulate('click');
        expect(mockToggle).toHaveBeenCalledWith('SEARCH_BAR');
    });
    it('should test the toggle-button (toggle notification dropdown button) ,of <MobileNavbar/>.', () => {
        const mockToggle=jest.fn();
        const wrapper = createMobileNavbarTestWrapper({
            transformation: true,
            setTransformation: jest.fn(),
            searchbarOpen: false,
            toggle: mockToggle,
            mobileNavVisibility: true,
            setMobileNavVisibility: jest.fn(),
            profileDropdownOpen: false,
            notificationDropdownOpen: false,
            profileDropdownItems ,
            notificationDropdownItems,
        });
        const toggleButton: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar__item').at(1);
        toggleButton.simulate('click');
        expect(mockToggle).toHaveBeenCalledWith('NOTIFICATION_DROPDOWN');
    });
    it('should test the toggle-button (toggle profile dropdown button) ,of <MobileNavbar/>.', () => {
        const mockToggle=jest.fn();
        const wrapper = createMobileNavbarTestWrapper({
            transformation: true,
            setTransformation: jest.fn(),
            searchbarOpen: false,
            toggle: mockToggle,
            mobileNavVisibility: true,
            setMobileNavVisibility: jest.fn(),
            profileDropdownOpen: false,
            notificationDropdownOpen: false,
            profileDropdownItems ,
            notificationDropdownItems,
        });
        const toggleButton: Wrapper = findByDataTestAttribute(wrapper, 'Mobile-Navbar__item').at(2);
        toggleButton.simulate('click');
        expect(mockToggle).toHaveBeenCalledWith('PROFILE_DROPDOWN');
    });
});
