import { createWrapper, findByDataTestAttribute, findByClassAttribute } from '../../../utilities';
import { Wrapper } from '../../../generalTypes';
import { WrapperTypes } from '../../../utilities/testFunctions/enums';
import { profileDropdownItems } from '../../DashboardLayout/Navbar/data';
import Dropdown from '.';

function createDropdownTestWrapper({ dropdownItems, dropdownDirectionReverse, setOpen, open, dropdownName, avatarImgSrc, large }): Wrapper {
    return createWrapper(Dropdown, WrapperTypes.Shallow, { dropdownItems, dropdownDirectionReverse, setOpen, open, dropdownName, avatarImgSrc, large });
}
describe('this test-suite unit tests <Searchbar/>', () => {
    let wrapper: Wrapper;
    beforeEach(() => {
        wrapper = createWrapper(Dropdown, WrapperTypes.Shallow, {
            dropdownItems: profileDropdownItems,
            dropdownDirectionReverse: false,
            setOpen: jest.fn(),
            open: true,
            dropdownName: 'profileDropdown',
            avatarImgSrc: 'Something',
            large: false,
        });
    });
    it('should check if <Dropdown/> renders properly', () => {
        const dropdownComp: Wrapper = findByDataTestAttribute(wrapper, 'Dropdown');
        expect(dropdownComp.length).toBe(1);
    });
    it('should check if the Dropdown__avatar li of the <Dropdown/> renders properly', () => {
        const dropdownAvatar: Wrapper = findByDataTestAttribute(wrapper, 'Dropdown__avatar');
        expect(dropdownAvatar.length).toBe(1);
    });
    it('should check if the Dropdown__content ul of the <Dropdown/> renders properly', () => {
        const dropdownContent: Wrapper = findByDataTestAttribute(wrapper, 'Dropdown__content');
        expect(dropdownContent.length).toBe(1);
    });
    it('should check if the Dropdown__item li of the <Dropdown/> renders properly', () => {
        const dropItem: Wrapper = findByDataTestAttribute(wrapper, 'Dropdown__item');
        expect(dropItem.length).toBe(profileDropdownItems.length);
    });
});
describe('this test-suite tests the behaviour of <Dropdown/>', () => {
    it('should check if the setOpen fn of <Dropdown/>', () => {
        const mockSetOpen = jest.fn();
        const wrapper: Wrapper = createDropdownTestWrapper({
            dropdownItems: profileDropdownItems,
            dropdownDirectionReverse: false,
            setOpen: mockSetOpen,
            open: true,
            dropdownName: 'profileDropdown',
            avatarImgSrc: 'Something',
            large: false,
        });
        const dropdownHeader = findByDataTestAttribute(wrapper, 'Dropdown');
        dropdownHeader.simulate('click');
        expect(mockSetOpen).toHaveBeenCalledWith('profileDropdown');
    });
    it('should check the dropdown-content segment when open(props) is false', () => {
        const wrapper: Wrapper = createDropdownTestWrapper({
            dropdownItems: profileDropdownItems,
            dropdownDirectionReverse: false,
            setOpen: jest.fn(),
            open: false,
            dropdownName: 'profileDropdown',
            avatarImgSrc: 'Something',
            large: false,
        });
        const dropdownContent = findByClassAttribute(wrapper, 'Dropdown__content');
        expect(dropdownContent.length).toBe(1);
    });
    it('should check the dropdown-content segment when open(props) is true', () => {
        const wrapper: Wrapper = createDropdownTestWrapper({
            dropdownItems: profileDropdownItems,
            dropdownDirectionReverse: false,
            setOpen: jest.fn(),
            open: true,
            dropdownName: 'profileDropdown',
            avatarImgSrc: 'Something',
            large: false,
        });
        const dropdownContent = findByClassAttribute(wrapper, 'open');
        expect(dropdownContent.length).toBe(1);
    });
});
