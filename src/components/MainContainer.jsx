import React from 'react'
import MainPanel from "./MainPanel";
import EventSettings from "./EventSettings"
const MainContainer = () => {
  return (
    <div style={{display:"flex"}}>
      <div style ={{width:"20%",height:"80vh", borderRadius:"10px",boxShadow:"0px 0px 10px rgb(30, 30, 30, 0.4) "}}>
        <EventSettings/>
      </div>
      <div style={{width:"80%", height:"80vh",borderRadius:"10px",boxShadow:"0px 0px 10px rgb(30, 30, 30, 0.4) "}}>
        <MainPanel/>
      </div>
    </div>
  )
}

export default MainContainer
