import React from 'react';

import Input from 'src/Components/Input';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

describe('Render Input', () => {
  it('should render correctly', () => {
    const {getByText, getByTestId, queryByText, getByDisplayValue} = render(
      <Input />,
    );

    const input = getByTestId('input');
    expect(input).toBeDefined();
    const textoDigitado = 'funciona';
    fireEvent.changeText(input, textoDigitado);
    const textInInput = queryByText(textoDigitado);
    expect(textInInput).toBeDefined();
    expect(input.props.value).toContain(textoDigitado);

    const text = getByTestId('text');
    expect(text).toBeDefined();
    expect(text).toHaveTextContent(textoDigitado);

    const textButton = 'Clique aqui';
    const button = getByText(textButton);
    expect(button).toBeTruthy();
    fireEvent.press(button);
    expect(input.props.value).toContain('');

    const container = getByTestId('container');
    expect(container).toBeDefined();
    expect(container).toHaveStyle({backgroundColor: 'red'});
  });
});
