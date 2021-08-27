import * as React from 'react';
import { createWrapper, findByDataTestAttribute, findByClassAttribute } from '../../../utilities';
import { Wrapper } from '../../../generalTypes';
import { WrapperTypes } from '../../../utilities/testFunctions/enums';
import ToggleButton from '.';

function createToggleButtonTestWrapper({ transformation, setTransformation, dark }): Wrapper {
    return createWrapper(ToggleButton, WrapperTypes.Shallow, {
        transformation,
        setTransformation,
        dark,
    });
}
describe('this test-suite unit tests <ToggleButton/>', () => {
    let wrapper: Wrapper;
    beforeEach(() => {
        wrapper = createWrapper(ToggleButton, WrapperTypes.Shallow, { transformation: true, setTransformation: jest.fn(), dark: false });
    });
    it('should check if <ToggleButton/> renders properly', () => {
        const toggleButtonComp: Wrapper = findByDataTestAttribute(wrapper, 'Toggle-Button');
        expect(toggleButtonComp.length).toBe(1);
    });
    it('should check if the Toggle-Button__burger div in the <ToggleButton/> renders properly', () => {
        const toggleButtonBurger: Wrapper = findByDataTestAttribute(wrapper, 'Toggle-Button__burger');
        expect(toggleButtonBurger.length).toBe(1);
    });
});
describe('this test-suite tests the behaviour of <ToggleButton>', () => {
    it('should the state of <Modal/>, when transformation is true', () => {
        const wrapper: Wrapper = createToggleButtonTestWrapper({ transformation: true, setTransformation: jest.fn(), dark: false  });
        const toggleBtnComp = findByClassAttribute(wrapper, 'Toggle-Button');
        expect(toggleBtnComp.length).toBe(1);
    });
    it('should the state of <Modal/>, when transformation is false', () => {
        const wrapper: Wrapper = createToggleButtonTestWrapper({ transformation: false, setTransformation: jest.fn(), dark: false  });
        const toggleBtnComp = findByClassAttribute(wrapper, 'open');
        expect(toggleBtnComp.length).toBe(1);
    });
    it('should the state of <Modal/>, when dark is false', () => {
        const wrapper: Wrapper = createToggleButtonTestWrapper({ transformation: false, setTransformation: jest.fn(), dark: false  });
        const toggleBtnBurger = findByClassAttribute(wrapper, 'Toggle-Button__burger');
        expect(toggleBtnBurger.length).toBe(1);
    });
    it('should the state of <Modal/>, when dark is true', () => {
        const wrapper: Wrapper = createToggleButtonTestWrapper({ transformation: false, setTransformation: jest.fn(), dark: true  });
        const toggleBtnBurger = findByClassAttribute(wrapper, 'dark');
        expect(toggleBtnBurger.length).toBe(1);
    });
});
