import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('if App works correctly', () => {
  test('App should renders', () => {
    const app = shallow(<App />);

    expect(app.exists()).toBe(true);
  });
});
