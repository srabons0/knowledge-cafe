import Profile from '../images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center mx-5 p-7 border-b-2 mb-8'>
             <h1 className='text-4xl   font-bold font-sans'>Knowledge Cafe</h1>
              <img src={Profile} alt="" />

        </div>
    );
};

export default Header;