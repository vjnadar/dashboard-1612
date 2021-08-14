import { createWrapper, findByDataTestAttribute } from '../../../utilities';
import { Wrapper } from '../../../generalTypes';
import { WrapperTypes } from '../../../utilities/testFunctions/enums';
import Footer from './';

describe('this test-suite unit tests <Footer/>', () => {
    let wrapper: Wrapper;
    beforeEach(() => {
        wrapper = createWrapper(Footer, WrapperTypes.Shallow);
    });
    it('should check if <Footer/> renders properly', () => {
        const footer: Wrapper = findByDataTestAttribute(wrapper, 'Footer');
        expect(footer.length).toBe(1);
    });
    it('should check if the text of Footer__text div in the <Footer > renders properly', () => {
        const footer: Wrapper = findByDataTestAttribute(wrapper, 'Footer__text');
        expect(footer.text().trim()).toBe('© 2021 Korkai Software, All Rights Reserved.');
    });
});
