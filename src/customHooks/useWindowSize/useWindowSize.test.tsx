import * as React from 'react';
import { createWrapper, findByDataTestAttribute } from '../../utilities';
import { Wrapper } from '../../generalTypes';
import { WrapperTypes } from '../../utilities/testFunctions/enums';
import * as customHook from '.';

describe('this test-suite unit tests the useWindowSize hook', () => {
    it('should test if the useWindowSize hook is called inside a dummy component', () => {
        const mockUseWindowSize = jest.spyOn(customHook, 'useWindowSize');
        const wrapper: Wrapper = createWrapper(() => {
            const [width] = customHook.useWindowSize();
            return <div data-test="Window-size">{width}</div>;
        }, WrapperTypes.Shallow);
        expect(mockUseWindowSize).toBeCalledTimes(1);
    });
    it('should test if the useWindowSize hook produces a width value inside a dummy component', () => {
        const wrapper: Wrapper = createWrapper(() => {
            const [width] = customHook.useWindowSize();
            return <div data-test="Window-size">{width}</div>;
        }, WrapperTypes.Mounted);
        const windowSizeElement = findByDataTestAttribute(wrapper, 'Window-size');
        expect(windowSizeElement.text()).toBe(window.innerWidth.toString());
    });
});
