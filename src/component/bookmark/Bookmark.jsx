

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    return (
       <h1 className="w-80 px-12 py-6 bg-white mx-6 my-3 rounded-lg font-bold text-lg">{bookmark.title}</h1>
    );
};

export default Bookmark;