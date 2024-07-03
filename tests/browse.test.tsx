import { render, screen } from '@testing-library/react';
import Browse from '../src/app/page';

test('renders search input', () => {
    render(<Browse />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeInTheDocument();
});
