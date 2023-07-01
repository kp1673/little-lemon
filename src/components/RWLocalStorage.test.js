import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./BookingPage";

const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

describe("Booking Page", () => {

    beforeEach(() => {
      Object.defineProperty(window, "localStorage", {
        value: {
          getItem: jest.fn(() => null),
          setItem: jest.fn(() => null),
        },
        writable: true,
      });
    });

    it("Should call localStorage getItem on render", () => {
        render(
            <BrowserRouter>
                <BookingPage/>
            </BrowserRouter>
        );
        expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
        expect(window.localStorage.getItem).toHaveBeenCalledWith("booking");
    });

    it("Should call localStorage setItem on booking date change", () => {
        render(
        <BrowserRouter>
            <BookingPage/>
        </BrowserRouter>);

        const dateInput = screen.getByTestId("date-input");
        fireEvent.change(dateInput, { target: { value: '2024-12-31' } });

        expect(window.localStorage.setItem).toHaveBeenCalledTimes(2);
        expect(window.localStorage.setItem).toHaveBeenLastCalledWith("booking", "\"2024-12-31\"");

    });
  });