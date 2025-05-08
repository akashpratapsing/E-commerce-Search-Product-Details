
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import Productdetails from './Pages/Productdetails'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Landingpage/>} />
      <Route path='/product/:id' element={<Productdetails/>} />
     </Routes>

      
    </>
  )
}

export default App
