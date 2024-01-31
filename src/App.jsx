import './App.css'
import clickSound from './assets/sound/click.wav'

function App() {
  let sound = new Audio(clickSound)

  const handleClick = () => {
    sound.play()
  }

  return (
    <>
    <form>
      <input placeholder='Task' required/>
      <input placeholder='Name' required/>
      <button onClick={handleClick}>Add</button>
    </form>
    </>
  )
}

export default App
