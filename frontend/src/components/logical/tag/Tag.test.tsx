import React from 'react';
import TagComponent from './index';
import '@testing-library/jest-dom'
import { renderWithProviders } from '../../../tests/test-utils';

let component: any;

describe('TagComponent', () => {
	const tag = {
		name: 'Test Tag',
		background_color: '#000000',
		text_color: '#ffffff',
		icon: 'test-icon',
	};

	beforeEach(() => {
		component = renderWithProviders(<TagComponent tag={tag} />);
	});

	it('renders tag name', () => {
		const tagName = component.getByText(tag.name);
		expect(tagName).toBeInTheDocument();
	});

	it('renders tag background color', () => {
		const tagContainer = component.getByLabelText('tag-container');
		expect(tagContainer).toHaveStyle(`background-color: ${tag.background_color}`);
	});

	it('renders tag text color', () => {
		const tagName = component.getByText(tag.name);
		expect(tagName).toHaveStyle(`color: ${tag.text_color}`);
	});

	it('renders tag icon', () => {
		const tagIcon = component.getByAltText('tag');
		expect(tagIcon).toHaveAttribute('src', `http://127.0.0.1:8000/posts/icons/?q=${tag.icon}`);
	});
});