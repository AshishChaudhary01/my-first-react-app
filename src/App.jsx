import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import AdminLayout from './components/layout/AdminLayout';
import Index from './pages/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Index />}></Route>
          <Route path="/admin/*" element={<AdminLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
