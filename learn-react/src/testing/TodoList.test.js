import { configure, shallow } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

import React from 'react';
import Menu, { MenuItem } from './Menu';
import { TodoList, TodoItem } from './TodoList';

configure({ adapter: new adapter() });

describe('TodoList', () => {
    it('should render 3 menuitems for authenticated user', () => {
const wrapper=shallow(<TodoList items={[{},{}]} />);
wrapper.setProps({comptd:true});
expect(wrapper.find(TodoItem)).toHaveLength(2);
    });
});

