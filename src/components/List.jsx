import React from 'react'
import "./eventsettings.css"
const List = ({data, description}) => {
  return (
    <div style={{ alignSelf:"flex-start",width:"100vh",height:"7vh" ,justifySelf:"flex-start", paddingLeft:"180px"}}>
      <span style={{textAlign:"left",fontWeight:700, display:"block"}}>{data}</span>
      <span style={{textAlign:"left",display:"block"}}>
        <span style={{color:"rgb(120, 120, 120)", fontWeight:500, width:"40vw", display:"inline-block"}}>{description}</span>
        <span style={{padding:"0px 0px",backgroundColor:"#82fc77",borderRadius:"15px", border:"1px solid #82fc77", display:"inline-block"}}>
          <input className='inputlist' type={"radio"} checked/>
          <input className='inputlist' type={"radio"} />
        </span>
      </span>
    </div>
  )
}

export default List
