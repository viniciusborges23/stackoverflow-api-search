import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NoResults from '../components/NoResults';

Enzyme.configure({ adapter: new Adapter() });

describe('<NoResults />', () => {
  test('should render without throwing an error', () => {
    const wrapper = shallow(<NoResults />);
    const expected = (
      <div className="no-results text-center">
        <h4>You&apos;re the first one to have this idea!</h4>
        <p>Sorry, we could&apos;t find any results matching the selected tags and filters.</p>
      </div>
    );
    expect(wrapper.contains(expected)).toBe(true);
  });
});
