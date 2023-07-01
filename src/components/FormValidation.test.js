import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./BookingPage";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const setup = () => {
  return render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
}

jest.useFakeTimers();

const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

describe("Booking page component", () => {
  it("should render Booking Page component correctly", () => {
    setup();
    const element = screen.getByRole("main");
    const alertElement = screen.getByTestId("alert-box");
    expect(element).toBeInTheDocument();
    expect(alertElement).toBeInTheDocument();
  });

  it("should disable submit button when all the fields are not entered", () => {
    setup();
    const submitButton = screen.getByText(/Make a Reservation/i);
    expect(submitButton.closest('button')).toBeDisabled();
  });

  it("should validate the reservation date entered by the user", async () => {
    setup();
    const dateInput = screen.getByTestId('date-input');

    await userEvent.click(dateInput);
    fireEvent.blur(dateInput);
    expect(screen.queryByText(/Reservation date is required/i)).toBeVisible();

    await userEvent.type(dateInput, '2024-12-31');
    fireEvent.blur(dateInput);
    expect(dateInput).toHaveValue('2024-12-31');
    expect(screen.queryByText(/Reservation date is required/i)).toBeNull();
  });

  it("should validate the reservation time entered by the user", () => {
    setup();
    const dateInput = screen.getByTestId('date-input');
    const timeSelect = screen.getByRole('combobox', {name: /time/i});

    userEvent.click(timeSelect);
    fireEvent.blur(timeSelect);
    expect(screen.queryByText(/Reservation time is required/i)).toBeVisible();

    fireEvent.change(dateInput, { target: { value: '' } });

    userEvent.selectOptions(timeSelect, screen.getAllByTestId('select-option')[0].value);
    fireEvent.blur(timeSelect);

    expect(screen.queryByText(/Please choose a reservation date first/i)).toBeVisible();

    fireEvent.change(dateInput, { target: { value: '2024-12-31' } });

    userEvent.selectOptions(timeSelect, screen.getAllByTestId('select-option')[0].value);
    fireEvent.blur(timeSelect);
    expect(screen.getByRole('option', {name: screen.getAllByTestId('select-option')[0].value}).selected).toBe(true);
    expect(screen.queryByText(/Please choose a reservation date first/i)).toBeNull();
  });

  it("should validate the number of diners entered by the user", async () => {
    setup();
    const countInput = screen.getByRole('spinbutton', {name: /count/i});

    userEvent.click(countInput);
    fireEvent.blur(countInput);
    expect(screen.queryByText(/Number of diners is required/i)).toBeVisible();

    await userEvent.type(countInput, '15');
    fireEvent.blur(countInput);
    expect(screen.queryByText(/Number of diners is required/i)).toBeNull();
    expect(screen.queryByText(/Please enter a number between 1 and 10 inclusive/i)).toBeVisible();

    await userEvent.clear(countInput);

    await userEvent.type(countInput, '5');
    fireEvent.blur(countInput);
    expect(screen.queryByText(/Please enter a number between 1 and 10 inclusive/i)).toBeNull();
  });

  it("should validate the occasion selected by the user", () => {
    setup();
    const occSelect = screen.getByRole('combobox', {name: /occasion/i});

    userEvent.click(occSelect);
    fireEvent.blur(occSelect);
    expect(screen.queryByText(/Occasion is required/i)).toBeNull();

    userEvent.selectOptions(occSelect, 'Birthday');
    fireEvent.blur(occSelect);
    expect(screen.getByRole('option', {name: 'Birthday'}).selected).toBe(true);
    expect(screen.queryByText(/Occasion is required/i)).toBeNull();
  });

  it('should validate the first name typed by the user', async () => {
    setup();
    const firstNameInput = screen.getByRole("textbox", {name: /firstName/i });

    userEvent.click(firstNameInput);
    fireEvent.blur(firstNameInput);
    expect(screen.queryByText(/First name is required/i)).toBeVisible();

    await userEvent.type(firstNameInput, 'A12');
    fireEvent.blur(firstNameInput);
    expect(screen.queryByText(/First name is required/i)).toBeNull();
    expect(screen.queryByText(/Please enter a valid first name/i)).toBeVisible();

    await userEvent.clear(firstNameInput);

    await userEvent.type(firstNameInput, 'Thomas');
    fireEvent.blur(firstNameInput);
    expect(screen.queryByText(/Please enter a valid first name/i)).toBeNull();
  });

  it('should validate the last name typed by the user', async () => {
    setup();
    const lastNameInput = screen.getByRole("textbox", {name: /lastName/i });

    userEvent.click(lastNameInput);
    fireEvent.blur(lastNameInput);
    expect(screen.queryByText(/Last name is required/i)).toBeVisible();

    await userEvent.type(lastNameInput, 'b#4e$');
    fireEvent.blur(lastNameInput);
    expect(screen.queryByText(/Last name is required/i)).toBeNull();
    expect(screen.queryByText(/Please enter a valid last name/i)).toBeVisible();

    await userEvent.clear(lastNameInput);

    await userEvent.type(lastNameInput, 'Melo');
    fireEvent.blur(lastNameInput);
    expect(screen.queryByText(/Please enter a valid last name/i)).toBeNull();
  });

  it('should validate the email address typed by the user', async () => {
    setup();
    const emailInput = screen.getByRole("textbox", {name: /email/i });
	  userEvent.click(emailInput);
    fireEvent.blur(emailInput);
    expect(screen.queryByText(/Email is required/i)).toBeVisible();

    await userEvent.type(emailInput, 'haha');
    fireEvent.blur(emailInput);
    expect(screen.queryByText(/Email is required/i)).toBeNull();
    expect(screen.queryByText(/Please enter a valid email address/i)).toBeVisible();

    await userEvent.clear(emailInput);

    await userEvent.type(emailInput, 'haha@abcd.com');
    fireEvent.blur(emailInput);
    expect(screen.queryByText(/Please enter a valid email address/i)).toBeNull();
  });

  it('should validate the phone number typed by the user', async () => {
    setup();
    const phoneInput = screen.getByRole("textbox", {name: /phone/i });
	  userEvent.click(phoneInput);
    fireEvent.blur(phoneInput);
    expect(screen.queryByText(/Phone number is required/i)).toBeNull();

    await userEvent.type(phoneInput, '123-4567');
    fireEvent.blur(phoneInput);
    expect(screen.queryByText(/Please enter a valid phone number/i)).toBeVisible();

    await userEvent.clear(phoneInput);

    await userEvent.type(phoneInput, '(123) 456-7890');
    fireEvent.blur(phoneInput);
    expect(screen.queryByText(/Please enter a valid phone number/i)).toBeNull();
  });

  test('loads confirmation page and renders it upon successful form submission', async() => {
    setup();
    const submitButton = screen.getByText(/Make a Reservation/i).closest('button');
    const dateInput = screen.getByTestId('date-input');
    const timeSelect = screen.getByRole('combobox', {name: /time/i});
    const countInput = screen.getByRole('spinbutton', {name: /count/i});
    const occSelect = screen.getByRole('combobox', {name: /occasion/i});
    const firstNameInput = screen.getByRole("textbox", {name: /firstName/i });
    const lastNameInput = screen.getByRole("textbox", {name: /lastName/i });
    const emailInput = screen.getByRole("textbox", {name: /email/i });
    const phoneInput = screen.getByRole("textbox", {name: /phone/i });

    expect(submitButton).toBeDisabled();

    await userEvent.clear(dateInput);
    await userEvent.type(dateInput, '2024-10-30');

    await userEvent.selectOptions(timeSelect, timeSelect.options[1].value);

    await userEvent.type(countInput, '5');

    userEvent.selectOptions(occSelect, 'Birthday');

    expect(occSelect).toHaveValue('Birthday');

    await userEvent.type(firstNameInput, 'Thomas');

    await userEvent.type(lastNameInput, 'Melo');

    await userEvent.type(emailInput, 'haha@abcd.com');

    await userEvent.type(phoneInput, '(312) 223-4646');

    expect(submitButton).toBeEnabled();

    expect(timeSelect).toHaveValue(timeSelect.options[1].value);

    await userEvent.click(submitButton);

    jest.advanceTimersByTime(2000);

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/confirmed-booking', expect.any((Object)));

    await waitFor(() => {
      expect(countInput.value).toBe('');
    });
  });
});