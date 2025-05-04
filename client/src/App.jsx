import './App.css'
import LandingPage from './page/LandingPage'
import { Route, Routes } from "react-router-dom"
import SignupPage from './page/SignupPage'
import LoginPage from './page/LoginPage'
import BookDemo from './page/BookDemoPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/book-demo' element={<BookDemo />} />
    </Routes>
  )
}

export default App
