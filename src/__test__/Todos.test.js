import React from 'react'
import {render, act} from '@testing-library/react'
//act is the asynchronous part
import axios from 'axios'
import Todos from '../components/Todos'

//this is async bc in the Todos Component this is also asynchronous
test('Renders todos', async () => {
    let component;

    jest.spyOn(axios, 'get').mockImplementation(() => {
       return Promise.resolve({data: [{id: 1, title: 'test title'}]})
    })
    //spyOn - Hey Jest, this Todos component doesnt know it's being tested, if you see any axios get requests, 
    //don't let them/hijack them and then return a promise and send back the data object

    await act(async () => {
        const {container} = render(<Todos/>)
        component = container
    })

    expect(component.textContent).toContain('test title')
})