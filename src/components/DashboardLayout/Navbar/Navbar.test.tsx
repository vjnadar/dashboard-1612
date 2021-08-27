import { createWrapper, findByDataTestAttribute,findByClassAttribute } from '../../../utilities';
import { Wrapper } from '../../../generalTypes';
import { WrapperTypes } from '../../../utilities/testFunctions/enums';
import Navbar from '.';

describe('this test-suite unit tests <Navbar/>', () => {
    let wrapper: Wrapper;
    beforeEach(() => {
        wrapper = createWrapper(Navbar, WrapperTypes.Shallow);
    });
    it('should check if <Navbar/> renders properly', () => {
        const navbar: Wrapper = findByDataTestAttribute(wrapper, 'Navbar');
        expect(navbar.length).toBe(1);
    });
    it('should check if the navbar__route-name div of <Navbar/> render properly', () => {
        const routeName: Wrapper = findByDataTestAttribute(wrapper, 'Navbar__route-name');
        expect(routeName.length).toBe(1);
    });
    it('should check if the navbar__items div of <Navbar/> render properly', () => {
        const navbarItems: Wrapper = findByDataTestAttribute(wrapper, 'Navbar__items');
        expect(navbarItems.length).toBe(1);
    });
    it('should check if the list items of navbar__items ,in the <Navbar/>, render properly', () => {
        const navbarItem: Wrapper = findByDataTestAttribute(wrapper, 'Navbar__item');
        expect(navbarItem.length).toBe(2);
    });
});
describe('this test-suite tests the behaviour of <Navbar/>', () => {
    function createNavbarTestWrapper({ transformation, setTransformation, mobileView }): Wrapper {
        return createWrapper(Navbar, WrapperTypes.Shallow, { transformation, setTransformation, mobileView });
    }
    it('should test the number of Navbar-items,in <Navbar/>, when mobileview is false', () => {
        const wrapper=createNavbarTestWrapper({transformation:false,setTransformation:jest.fn(),mobileView:false});
        const navbarItem:Wrapper=findByDataTestAttribute(wrapper,"Navbar__item");
        expect(navbarItem.length).toBe(3);
    });
    it('should test the number of Navbar-items,in <Navbar/>, when mobileview is true', () => {
        const wrapper=createNavbarTestWrapper({transformation:false,setTransformation:jest.fn(),mobileView:true});
        const navbarItem:Wrapper=findByDataTestAttribute(wrapper,"Navbar__item");
        expect(navbarItem.length).toBe(1);
    });
    it('should test if Navbar__mobile-Nav-btn-icon ,in <Navbar/>, becomes Navbar__mobile-Nav-btn-icon close when transformation is true', () => {
        const wrapper=createNavbarTestWrapper({transformation:true,setTransformation:jest.fn(),mobileView:true});
        const navbarMobile:Wrapper=findByClassAttribute(wrapper,"Navbar__mobile-Nav-btn-icon close");
        expect(navbarMobile.length).toBe(1);
    });
});
