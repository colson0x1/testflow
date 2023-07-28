import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

/*
The entire purpose of this test is to confirm 
that our application can reach out to the JSON API 
and fetch a lists of comments by itself
*/
it('can fetch a list of comments and display them', () => {
  // Attempt to render the *entire* App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchComments' button and click it

  // Expect to find a list of comments
});
