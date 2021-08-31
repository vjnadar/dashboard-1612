import * as React from 'react';
import SpyInstance from 'jest';
import { createWrapper, findByDataTestAttribute, findByClassAttribute } from '../../utilities';
import DashboardLayout from '.';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DashboardMenuLayout from './DashboardMenuLayout';
import { Wrapper } from '../../generalTypes';
import { WrapperTypes } from '../../utilities/testFunctions/enums';

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
    it('should check if the <Navbar/> of <DashboardLayout/> renders properly', () => {
        expect(wrapper.find(Navbar).length).toBe(1);
    });
    it('should check if the <Sidebar/> of <DashboardLayout/> renders properly', () => {
        expect(wrapper.find(Sidebar).length).toBe(1);
    });
    it('should check if the <DashboardMenuLayout/> of <DashboardLayout/> renders properly', () => {
        expect(wrapper.find(DashboardMenuLayout).length).toBe(1);
    });
});
// describe('this test-suite tests the behaviour of <DashboardLayout/>', () => {
    // it('should test useEffect hook of <DashboardLayout/>', () => {
    //     const mockUseEffect = jest.spyOn(React, 'useEffect');
    //     // const mockUseState=jest.spyOn(React,'useState');
    //     const wrapper = createWrapper(DashboardLayout, WrapperTypes.Mounted);
    //     expect(mockUseEffect).toBeCalled();
    // });
    // it('should test the transformation state of <DashboardLayout/>', () => {
        
    //     // Change the viewport to 500px.
    //     global.innerWidth = 500;
    //     const useStateSpy = jest.spyOn(React, 'useState');
    //     const setState=jest.fn();
    //     useStateSpy.mockImplementation(() => ["", setState]);
    //     const wrapper = createWrapper(DashboardLayout, WrapperTypes.Mounted);
    //     // Trigger the window resize event.
    //     // global.dispatchEvent(new Event('resize'));
    //     // const sideBarTransformed = findByClassAttribute(wrapper, 'Dashboard-Layout__sidebar-layout-container');
    //     // console.log(sideBarTransformed.debug());
    //     expect(setState).toBeCalled();
    // });
// });

