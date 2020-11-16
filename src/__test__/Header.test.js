import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Header from '../components/Header'

test('Does not show dropdown when mounted', () => {
    const {queryByTestId} = render(<Header/>) //this will target specific tags, elements, etc that have the data-testid property
    const dropdown = queryByTestId('dropdown') //queryByTestId just lets us pull it

    expect(dropdown).toBeFalsy();
})

test('Shows dropdown when hamburger is clicked', () => {
    const {container, getByTestId} = render(<Header/>) //getByTestId lets us do stuff to it

    const hamburger = getByTestId('hamburger-button')

    fireEvent.click(hamburger) //this should open up the drop down button
    expect(container.textContent).toContain("Dropdown menu") //the text says "Dropdown menu in the Header Component Line 27"
})