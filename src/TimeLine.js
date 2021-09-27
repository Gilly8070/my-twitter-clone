import React, { useEffect, useRef, useState }  from 'react'
import './styles/TimeLine.css';
import { GrSearch } from "react-icons/gr";
import { TwitterTimelineEmbed, TwitterTweetEmbed,} from 'react-twitter-embed';
const TimeLine = () => {
    const [checkWidth, setCheckWidth] = useState(0)
    const timeRef = useRef(null);
    // let varS = 768;
    useEffect(() => {
        window.addEventListener('resize', e => {
        // setCheckWidth(e.target.innerWidth)
        })
        if (timeRef.current.scrollHeight) {
            // setCheckWidth(timeRef.current.scrollHeight)
            // setCheckWidth(window.scrollY);
            
            console.log(timeRef, checkWidth)
        }
        // console.log(checkWidth)
    }, [checkWidth])
    // let times = document.querySelector('#time');
    // console.log(times)
    window.addEventListener('scroll', e => {
        // setCheckWidth(timeRef.current.scrollHeight)
        setCheckWidth(window.scrollY);
        console.log('scrolling', timeRef.current.offsetHeight, window.scrollY)
    })
    return (
        // <GrSearch />
        // className = { checkWidth > varS ? 'timeContainer col-3' : 'timeContainer'}
        <div id='time'  className={checkWidth > 550 ? 'timeContainer stopScroll ' : 'timeContainer'}>
            <div className='searchInputContainer'>
            <div className='searchInput'>
            <GrSearch className='searchIcon' />
            <input className='inputSearch' type="text" placeholder='Search Twitter' />
            </div>
            </div>
            <div ref={timeRef} className='tweetTimeline'>
            <h4 className='heading'>What's happening</h4>
            <TwitterTweetEmbed
            tweetId={'933354946111705097'}
            // options={{ width: 400,}}
            />
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="saurabhnemade"
            options={{ height: 400}}
            />
            </div>
            </div>
            
    )
}

export default TimeLine
