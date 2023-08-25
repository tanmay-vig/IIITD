
import './App.css'
import LoginPage from './components/LoginPage'

import {Route , Routes} from 'react-router-dom'
function App() {
  

  return (
    <>
      <div className='text-black text-center'> Baba</div>
      <Routes>
        <Route path="/loginPage" element= {< LoginPage />} />
      
      </Routes>
    </>
  )
}

export default App
