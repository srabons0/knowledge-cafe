import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
const Blogs = () => {



    const [blog, setBlog] = useState([]);


    useEffect(() => {
        fetch('details.json')
            .then(res => res.json())
            .then(data => setBlog(data));

    }, [])
    // console.log(blog);
    return (

        <div className="md:w-2/3">
            <h1 className="text-3xl">blog</h1>

{
    blog.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
}

            
        </div>
    );
};

export default Blogs;