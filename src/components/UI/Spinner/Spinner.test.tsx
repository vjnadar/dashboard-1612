import { createWrapper, findByDataTestAttribute } from '../../../utilities';
import { Wrapper } from '../../../generalTypes';
import { WrapperTypes } from '../../../utilities/testFunctions/enums';
import Spinner from './';

describe('this test-suite unit tests <Spinner/>', () => {
    let wrapper: Wrapper;
    beforeEach(() => {
        wrapper = createWrapper(Spinner, WrapperTypes.Shallow);
    });
    it('should check if <Spinner/> renders properly', () => {
        const spinner: Wrapper = findByDataTestAttribute(wrapper, 'Spinner');
        expect(spinner.length).toBe(1);
    });
});
