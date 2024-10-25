import React from 'react';
import { render } from '@testing-library/react';
import Logo from './index';

describe('Logo Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<Logo />);
        expect(container).toBeInTheDocument();
    });

    it('renders with default size', () => {
        const { container } = render(<Logo />);
        const svgElement = container.querySelector('svg');
        expect(svgElement).toHaveAttribute('width', '130');
        expect(svgElement).toHaveAttribute('height', '60');
    });

    it('renders with large size', () => {
        const { container } = render(<Logo size="large" />);
        const svgElement = container.querySelector('svg');
        expect(svgElement).toHaveAttribute('width', '160');
        expect(svgElement).toHaveAttribute('height', '60');
    });

    it('applies the correct class name', () => {
        const { container } = render(<Logo />);
        const divElement = container.querySelector('div');
        expect(divElement).toHaveClass('Logo');
    });
});
