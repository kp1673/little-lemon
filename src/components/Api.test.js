import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./BookingPage";

const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

test('Renders the booking form heading', () => {

  render(
    <BrowserRouter>
      <BookingPage/>
    </BrowserRouter>
  );

  const headingElement = screen.getByText("TABLE BOOKING");

  expect(headingElement).toBeInTheDocument();
});


test('The available times change when a different date is selected.', () => {

  render(
    <BrowserRouter>
      <BookingPage/>
    </BrowserRouter>
  );

  const dateInput = screen.getByTestId("date-input");

  let initialTimes = Array.from(screen.getAllByTestId('select-option')).map(e => e.value);

  fireEvent.change(dateInput, { target: { value: '2024-12-31' } });

  let finalTimes = Array.from(screen.getAllByTestId('select-option')).map(e => e.value);

  expect(finalTimes).not.toEqual(initialTimes);
});