import Head from 'next/head'
import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FirebaseApiKey,
  authDomain: process.env.NEXT_PUBLIC_FirebaseAuthDomain,
  projectId: process.env.NEXT_PUBLIC_FirebaseProjectId,
  storageBucket: process.env.NEXT_PUBLIC_FirebaseStorageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FirebaseMessagingSenderId,
  appId: process.env.NEXT_PUBLIC_FirebaseAppId,
  measurementId: process.env.NEXT_PUBLIC_FirebaseMeasurementId,
};
console.log("firebaseConfig", firebaseConfig);

const Home = () => {

  const [state, setState] = useState({
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds(),
    isLoading: true
  })

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    
    document.addEventListener('mousemove', onMouseMove)
    setInterval(() => {
      setState({
        hour: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds(),
        isLoading: false
      })
    }, 1000)
  }, [])

  const { hour, min, sec, isLoading } = state;

  const onMouseMove = (event: any) => {
    const card: HTMLDivElement | any = document.getElementById('clock')
    var ax = -(window.innerWidth / 2 - event?.pageX) / 20;
    var ay = (window.innerHeight / 2 - event?.pageY) / 10;
    ax = ax / 1.7;
    ay = ay / 1.7;

    card.setAttribute("style", `transform: rotateY(${ax}deg) rotateX(${ay}deg);-webkit-transform: rotateY(${ax}deg) rotateX(${ay}deg);-moz-transform: rotateY(${ax}deg) rotateX(${ax}deg)`);
  };

  let hDeg = (hour * 30) + (min / 2) + 90 + Math.random()
  let mDeg = (min * 6) + (sec * 0.1) + 90
  let sDeg = (sec * 6) + 90

  return (
    <>
      <Head>
        <title>The Clock</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../favicon.png" />
      </Head>

      <div className='container'>
        <div id='clock' className="card">
          {isLoading ?
            <div className='loader' />
            : <div className="card-content">
              <div className='center' />
              <span className='niddle-hour' style={{ transform: `rotate(${hDeg}deg)` }} />
              <span className='niddle-minute' style={{ transform: `rotate(${mDeg}deg)` }} />
              <span className='niddle-second' style={{ transform: `rotate(${sDeg}deg)` }} />

              <span className='hour hour-1' >1</span>
              <span className='hour hour-2' >2</span>
              <span className='hour hour-3' >3</span>
              <span className='hour hour-4' >4</span>
              <span className='hour hour-5' >5</span>
              <span className='hour hour-6' >6</span>
              <span className='hour hour-7' >7</span>
              <span className='hour hour-8' >8</span>
              <span className='hour hour-9' >9</span>
              <span className='hour hour-10' >10</span>
              <span className='hour hour-11' >11</span>
              <span className='hour hour-12' >12</span>
            </div>
          }
        </div>
        <div className='contact'>
          <div>
            <span>Created By:&nbsp;</span>
            <span>Nazir Hussain</span>
          </div>
          <div>
            <span>Go to&nbsp;</span>
            <span><a href="https://stackoverflow.com/users/20587701/nazir-hussain">StackOverflow</a></span>
          </div>
          <div>
            <span>Go to Repo&nbsp;</span>
            <span><a href="https://github.com/nHussain18/the-clock">Github</a></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
