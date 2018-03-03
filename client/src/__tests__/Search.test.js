import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Creatable } from 'react-select';

import Search from '../components/Search';

Enzyme.configure({ adapter: new Adapter() });

describe.skip('<Search />', () => {
  const filters = {
    tags: [{ value: 'javascript', label: 'javascript', clearableValue: false }],
    score: 0,
    limit: 15,
    sort: 'activity',
  };

  const onSubmit = () => {};
  const handleTagsChange = () => {};
  const handleLimitChange = () => {};
  const handleScoreChange = () => {};
  const handleSortChange = () => {};

  const wrapper = shallow(
    <Search
      onSubmit={onSubmit}
      filters={filters}
      onTagsChange={handleTagsChange}
      onLimitChange={handleLimitChange}
      onScoreChange={handleScoreChange}
      onSortChange={handleSortChange}
    />
  );

  test('should find a form', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

  test('should find a select for tags', () => {
    expect(wrapper.find(Creatable).length).toBe(1);
  });

  test('should find a select for limit', () => {
    expect(wrapper.find('select#limit').length).toBe(1);
  });

  test('should find a select for sort', () => {
    expect(wrapper.find('select#sort').length).toBe(1);
  });

  test('should find a input for score', () => {
    expect(wrapper.find('input#score').length).toBe(1);
  });

  test('should find a search button', () => {
    expect(wrapper.find('button').length).toBe(1);
  });
});
