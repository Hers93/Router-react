import { BrowserRouter, Route, Routes  } from "react-router-dom"
import HomePages from './pages/HomePages'
import AboutPage  from './pages/AboutPage'
import UserPages from "./pages/UserPages"
import NotFoundPage from "./pages/NotFoundPage"
import UserPage from "./pages/UserPage"

import Navbar from "./components/Navbar"

export default function App(){
  
    return(
       <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePages/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/users" element={<UserPages/>}/>
                    <Route path="/users/10" element={<UserPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
        </BrowserRouter>
    )
}
