import { createWrapper, findByDataTestAttribute } from '../../../utilities';
import { Wrapper } from '../../../generalTypes';
import { WrapperTypes } from '../../../utilities/testFunctions/enums';
import dashboardRoutes from '../../../routes';
import DashboardMenuLayout from '.';
import { Footer } from '../../UI';

describe('this test-suite unit tests <DashboardMenuLayout/>', () => {
    let wrapper: Wrapper;
    beforeEach(() => {
        wrapper = createWrapper(DashboardMenuLayout, WrapperTypes.Shallow, { dashboardRoutes });
    });
    it('should check if <DashboardMenuLayout/> renders properly', () => {
        const dashboardMenuLayout: Wrapper = findByDataTestAttribute(wrapper, 'Dashboard-Menu-Layout');
        expect(dashboardMenuLayout.length).toBe(1);
    });
    it('should check if the <Footer/> of <DashboardMenuLayout/> renders properly', () => {
        expect(wrapper.find(Footer).length).toBe(1);
    });
});
