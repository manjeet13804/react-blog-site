import React from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {PostPage,MostLikedPost,Body,AuthorPage} from './Pages'
import {NavigationBar,Footer} from './components'

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
