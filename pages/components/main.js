import React from 'react'
// import Locations from './locations.js'
import hours from './data'
import ReportTable from './reportTable'
import { useState } from 'react'
import CreateForm from './createform.js'
export default function Main() {
    const [locArr, setLocArr] = useState([])
    function handler_eve(event) {
        event.preventDefault();

        const my_obj = {
            id: locArr.length,
            min: event.target.minCust.value,
            max: event.target.maxCust.value,
            avg: event.target.avg.value,
            location: event.target.location.value,
            sales: calculateHourlySales(event.target.minCust.value, event.target.maxCust.value, event.target.avg.value)
        }
        setLocArr(x => [...x, my_obj])

    }
    function calculateHourlySales(min, max, avg){
        let salesPerh = []
        for(let i = 0 ; i < hours.length ; i++){
            salesPerh[i] = (Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min))) * avg
        }
        return salesPerh

    }
    return (
        <div>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <CreateForm data={handler_eve} />
                <ReportTable locArr={locArr} hours = {hours} />
            </main>

        </div>
    )
}