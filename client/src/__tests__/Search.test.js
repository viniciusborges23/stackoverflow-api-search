import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from '../components/Search';
import { Creatable } from 'react-select';

Enzyme.configure({ adapter: new Adapter() });

const filters = {
  tags: [{ value: 'javascript', label: 'javascript', clearableValue: false }],
  score: 0,
  limit: 15,
  sort: 'activity'
};

const wrapper = shallow(<Search filters={filters} />);

describe.only('<Search />', () => {
  test('should find a form', function() {
    expect(wrapper.find('form').length).toBe(1);
  });

  test('should find a select for tags', function() {
    expect(wrapper.find(Creatable).length).toBe(1);
  });

  test('should find a select for limit', function() {
    expect(wrapper.find('select#limit').length).toBe(1);
  });

  test('should find a select for sort', function() {
    expect(wrapper.find('select#sort').length).toBe(1);
  });

  test('should find a input for score', function() {
    expect(wrapper.find('input#score').length).toBe(1);
  });

  test('should find a search button', function() {
    expect(wrapper.find('button').length).toBe(1);
  });
});
