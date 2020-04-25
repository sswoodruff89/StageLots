import React from "react";
import ReactDOM from 'react-dom';
import { shallow, mount } from "enzyme";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import SessionForm from "../components/session/session_form";
import "@testing-library/jest-dom/extend-expect";


describe("Sign Up Page", () => {
  it("renders", () => {
    shallow(<SessionForm />);
  });

  it("should render input fields for email, password, and confirm password", () => {
    const { getByLabelText } = render(<SessionForm />);
    expect(getByLabelText("Email")).toBeTruthy();
    expect(getByLabelText("Password")).toBeTruthy();
    expect(getByLabelText("Confirm Password")).toBeTruthy();
  });

  it("initial values for all fields should be empty", () => {
    const { getByTestId } = render(<SessionForm />);

    const email = getByTestId("email-input");
    const password = getByTestId("password-input");
    const password2 = getByTestId("password2-input");

    expect(email.value).toBe("");
    expect(password.value).toBe("");
    expect(password2.value).toBe("");
  });
});
