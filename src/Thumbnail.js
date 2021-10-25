import React from "react"

const Thumbnail = (props) => {

  return (
    <img
      className= "thumb"
      src={props.className}
      alt={props.alt}
    />
  );
}

export default Thumbnail