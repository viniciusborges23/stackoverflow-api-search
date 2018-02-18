import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loading from '../components/Loading';

Enzyme.configure({ adapter: new Adapter() });

describe('<Loading />', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<Loading />).contains(<div className="text-center">Loading...</div>)).toBe(true);
  });

  it('should render to static HTML', function() {
    expect(render(<Loading />).text()).toEqual('Loading...');
  });
});
