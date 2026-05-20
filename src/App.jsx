import { Login } from'./components/pages/login/Login';
import { Panel } from'./components/pages/panel/Panel';
import { Blog } from'./components/pages/blog/Blog';
import { About } from'./components/pages/about/About';
import { Home } from'./components/pages/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/panel" element={<Panel/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>

  ) 
}

export default App;

