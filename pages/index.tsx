import Head from 'next/head'
import { useEffect, useState } from 'react'

const Home = () => {

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    // setInterval(() => {
    //   setDate(new Date())
    // }, 1000)
  }, [])

  const onMouseMove = (event: any) => {
    const card: HTMLDivElement | any = document.getElementById('clock')
    var ax = -(window.innerWidth / 2 - event?.pageX) / 20;
    var ay = (window.innerHeight / 2 - event?.pageY) / 10;
    ax = ax / 1.7;
    ay = ay / 1.7;

    card.setAttribute("style", `transform: rotateY(${ax}deg) rotateX(${ay}deg);-webkit-transform: rotateY(${ax}deg) rotateX(${ay}deg);-moz-transform: rotateY(${ax}deg) rotateX(${ax}deg)`);
  };

  let seconds = date.getSeconds();
  let mins = date.getMinutes();
  let hours = date.getHours();
  console.log("time", hours, mins, seconds);

  let hDeg = (((hours % 12) * 30) + (mins / 2) + 90) % 360;
  let mDeg = Math.round(((mins * 6) + (seconds * 0.1) + 90) % 360)
  let sDeg = (seconds * 6) + 90
  console.log("Degrees", hDeg, mDeg, sDeg);

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
          <div className="card-content">
            <div className='center' />
            <span className='niddle-hour' style={{ transform: `rotate(${hDeg}deg)` }} />
            <span className='niddle-minute' style={{ transform: `rotate(${mDeg}deg)` }} />
            <span className='niddle-second' style={{ transform: `rotate(${sDeg}deg)` }} />
          </div>
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
