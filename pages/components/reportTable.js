export default function ReportTable(props) {


    let loc_Sales = []
    let total_Arr = []
    
    for (let i = 0; i < props.locArr.length; i++) {
        loc_Sales.push(props.locArr[i].sales)
        for (let i = 0; i < loc_Sales[0].length; i++) {
            let total = 0
            for (let j = 0; j < loc_Sales.length; j++) {
                total += loc_Sales[j][i]
                total_Arr[i] = total
            }
        }
    }
    if (props.locArr.length > 0) {
        return (
            <table className="w-2/3 py-8 my-10 border border-black mt-0 mb-8  ">
                <thead className="bg-green-500 border border-black ">
                    <tr>
                        <th>Location</th>
                        {props.hours.map(hour =>
                            <th >{hour}</th>
                        )}
                        <th>Totals</th>
                    </tr>
                </thead>

                <tbody>
                    {props.locArr.map(element =>
                        <tr key={element.id} className=" font-sans odd:bg-green-700 even:bg-green-200" >
                            <td className="font-sans border-b border border-black ">{element.location}</td>
                            {element.sales.map(sale =>
                                <td className="font-sans border-b border border-black"> {sale}</td>
                            )}
                            <td className="font-sans border-b border border-black">{element.sales.reduce(function (acc, cur) { return acc + cur; }, 0)}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot className="antialiased sm:subpixel-antialiased md:antialiased font-sans bg-green-500 border-t border-b border-gray-700">
                    <tr>
                        <th className="font-sans border border-black ">Totals</th>
                        {total_Arr.map(sale =>
                            <th className="border border-black "> {sale} </th>
                        )}
                        <th> {total_Arr.reduce(function (acc, cur) {
                             return acc + cur; 
                             }, 0)} </th>
                    </tr>
                </tfoot>
            </table>

        )

    } else {
        return (
            <h2 className="text-gray-500">No Cookie Stands Available</h2>

        )

    }
}