import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";
const Blogs = ({ handleBookMarks, handleReadingTime }) => {



    const [blog, setBlog] = useState([]);


    useEffect(() => {
        fetch('details.json')
            .then(res => res.json())
            .then(data => setBlog(data));

    }, [])
    // console.log(blog);
    return (

        <div className="md:w-2/3">


            {
                blog.map(blog => <Blog
                    key={blog.id}
                    handleBookMarks={handleBookMarks}
                    handleReadingTime={handleReadingTime}
                    blog={blog}
                ></Blog>)
            }


        </div>
    );
};

Blogs.propTypes = {
    handleBookMarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blogs;