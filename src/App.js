import React, { useEffect, useState } from 'react';
// import { Timeline } from 'react-twitter-widgets'
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Sidebar from './Sidebar'
import Home from './Home'
import TimeLine from './TimeLine'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {

  const [checkWidth, setCheckWidth] = useState(window.innerWidth)
  let varS = 768;
  useEffect(() => {
    window.addEventListener('resize', e => {
      setCheckWidth(e.target.innerWidth)
    })
    console.log(checkWidth)
  }, [checkWidth])
  // console.log(width > varS ? 'check check1' : 'check', width > varS ? 'ff' : 'g')
  return (
    //       <Timeline
    //   dataSource={{
    //     sourceType: 'profile',
    //     screenName: 'TwitterDev'
    //   }}
    //   options={{
    //     height: '500'
    //   }}
            
    // />
    //     <TwitterTweetEmbed
    // tweetId={'933354946111705097'}
    //     />

    // <TwitterTimelineEmbed
    // sourceType="profile"
    // screenName="saurabhnemade"
    // options={{height: 400, width: 200}}
    // />
    <div className={checkWidth > varS ? 'appContainer' : 'appContainer'}>
      <Sidebar />
      <Home />
      <TimeLine />
    </div>
  )
}

export default App
