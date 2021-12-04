import React from 'react'
import Locations from './locations.js'
import { useState } from 'react'
import Form from './form.js'
export default function Main() {
    const [locArr, setLocArr] = useState([])
    function handler_eve(event) {
        event.preventDefault();

        let my_obj = {
            min: event.target.minCust.value,
            max: event.target.maxCust.value,
            avg: event.target.avg.value,
            location: event.target.location.value
        }
        setLocArr(x => [...x, my_obj])

    }

    return (
        <div>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <Form data={handler_eve} />
                <Locations x={locArr} />
            </main>

        </div>
    )
}