import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h3>Vite+react app</h3>
    </div>
  )
}

const reactElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
  )

const anotherUser = 'Abinash'
const anotherElement=React.createElement(
  'a',
  {href:'https://google.com' , target:'_blank'},
  'click me to visit google',
  anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(

    //<MyApp />
    //reactElement
    anotherElement
    //<App />
)
