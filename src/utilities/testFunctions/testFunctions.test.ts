import { findByDataTestAttribute, createWrapper } from './index';
import { WrapperTypes } from './enums';
import { Wrapper } from '../../generalTypes';
import App from '../../App';

describe('this test suite contains unit tests of the testFunctions module', () => {
    it('should test the findByDataTestAttribute fn and createWrapperFn. The test uses the app component. ', () => {
        const wrapper: Wrapper = createWrapper(App, WrapperTypes.Shallow);
        const app: Wrapper = findByDataTestAttribute(wrapper, 'App');
        expect(app.length).toBe(1);
    });
});
