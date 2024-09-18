
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DiscoverPage } from './pages/DiscoverPage';
import MainLayout from './components/layout/MainLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ <MainLayout /> }>
            <Route path='/' element={ <Navigate to="/discover" replace /> } />
            <Route index path='/discover' element={ <DiscoverPage /> } />
            <Route path='/recents' element={ <Navigate to="/discover" replace /> } />
            <Route path='/library' element={ <Navigate to="/discover" replace /> } />
            <Route path='/profile' element={ <Navigate to="/discover" replace /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
