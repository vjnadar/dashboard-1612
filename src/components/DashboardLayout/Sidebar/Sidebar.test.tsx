import { createWrapper, findByDataTestAttribute } from '../../../utilities';
import { WrapperTypes } from '../../../utilities/testFunctions/enums';
import { Wrapper } from '../../../generalTypes';
import dashboardRoutes from '../../../routes';
import Sidebar from '.';

describe('this test-suite unit tests <Sidebar/>', () => {
    let wrapper: Wrapper;
    beforeEach(() => {
        wrapper = createWrapper(Sidebar, WrapperTypes.Shallow, { dashboardRoutes });
    });
    it('should check if <Sidebar/> renders properly', () => {
        const sidebar: Wrapper = findByDataTestAttribute(wrapper, 'Sidebar');
        expect(sidebar.length).toBe(1);
    });
    it('should check if the sidebar__title div of <Sidebar/> renders properly', () => {
        const sidebar: Wrapper = findByDataTestAttribute(wrapper, 'Sidebar__title');
        expect(sidebar.length).toBe(1);
    });
    it('should check if the sidebar__items nav of <Sidebar/> renders properly', () => {
        const sidebarItems: Wrapper = findByDataTestAttribute(wrapper, 'Sidebar__items');
        expect(sidebarItems.length).toBe(1);
    });
    it('should check if the list items of sidebar__items , in the <Sidebar/>, render properly', () => {
        const sidebarItem: Wrapper = findByDataTestAttribute(wrapper, 'Sidebar__item');
        expect(sidebarItem.length).toBe(7);
    });
});
