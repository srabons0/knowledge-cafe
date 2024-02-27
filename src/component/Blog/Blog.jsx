import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog }) => {
    console.log(blog)
    const { id, cover, author, author_img, title, posted_date, reading_time, hashtag } = blog;
    return (
        <div>
            <img className='w-5/6 ' src={cover} alt="" />
            <div>

                <div>
                    <img className='w-1/6 h-1/6 rounded-full' src={author_img} alt="" />
                    <h1> {author} </h1>
                    <h1> {posted_date} </h1>
                </div>

                <div className='flex items-center justify-center gap-1'>
                   <span> {reading_time} min read </span>  <span> <FaBookmark style={{ color: 'black', fontSize: '1em' }} /></span>
                </div>

            </div>


            <h1 className='text-5xl'> {title} </h1>
            <h1> {hashtag} </h1>
            {/* <h1> {id} </h1> */}
        </div>
    );
};



Blog.propTypes = {
    blog: PropTypes.array.isRequired
}
export default Blog;