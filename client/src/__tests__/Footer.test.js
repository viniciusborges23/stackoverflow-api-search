import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from '../components/Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  test('should render without throwing an error', () => {
    expect(
      shallow(<Footer />).contains(
        <footer>
          <div className="container text-center">
            <small>by Vinicius Borges</small>
          </div>
        </footer>
      )
    ).toBe(true);
  });

  test('should mount in a full DOM', () => {
    expect(mount(<Footer />).find('footer').length).toBe(1);
  });

  test('should render to static HTML', () => {
    expect(render(<Footer />).text()).toEqual('by Vinicius Borges');
  });
});
