
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <h1 className='text-center mt-5'>counter app</h1>
      <div style={{height:'70vh'}} className='d-flex align-items-center justify-content-center w-100'>
      <Counter/>
      </div>
    </>
  )
}

export default App
