import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionsList from '../components/QuestionsList';

Enzyme.configure({ adapter: new Adapter() });

describe('<QuestionsList />', () => {
  test('should show <Loading />', () => {
    const wrapper = shallow(<QuestionsList error={false} didSearch loading questions={[]} />);
    expect(wrapper.find('Loading').length).toBe(1);
  });

  test('should show <NoResults />', () => {
    const wrapper = shallow(<QuestionsList error={false} didSearch loading={false} questions={[]} />);
    expect(wrapper.find('NoResults').length).toBe(1);
  });

  test('question item', () => {
    const questions = [
      {
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
          link: 'https://stackoverflow.com/users/4855256/dariush',
        },
      },
    ];
    const wrapper = shallow(<QuestionsList error={false} didSearch loading={false} questions={questions} />);
    expect(wrapper.find('QuestionsListItem').length).toBe(1);
  });
});
