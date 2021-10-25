// IMPORT useState
import React, {useState} from "react";
import "./styles.css";

// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData";

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  const [bigImage, setBigImage] = useState(imagesArr[0])
  console.log(bigImage)
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  function handleClick(event) {
    setBigImage({ img: event.target.src, alt: event.target.city })
    let focused = document.querySelector(".focused")
    console.log(focused)
    if (focused) { focused.classList.remove("focused") }
    event.target.className += " focused"
    
  }
  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  const images = imagesArr.map((image, index) => {
    const { img, city } = image
    console.log(img)
    return <img className="thumb" src={img} alt={city} key={index} onClick={handleClick}  />
  
  })

  

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>

        <img src={bigImage.img} id="bigimage" alt={bigImage.city}/>
      </div>
    </div>
  );
}
