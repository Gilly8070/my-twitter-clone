import React, { useEffect, useState }  from 'react'
import './styles/Sidebar.css'
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import { FaRegListAlt, FaTwitter } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";


const Sidebar = () => {
    const [checkWidth, setCheckWidth] = useState(window.innerWidth)

    // let varS = 768;
    useEffect(() => {
        window.addEventListener('resize', e => {
        setCheckWidth(e.target.innerWidth)
        })
        console.log(checkWidth)
    }, [checkWidth])
    return (
        // className = { checkWidth > varS ? 'sideContainer col-2' : 'sideContainer'
        <div className={checkWidth > 992 ? 'sideContainer' : 'sideContainer'}>
            <div>
                <FaTwitter className='iconSize' />
            </div>
            <div className='sideTitle'>
                <div>
                    <span>
                    <AiFillHome className='currentIn' />
                    </span>
                <p className='currentIn'>Home</p>
            </div>
                <div>
                    <span>
                    <AiOutlineSearch />
                    </span>
                <p>Explore</p>
            </div>
                <div>
                    <span>
                    <IoMdNotificationsOutline />
                    </span>
                <p>Notifications</p>
            </div>
                <div>
                    <span>
                    <HiOutlineMail />
                    </span>
                <p>Messages</p>
            </div>
                <div>
                    <span>
                    <BsBookmark />
                    </span>
                <p>Bookmarks</p>
            </div>
                <div>
                    <span>
                    <FaRegListAlt />
                    </span>
                <p>Lists</p>
            </div>
                <div>
                    <span>
                    <BiUser />
                    </span>
                <p>Profile</p>
            </div>
                <div>
                    <span>
                    <FiMoreHorizontal />
                    </span>
                <p>More</p>
                </div>
            </div>
            <button className='tweetBtn'>Tweet</button>
        </div>
    )
}

export default Sidebar
