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

export default Form