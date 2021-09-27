import React, { useEffect,useRef, useState } from 'react'
import './styles/Home.css'
// import { Timeline, Tweet } from 'react-twitter-widgets'
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
// import axios from 'axios'
// import Logo from './images/pexels-photo.jpeg'
import { BiUserCircle } from 'react-icons/bi'
import { FiMessageSquare } from 'react-icons/fi'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { HiUpload } from 'react-icons/hi'

// import TweetEmbed from 'react-tweet-embed' 

const Home = () => {
    const [message, setMessage] = useState([])
    const [checkWidth, setCheckWidth] = useState(0)
    const timeRef2 = useRef(null);

    // let varS = 768;
    useEffect(() => {
        window.addEventListener('resize', e => {
        // setCheckWidth(e.target.innerWidth)
        })
        // console.log(checkWidth)
    }, [checkWidth])

    const handleSubmit = (e) => {
        e.preventDefault()
        const mes = document.getElementById('msg').value
        if (mes !== undefined && mes !== '') {
            // console.log(mes)
            setMessage(prev => [ ...prev, mes ]);
            const form = document.getElementById('form')
            form.reset();
        }
    }

    window.addEventListener('scroll', e => {
        // setCheckWidth(timeRef.current.scrollHeight)
        // setCheckWidth(window.scrollY);
        // console.log('scrolling', timeRef2.current.offsetHeight, window.scrollY)
    })


    let rev = message.slice().reverse()
    // console.log(message, rev)
    return (
        // className = { checkWidth > varS ? 'homeContainer col-6' : 'homeContainer col-6'}

        <div ref={timeRef2} className={checkWidth > 1555550 ? 'stopHomeScroll' : 'homeContainer'}>
            <div className='headingContainer '>
            <h3 className=' homeHeading'>Home</h3>
            </div>
            <form id='form' action="" >
                <div className='userContainer'>
                    <BiUserCircle className='userIcon' />
                <input className='userInput' id='msg' type="text" placeholder="What's happening?" />
                </div>
                <input className='optionalInput' type="text" placeholder='Optional: Enter image URL' />
                <br />
                <button className='homeBtn' onClick={handleSubmit} type=''>Tweet</button>
                <p className='bottomLine'></p>
                {
                    rev.map((single, ind) => {
                        return <div key={ind} className='userTweetContainer'>
                            <div className='userDetailsContainer' >
                                <BiUserCircle className='userTweetIcon' />
                                <div className='userSubDetailsContainer'>
                                    <h6 className='userName'>
                                        <strong>Joe Wright</strong> @joe_jag
                                    </h6>
                                    <span className='userTweetMsg'>{single}
                                    </span>
                                </div>
                                </div>
                            <div className='userTweetIconContainer'>
                            <FiMessageSquare className='subIcon' />
                            <AiOutlineRetweet className='subIcon' />
                            <AiOutlineHeart className='subIcon' />
                            <HiUpload className='subIcon' />
                            </div>
                        </div> 
                    })
                }
                </form>
        </div>
    )
}

export default Home
