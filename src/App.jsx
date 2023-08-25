
import './App.css'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import {Route , Routes} from 'react-router-dom'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={ < Home /> } />
        <Route path="/loginPage" element= {< LoginPage />} />
      </Routes>
    </>
  )
}

export default App
