import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../components/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  test('should render without throwing an error', () => {
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

  test('should mount in a full DOM', () => {
    expect(mount(<Header />).find('header').length).toBe(1);
  });

  test('should render to static HTML', () => {
    expect(render(<Header />).text()).toEqual('StackOverflow');
  });
});
