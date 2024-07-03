import { render, screen } from '@testing-library/react';
import Details from '../src/app/pages/details/[id]';

test('renders loading initially', () => {
    render(<Details />);
    const loadingElement = screen.getByText(/loading/i);
    expect(loadingElement).toBeInTheDocument();
});
