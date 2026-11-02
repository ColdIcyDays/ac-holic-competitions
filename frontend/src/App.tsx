
import './App.css'

function App() {
  return (
    <div className={'w-svw h-svh bg-ground flex'}>
      <div className={`mt-16 ml-16 bg-surface transition-colors duration-250 px-4 py-2 h-fit w-fit border-2 
      hover:bg-primary hover:border-primary hover:text-black border-ink/12 
       active:bg-raised active:border-ink/12 active:text-ink
      `}>
        <h3 className={'pointer-events-none select-none'}>Sign up</h3>
      </div>
      <button className={`mt-16 ml-16 bg px-4 py-2 h-fit w-fit transition-colors duration-250 border-2
      border-primary bg-primary text-black 
      hover:text-ink hover:bg-raised hover:border-raised
      active:bg-primary 
      `}>
        <h3 className={'pointer-events-none select-none'}>Enter</h3>
      </button>
      <div className={`w-256 h-128 ml-32 mt-32 bg-surface
      border-1 border-ink/12
      `}>

      </div>
    </div>
  )
}

export default App
