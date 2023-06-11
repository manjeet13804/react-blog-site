import React from 'react'
import './App.css'
// import { Button } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.css'

import Body from './Pages/HomePage/Body'
import AuthorPage from './Pages/ProfilePage/Profile'
// import Pagination from "./components/Pagination/Pagination"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PostPage from './Pages/PostPage/PostPage'
import MostLikedPost from './Pages/MostLikedPost/MostLikedPost'
import NavigationBar from './components/NavBar/NavigationBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route  path="/" element={<Body />} />
          <Route  path="/MostLikedPost" element={<MostLikedPost/>} />
          <Route  path="/MostCommentPost" element={<MostLikedPost/>} />
          <Route  path="/:pageNo" element={<Body />} />
          <Route  path="/profile/:authorId" element={<AuthorPage />} />
          <Route  path="/Post/:postId" element={<PostPage />} />
        </Routes>
        <Footer />
        {/* <Body/> */}
      </Router>
    </div>
  )
}

export default App
