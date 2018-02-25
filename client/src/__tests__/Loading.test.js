import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loading from '../components/Loading';

Enzyme.configure({ adapter: new Adapter() });

describe('<Loading />', () => {
  test('should render without throwing an error', () => {
    expect(shallow(<Loading />).contains(<div className="loading text-center">Loading...</div>)).toBe(true);
  });

  test('should render to static HTML', () => {
    expect(render(<Loading />).text()).toEqual('Loading...');
  });
});
