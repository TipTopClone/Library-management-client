import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/user_signup_login/Login';
import { SignUp } from './pages/user_signup_login/SignUp';
import { AdminSignUp } from './pages/admin_signup/AdminSignUp';
import { Home } from './pages/home/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className=''>
      <Routes>
        {/* public routes  */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        {/* private routes  */}
        <Route path='/admin-signup' element={<AdminSignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
