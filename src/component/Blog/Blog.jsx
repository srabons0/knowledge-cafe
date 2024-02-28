import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookMarks, handleReadingTime }) => {
    // console.log(blog)
    const { cover, author, author_img, title, posted_date, reading_time, hashtag } = blog;
    return (
        <div className='mb-12'>
            <img className='rounded-xl' src={cover} alt="" />

            <div className='flex justify-between items-center'>

                <div className='flex mt-7 mb-10'>
                    <img className='w-12 h-12 rounded-3xl' src={author_img} alt="" />
                    <div className='ms-5'>
                        <h1 className='text-xl font-bold'> {author} </h1>
                        <h1 className='text-lg text-zinc-500 font-medium'> {posted_date} </h1>
                    </div>
                </div>

                <div className='flex items-center gap-1'>
                    <div className='text-xl font-semibold text-gray-500 w-30'> {reading_time} min read </div>
                    <div className='flex'> <button onClick={() => handleBookMarks(blog)}><FaRegBookmark style={{ color: "#000000", fontSize: '1.25em', }} /></button></div>
                </div>

            </div>


            <h1 className='text-5xl font-semibold mb-6'> {title} </h1>
            <div>
                {
                    hashtag.map((hash, id) => <span key={id}> <a className='me-3 text-gray-500 text-lg' href="">#{hash}</a></span>)
                }
            </div>
            <button className='mt-5 mb-7 text-xl text-violet-600  border-violet-600  p-0 underline decoration-solid' onClick={() => handleReadingTime(reading_time)} >Mark as read</button>
            <hr />
         
        </div>
    );
};



Blog.propTypes = {
    blog: PropTypes.array.isRequired,
    handleBookMarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blog;