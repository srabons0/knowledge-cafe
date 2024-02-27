import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {



    const [blog ,setBlog] =useState([]);


useEffect(()=>{
fetch('details.json')
.then(res => res.json())
.then(data => setBlog(data));

},[])
console.log(blog);
    return (

        <div>
            <h1>ho</h1>
        </div>
    );
};

export default Blog;