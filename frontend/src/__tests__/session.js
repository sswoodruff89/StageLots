import React from 'react';
import {shallow, mount} from "enzyme";
import { render, fireEvent, getByLabelText } from '@testing-library/react';
// import App from './components/app';
import SignupForm from "../components/session/signup_form";
import "@testing-library/jest-dom/extend-expect";


// const mockSetState = jest.fn();


describe("Sign Up Page", () => {
    it ("renders", () => {
        shallow(<SignupForm />);
    });

    it('should render input fields for email, password, and confirm password', () => {
        const {getByLabelText} = render(<SignupForm />);
        expect(getByLabelText('Email')).toBeTruthy();
        expect(getByLabelText('Password')).toBeTruthy();
        expect(getByLabelText('Confirm Password')).toBeTruthy();
    });

    it('initial values for all fields should be empty', () => {
        const {getByTestId} = render(<SignupForm />);

        const email = getByTestId("email-input");
        const password = getByTestId("password-input");
        const password2 = getByTestId("password2-input");

        expect(email.value).toBe("");
        expect(password.value).toBe("");
        expect(password2.value).toBe("");
    });



})