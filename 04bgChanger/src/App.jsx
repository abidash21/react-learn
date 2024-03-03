import { useState } from "react"
import Button from "./constant/Button"


function App() {
  const [color,setColor] = useState("olive")
  //state uplifting
  return (
    <>
       <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
             <Button changecolor="red" setColor={setColor}/>
             <Button changecolor="green" setColor={setColor}/>
             <Button changecolor="blue" setColor={setColor}/>
             <Button changecolor="black" setColor={setColor}/>
             <Button changecolor="grey" setColor={setColor}/>
          </div>
          </div>
       </div>
    </>
  )
}

export default App
