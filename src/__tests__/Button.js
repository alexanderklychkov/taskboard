import React from 'react';
import Button from '../components/Button';
import renderer from 'react-test-renderer';

test('Срабатывание функции onClick() при нажатии', () => {
  const component = renderer.create(
    <Button>Добавить задачу</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});