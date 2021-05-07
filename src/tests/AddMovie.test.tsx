import React from "react";
import {act, screen, render, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import FormBlock from "../components/blocks/FormBlock";
import store from "../store";
import {Provider} from "react-redux";

describe('FormBlock',  () => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
    test('rendering and submitting a basic FormBlock form', async () => {
        const handleSubmit = jest.fn();

        render(<Provider store={store}>
                <FormBlock />
        </Provider>);
        act(() => {
            userEvent.type(screen.getByLabelText('Title'), 'Test');
            userEvent.type(screen.getByLabelText('Url to the poster image'), 'https://images.opencollective.com/123calendars/4f3fea5/logo.png');
            userEvent.type(screen.getByLabelText('Short description of the movie'), 'Test');
            userEvent.type(screen.getByLabelText('Movie duration time'), '60');
            userEvent.click(screen.getByLabelText('List of genres'));
        });

        userEvent.click(screen.getByText('Save'));
        await waitFor(() =>
            expect(handleSubmit).toHaveBeenCalledWith({
                title: 'Test',
                poster_path: 'https://images.opencollective.com/123calendars/4f3fea5/logo.png',
                overview: 'Test',
                runtime: 60,
                genres: ['Action'],
            }));
    });
})
