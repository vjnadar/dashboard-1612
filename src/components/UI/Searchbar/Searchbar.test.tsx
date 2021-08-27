import { createWrapper, findByDataTestAttribute, findByClassAttribute } from '../../../utilities';
import { Wrapper } from '../../../generalTypes';
import { WrapperTypes } from '../../../utilities/testFunctions/enums';
import Searchbar from '.';

function createSearchbarTestWrapper({ open, toggle }): Wrapper {
    return createWrapper(Searchbar, WrapperTypes.Shallow, {
        open,
        toggle,
    });
}
describe('this test-suite unit tests <Searchbar/>', () => {
    let wrapper: Wrapper;
    beforeEach(() => {
        wrapper = createWrapper(Searchbar, WrapperTypes.Shallow, { open: false, toggle: jest.fn() });
    });
    it('should check if <Searchbar/> renders properly', () => {
        const searchbarComp: Wrapper = findByDataTestAttribute(wrapper, 'Searchbar');
        expect(searchbarComp.length).toBe(1);
    });
    it('should check if the Searchbar__container div in the <Searchbar/> renders properly', () => {
        const searchbarContainer: Wrapper = findByDataTestAttribute(wrapper, 'Searchbar__container');
        expect(searchbarContainer.length).toBe(1);
    });
    it('should check if Searchbar__input input box in the <Searchbar/> renders properly', () => {
        const searchbarInput: Wrapper = findByDataTestAttribute(wrapper, 'Searchbar__input');
        expect(searchbarInput.length).toBe(1);
    });
});
describe('this test-suite tests the behaviour of <Searchbar/>', () => {
    it("should check <Searchbar/>, when open(props) is true",()=>{
        const wrapper:Wrapper=createSearchbarTestWrapper({open:true,toggle:jest.fn()});
        const elementWithTransitionClass=findByClassAttribute(wrapper,"slide-down");
        console.log(elementWithTransitionClass.debug())
        expect(elementWithTransitionClass.length).toBe(1);
    })
    it("should check <Searchbar/>, when open(props) is false",()=>{
        const wrapper:Wrapper=createSearchbarTestWrapper({open:false,toggle:jest.fn()});
        const elementWithTransitionClass=findByClassAttribute(wrapper,"Searchbar__container");
        expect(elementWithTransitionClass.length).toBe(1);
    })
});
