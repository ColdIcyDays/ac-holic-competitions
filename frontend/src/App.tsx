
import './App.css'

function App() {
  return (
    <div className={'w-svw h-dvh bg-ground flex'}>
        <div className={`max-w-4xl w-full mx-auto flex flex-col bg-raised min-h-svh overflow-y-scroll`}>
            <main id={`main-content`}
                  className={`grow min-h-0`}
            >
                <div id={`active-tournament-header`}
                    className={`pt-8 pl-8 font-`}
                >
                    <h1>Active tournaments</h1>

                    <div className={`w-full flex flex-col mx-auto px-16 mt-8 `}>
                        <div className={`w-full flex flex-row`}>
                            <img className={`w-20 h-20 p-4 shrink-0`} src={'/favicon.svg'}/>
                            <div className={`w-20 h-20 flex flex-row`}>
                                <div className={`w-2/3 h-full flex`}>
                                    <p className={`text-5xl text-center w-full my-auto`}>5</p>
                                </div>
                                <div className={`grow h-full flex`}>
                                    <span className={`mt-auto mb-2 h-fit`}>/5</span>
                                </div>
                            </div>
                            <div className={`grow`}>
                                <h2>SDVX Weekly comp</h2>
                                <h4>Chiruto</h4>
                            </div>
                            <div className={`flex`}>
                                <h3 className={`my-auto`}>02:00:00</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/*
                Idea here is that this should be equal size to the bottom-navbar, to always
                allow the user to see thing that could be hidden
                 */}
                <div id={`navbar-spacer`}
                    className={`h-96 w-full`}>

                </div>
            </main>

            <div id={'bottom-navbar'}
                className={`fixed left-0 bottom-0 h-64 w-svw bg-primary/25 shrink-0`}
            >

            </div>
        </div>
    </div>
  )
}

export default App


/*
<div className={`mt-16 ml-16 bg-surface transition-colors duration-250 px-4 py-2 h-fit w-fit border-2
      hover:bg-primary hover:border-primary hover:text-black border-ink/12
       active:bg-raised active:border-ink/12 active:text-ink
      `}>
        <h3 className={'pointer-events-none select-none'}>Sign up</h3>
      </div>
      <button className={`mt-16 ml-16 px-4 py-2 h-fit w-fit transition-colors duration-250 border-2
      border-primary bg-primary text-black
       hover:bg-primary-hover hover:
      active:bg-primary-active
      `}>
        <h3 className={'pointer-events-none select-none'}>Enter</h3>
      </button>
      <div className={`w-256 h-128 ml-32 mt-32 bg-surface
      border-1 border-ink/12
      `}>

      </div>

* */
