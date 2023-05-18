import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import { UserProvider } from './assets/context/userContext';
function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<><h1>404</h1><h3>This page not found</h3></>}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
