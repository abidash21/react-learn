
import './App.css'
import Card from './components/Card'

function App() {

  // let myObj = {
  //   username: "Abinash",
  //   age: 22
  // }

  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
        <Card username="Abinash" btnText="Click me"/>
        <Card username="Bubun" />
    </>
  )
}

export default App
