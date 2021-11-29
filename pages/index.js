import Head from 'next/head'
import { useState } from 'react'
export default function Home() {
  const [locArr, setLocArr] = useState([])
  function handler_eve(event) {
    event.preventDefault();

    let my_obj = {
      min: event.target.minCust.value,
      max: event.target.maxCust.value,
      avg: event.target.avg.value,
      location: event.target.location.value
    }
    console.log(my_obj.min)
    setLocArr(x => [...x, my_obj])

  }
  return (
    <div className="flex flex-col  justify-center min-h-screen ">
      <Head>
        <title>Create App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Form data={handler_eve} />
        <Locations x={locArr} />
      </main>
      <Footer />

    </div>
  )
}


function Header() {
  return (
    <header>
      <h1 className="pt-3 pb-3 md:text-3xl bg-green-400  " >Cookie Stand Admin</h1>
    </header>
  )
}


function Locations(props) {
  console.log(props.x)
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

function Footer() {
  return (
    <footer className=" left-1flex mb-10 justify-center w-full bg-green-500 py-2">
      &copy; 2021
    </footer>
  )
}

function Form(props) {
  return (
    <form class="bg-green-300 mb-40 bg-green-300 rounded-3xl" onSubmit={props.data}>
      <div class="grid pb-100   gap-4 grid-rows-3">
        <div class="flex flex-col pt-10 w-full  text-center font-semibold md:text-xl"> Create Cookie Stand</div>
        <div class=" flex-2 m-1 pb-10 ">
          <lable class="px-2 right-100 text-black-50 font-semibold  "> Location</lable>
          <input type="text" class=" w-full form-control  " name="location" />
        </div>
        <div class="grid  gap-6 grid-cols-4 mb-5">
          <div class="grid  gap-2 grid-rows-2 m-3 ">
            <lable class="font-semibold"> Minimum Customers per Hour </lable>
            <input type="text" class="form-control" name='maxCust' />
          </div>
          <div class="grid  gap-2 grid-rows-2 m-3">
            <lable class="font-semibold" > Maximum Customers per Hour</lable>
            <input type="text" class="form-control" name="minCust" />
          </div>
          <div class="grid  gap-2 grid-rows-2 m-3">
            <lable class="font-semibold"> Average Cookies per Sale</lable>
            <input type="text" class="form-control" name="avg" />
          </div>
          <div class="grid  gap-2 grid-rows-1 m-3">
            <button class="font-semibold form-control bg-green-600" >Create</button>
          </div>
        </div>
      </div>
    </form>
  )
}


