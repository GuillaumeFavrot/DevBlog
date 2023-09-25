import React from 'react';
import Button from './index';
import '@testing-library/jest-dom'
import { renderWithProviders } from '../../../tests/test-utils';

describe('Button', () => {
  
	it('renders with default props', () => {
		const component = renderWithProviders(<Button buttonParams={{ content: 'Click me' }} />);
		const button = component.getByText('Click me');
		expect(button).toBeInTheDocument();
		expect(button).toHaveStyle('color: #000000');
		expect(button).toHaveStyle('display: block');
	});

	it('renders with custom props', () => {
		const component = renderWithProviders(
		<Button
			buttonParams={{
			content: 'Click me',
			background_color: '#ff0000',
			text_color: '#ffffff',
			visible: false,
			onClickFunction: jest.fn(),
			ariaLabel: 'Click me button',
			}}
		/>
		);
		const button = component.getByText('Click me');
		expect(button).toBeInTheDocument();
		expect(button).toHaveStyle('background-color: #ff0000');
		expect(button).toHaveStyle('color: #ffffff');
		expect(button).toHaveStyle('display: none');
	});
});