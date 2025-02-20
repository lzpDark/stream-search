
import { Outlet } from 'react-router';

import { Routes, Route } from "react-router";
import './App.css'
import About from './pages/about';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Search from './pages/search';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path='search' element={<Search/>} />

          <Route path="*" element={<>nothing..</>} />
        </Route>
      </Routes>
    </div>

  )
}

function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  );
}

export default App
