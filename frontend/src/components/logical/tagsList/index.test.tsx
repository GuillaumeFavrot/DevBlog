import '@testing-library/jest-dom'
import React from 'react';
import TagsList from './index';
import { renderWithProviders } from '../../../tests/test-utils';

describe('TagsList', () => {
	const tags = [
		{
			name: 'test_tag_1',
			background_color: '#123456',
			text_color: '#000000'
		},
		{
			name: 'test_tag_2',
			background_color: '#124356',
			text_color: '#000000'
		},
		{
			name: 'test_tag_3',
			background_color: '#123546',
			text_color: '#000000'
		},

	];

	it('renders a list of tags', () => {
		const component = renderWithProviders(<TagsList tags={tags} />);
		tags.forEach(tag => {
			const tagElement = component.getByText(tag.name);
			expect(tagElement).toBeInTheDocument();
		});
	});
});