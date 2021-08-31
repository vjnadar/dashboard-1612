import { createWrapper, findByDataTestAttribute } from '../../../utilities';
import { Wrapper } from '../../../generalTypes';
import { WrapperTypes } from '../../../utilities/testFunctions/enums';
import Modal from '.';

function createModalTestWrapper({ modalCloseFunction, arg }): Wrapper {
    return createWrapper(Modal, WrapperTypes.Shallow, { modalCloseFunction, arg });
}
describe('this test-suite unit tests <Modal/>', () => {
    let wrapper: Wrapper;
    beforeEach(() => {
        wrapper = createWrapper(Modal, WrapperTypes.Shallow, { modalCloseFunction: jest.fn(), arg: 'Mock_String' });
    });
    it('should check if <Modal/> renders properly', () => {
        const modalComp: Wrapper = findByDataTestAttribute(wrapper, 'Modal');
        expect(modalComp.length).toBe(1);
    });
});
describe('this test-suite tests the behaviour of <Modal/>', () => {
    it('should test <Modal/>, when open is true', () => {
        const modalCloseFn = jest.fn();
        const wrapper: Wrapper = createModalTestWrapper({ modalCloseFunction: modalCloseFn, arg: 'Mock_String' });
        const modalComp = findByDataTestAttribute(wrapper, 'Modal');
        modalComp.simulate('click');
        expect(modalCloseFn).toHaveBeenCalledWith('Mock_String');
    });
});
