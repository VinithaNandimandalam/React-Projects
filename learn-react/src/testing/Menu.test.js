import { configure, shallow } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

import React from 'react';
import Menu, { MenuItem } from './Menu';

configure({ adapter: new adapter() });

describe('MenuItems', () => {
    it('should render 3 menuitems for authenticated wuser', () => {
        const Wrapper = shallow(<Menu />);
        Wrapper.setProps({authenticated:true});
        expect(Wrapper.find(MenuItem)).toHaveLength(3);
    });
    it('should render 2 menuitems for not authenticated user', () => {
        const Wrapper = shallow(<Menu />);
        Wrapper.setProps({authenticated:false});
        expect(Wrapper.find(MenuItem)).toHaveLength(2);
    });
});

