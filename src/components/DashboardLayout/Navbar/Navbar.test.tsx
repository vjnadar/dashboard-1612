import { createWrapper, findByDataTestAttribute } from '../../../utilities';
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
        const navBarItems: Wrapper = findByDataTestAttribute(wrapper, 'Navbar__items');
        expect(navBarItems.length).toBe(1);
    });
    it('should check if the list items of navbar__items ,in the <Navbar/>, render properly', () => {
        const navBarItem: Wrapper = findByDataTestAttribute(wrapper, 'Navbar__item');
        expect(navBarItem.length).toBe(2);
    });
});
