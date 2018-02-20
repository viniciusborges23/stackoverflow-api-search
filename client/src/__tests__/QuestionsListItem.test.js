import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionsListItem from '../components/QuestionsListItem';

Enzyme.configure({ adapter: new Adapter() });

describe('<QuestionsListItem />', () => {
  const question = {
    tags: ['javascript', 'html'],
    title: 'How to display an element inline that is located in another place in DOM?',
    question_id: 48858187,
    score: 0,
    view_count: 6,
    answer_count: 0,
    creation_date: 1519000607,
    link:
      'https://stackoverflow.com/questions/48858187/how-to-display-an-element-inline-that-is-located-in-another-place-in-dom',
    owner: {
      profile_image: 'https://www.gravatar.com/avatar/a882f6a0a82864cbd7690e12aa766f83?s=128&d=identicon&r=PG&f=1',
      display_name: 'Dariush',
      link: 'https://stackoverflow.com/users/4855256/dariush'
    }
  };

  test('owner image exibition', () => {
    const wrapper = shallow(<QuestionsListItem question={question} />);
    expect(wrapper.find('figure').length).toBe(1);
  });

  test('existing javascript tag', () => {
    const wrapper = shallow(<QuestionsListItem question={question} />);
    const received = wrapper.find('.badge').contains('javascript');
    expect(received).toBe(true);
  });
});
