function Locations(props) {
    if (props.x.length) {
        return (
            <p>

                {props.x.map(element =>

                    <p>{`{ "Location":"${element.location}","minCustomers": "${element.min}","maxCustomers": "${element.max}" ,"avgCookies": "${element.avg}" }`}</p>
                )}
            </p>

        )

    } else {
        return (
            <p>No locations detected</p>
        )

    }

}
export default Locations