function Footer(props) {
  if (props.len==0){
    return(
      <footer className=" font-sans left-1flex mb-10 justify-center w-full bg-green-500 py-2">
        No Location Detected
      </footer>

    )
  } else{
    return (
      <footer className=" font-sans left-1flex mb-10 justify-center w-full bg-green-500 py-2">
        {props.len} Location World Wide
      </footer>
    )

  }
    
  }
export default Footer