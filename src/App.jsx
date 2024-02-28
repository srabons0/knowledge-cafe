import Header from './component/header/Header'
import Blogs from './component/blogs/Blogs'
import './App.css'
import { useState } from 'react'
import Bookmarks from './component/bookmarks/Bookmarks'

function App() {
const [bookmarks ,setBookmarks] =useState([]);
const handleBookMarks =(bookmark)=>{
const newAddBookMarks =[...bookmarks,bookmark];
setBookmarks(newAddBookMarks);
}
const[read,setRead] =useState(0);
const handleReadingTime = (time)=>{
  
const totalTime = read + time;
setRead(totalTime);
console.log(read);
console.log(time);
}


  return (
    <>
          <Header></Header>
          <div className='md:flex gap-5'>
          <Blogs 
          handleBookMarks={handleBookMarks}
          handleReadingTime={handleReadingTime}
          ></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={read}></Bookmarks>
          </div>
          
           
 
    </>
  )
}

export default App
