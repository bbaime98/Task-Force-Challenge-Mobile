import React from 'react';
import renderer from 'react-test-renderer';
import AddButton from '../../components/common/AddButton';

jest.useFakeTimers()

it('should render AddButton component', () => {
    const rendered = renderer.create(<AddButton />).toJSON();
    expect(rendered).toBeTruthy();
});
it('AddButton snapshot', () => {
    const tree = renderer.create(<AddButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
