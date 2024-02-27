import Header from './component/header/Header'
import Blogs from './component/blogs/Blogs'
import Bookmark from './component/bookmark/Bookmark'
import './App.css'

function App() {


  return (
    <>
          <Header></Header>
          <div className='md:flex gap-5'>
          <Blogs></Blogs>
          <Bookmark></Bookmark>
          </div>
          
           
 
    </>
  )
}

export default App
