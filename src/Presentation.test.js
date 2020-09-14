import React from 'react';
import { render } from '@testing-library/react';
import Presentation from './Presentation';

test('Presentation renders', () => {
  const Presentation = render(<Presentation />);
  expect(Presentation).toBeCalled();
});
