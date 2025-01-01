import Register from './register.jsx'
import Login from './login.jsx'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}
