import { createWrapper, findByDataTestAttribute } from '../../utilities';
import { Wrapper } from '../../generalTypes';
import { WrapperTypes } from '../../utilities/testFunctions/enums';
import DashboardLayout from '.';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DashboardMenuLayout from './DashboardMenuLayout';

describe('this test-suite unit tests <DashboardLayout/>', () => {
    let wrapper: Wrapper;
    beforeEach(() => {
        wrapper = createWrapper(DashboardLayout, WrapperTypes.Shallow);
    });
    it('should check if <DashboardLayout/> renders properly', () => {
        const dashboardLayout: Wrapper = findByDataTestAttribute(wrapper, 'Dashboard-Layout');
        expect(dashboardLayout.length).toBe(1);
    });
    it('should check if the Dashboard-Layout__container div of <DashboardLayout/> render properly', () => {
        const dashboardLayoutContainer: Wrapper = findByDataTestAttribute(wrapper, 'Dashboard-Layout__container');
        expect(dashboardLayoutContainer.length).toBe(1);
    });
    it('should check if the <Navbar/> of <DashboardMenuLayout/> renders properly', () => {
        expect(wrapper.find(Navbar).length).toBe(1);
    });
    it('should check if the <Sidebar/> of <DashboardMenuLayout/> renders properly', () => {
        expect(wrapper.find(Sidebar).length).toBe(1);
    });
    it('should check if the <DashboardMenuLayout/> of <DashboardMenuLayout/> renders properly', () => {
        expect(wrapper.find(DashboardMenuLayout).length).toBe(1);
    });
});
// describe('this test-suite runs integration tests on the <DashboardLayout/>', () => {
//     let wrapper: Wrapper;
//     beforeEach(() => {
//         wrapper = createWrapper(DashboardLayout, WrapperTypes.Mounted);
//     });
//     it('should check if <Dashboard/> renders properly', () => {
//         const dashboard: Wrapper = findByDataTestAttribute(wrapper, 'Dashboard-Layout');
//         console.log(dashboard.debug());
//         expect(dashboard.length).toBe(1);
//     });
// });
