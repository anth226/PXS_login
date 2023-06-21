import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from './pages/auth/SignIn'
import ForgotPassword from './pages/auth/ForgotPassword'
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/forgot' element={<ForgotPassword/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
