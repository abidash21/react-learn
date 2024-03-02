import Chai from "./chai"

function App() {
  const name='Abinash'
  //This is called expression evaluation
  return (
    <>
      <Chai/>
      <h4>Chai aur react {name}</h4>
    </>
  )
}
//the return statement can only return one element(tag) hence we can't use mulitple tags
//we can wrap all the tags into one div tag aor an empty tag called fragment

export default App
