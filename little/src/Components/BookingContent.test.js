import { render, screen } from "@testing-library/react";
import BookingForm from './BookingContent';

test('Renders the form heading 1', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});
