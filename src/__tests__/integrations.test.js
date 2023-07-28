import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

/*
The entire purpose of this test is to confirm 
that our application can reach out to the JSON API 
and fetch a lists of comments by itself
*/

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'Fetched #1' },
      { name: 'Fetched #2' },
      { name: 'Fetched #3' },
      { name: 'Fetched #4' },
    ],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', () => {
  // Attempt to render the *entire* App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // Expect to find a list of comments
  expect(wrapped.find('li').length).toEqual(4);
});
