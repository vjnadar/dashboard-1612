import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Wrapper, ReactProp, ReactFC } from '../../generalTypes';
import { WrapperType } from './types';
import { WrapperTypes } from './enums/';

export function findByDataTestAttribute(wrapper: Wrapper, elementStr: string): Wrapper {
    return wrapper.find(`[data-test='${elementStr}']`);
}
export function findByClassAttribute(wrapper: Wrapper, elementStr: string): Wrapper {
    return wrapper.find(`.${elementStr}`);
}
export function createWrapper(Component: ReactFC, wrapperType: WrapperType, props: ReactProp = {}): Wrapper {
    if (wrapperType === WrapperTypes.Shallow) {
        return shallow(<Component {...props} />);
    }
    return mount(
        <BrowserRouter>
            <Component {...props} />
        </BrowserRouter>
    );
}
