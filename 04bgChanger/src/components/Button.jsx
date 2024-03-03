

function Button({changecolor,setColor}) {
  return (
      <button
        onClick={() => setColor(changecolor)}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: changecolor}}
        >{changecolor}
        </button>
  )
}

export default Button
