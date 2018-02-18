import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../components/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('should render without throwing an error', function() {
    expect(
      shallow(<Header />).contains(
        <header>
          <div className="container text-center">
            <h1 className="display-4">StackOverflow</h1>
          </div>
        </header>
      )
    ).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Header />).find('header').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Header />).text()).toEqual('StackOverflow');
  });
});
