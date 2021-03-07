import React from 'react';
import renderer from 'react-test-renderer';
import AppText from '../../components/common/AppText';

jest.useFakeTimers()

it('should render AppText component', () => {
    const rendered = renderer.create(<AppText />).toJSON();
    expect(rendered).toBeTruthy();
});
it('AppText snapshot', () => {
    const tree = renderer.create(<AppText />).toJSON();
    expect(tree).toMatchSnapshot();
});
