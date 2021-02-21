import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

jest.useFakeTimers()

describe('<App />', () => {
    it('should render snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
      });
  });
