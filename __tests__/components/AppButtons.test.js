import React from 'react';
import renderer from 'react-test-renderer';
import AppButton from '../../components/common/AppButton';

jest.useFakeTimers()

it('should render AppButton', () => {
    const rendered = renderer.create(<AppButton />).toJSON();
    expect(rendered).toBeTruthy();
});
it('AppButton snapshot', () => {
    const tree = renderer.create(<AppButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
