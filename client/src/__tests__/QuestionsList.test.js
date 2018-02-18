import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionsList from '../components/QuestionsList';
import Loading from '../components/Loading';

Enzyme.configure({ adapter: new Adapter() });

describe.only('<QuestionsList />', () => {
  test('should show loading', function() {
    const wrapper = shallow(<QuestionsList didSearch={true} loading={true} questions={[]} />);
    expect(wrapper.find('Loading').length).toBe(1);
  });

  test('should show no results', function() {
    const wrapper = shallow(<QuestionsList didSearch={true} loading={false} questions={[]} />);
    expect(wrapper.text()).toBe(
      "You're the first one to have this idea!Sorry, we couldn't find any results matching the selected tags and filters."
    );
  });
});
