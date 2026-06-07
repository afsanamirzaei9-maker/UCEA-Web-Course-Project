import { Login } from './components/pages/login/Login';
import { Panel } from './components/pages/panel/Panel';
import { Blog } from './components/pages/blog/Blog';
import { About } from './components/pages/about/About';
import { Home } from './components/pages/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Python } from './components/pages/classes/Python';
import { React } from './components/pages/classes/React';
import { Next } from './components/pages/classes/Next';
import { Tailwind } from './components/pages/classes/Tailwind';
import { Layout } from './components/layout/Layout';
import AuthLayout from './components/layout/AuthLayout';



function App() {

  return (
    <>
      <Routes>
        {/* pages with header and footer */}
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path='/python' element={<Python/>}/>
          <Route path='/react' element={<React/>}/>
          <Route path='/next' element={<Next/>}/>
          <Route path='/tailwind' element={<Tailwind/>}/>
        </Route>
      
        {/* pages without header and footer */}
        <Route element={<AuthLayout/>}>
          <Route path="/panel" element={<Panel/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>

    </>

  ) 
}

export default App;
