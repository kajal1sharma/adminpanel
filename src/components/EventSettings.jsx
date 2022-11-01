import React from 'react'
import "./eventsettings.css"
const EventSettings = () => {
  return (
    <div style={{borderRadius:"10px" }}>
      <div style={{textAlign:"left",fontSize:"24px", padding:"20px 25px",color: "rgb(213, 213, 213)", fontWeight:400, borderBottom:"5px solid rgb(128, 128, 128, 0.2"}}>
        Event Settings
      </div>
      <div style={{fontSize:"18px", color:"gray", fontWeight:600}}>
          <div className="eventItem">General</div>
          <div className="eventItem">Privacy</div>
          <div className="eventItem">Featuers</div>
          <div className="eventItem">Customization</div>
          <div className="eventItem">Integration</div>
          <div className="eventItem">Session settings</div>
          <div className="eventItem">My Plans</div>
      </div>
      
    </div>
  )
}

export default EventSettings
