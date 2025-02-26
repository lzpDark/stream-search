
import { Outlet } from 'react-router';

import { Routes, Route } from "react-router";
import './App.css'
import About from './pages/about';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Search from './pages/search';
import Game from './examples/game';
import Demo from './examples/demo';
import Manage from './pages/manage';
import Chessboard from './examples/chess/chess'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  return (

    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path='search' element={<Search />} />
            <Route path='manage' element={<Manage />} />

            <Route path="*" element={<>nothing..</>} />
            <Route path="/tictactoe" element={<Game />} />
            <Route path="/demo" element={<Demo />} />
            <Route path='/chess' element={<Chessboard />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  )
}

function Layout() {
  return (
    <div className='flex flex-col h-full'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App
