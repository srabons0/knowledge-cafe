import Bookmark from '../bookmark/Bookmark';
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks,readingTime}) => {
// console.log(bookmarks.title)

    return (
        <div className='bg-slate-100 rounded-xl'>

            <div className='bg-violet-400 w-96 text-center h-16 border-violet-700 border-2  rounded-xl text-white text-xl pt-4'>
                <h1>Spent Time on read : {readingTime}min</h1>
            </div>

            <div className="md:w-1/3 ">
            <h1 className="text-2xl w-96 font-bold p-6 rounded-2xl border-t-8 border-white">Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>



        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;