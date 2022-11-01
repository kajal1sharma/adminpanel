import React from 'react'
import LeftSidePanel from "./LeftSidePanel";
import RightSidePanel from "./RightSidePanel";
import MainContainer from "./MainContainer";
import Header from "./Header";
const AdminDashboard = () => {
  return (
    <div style={{gap:"2.2px" ,display:"flex",flexDirection:"row"}}>
      <div style={{width:"7vw", boxShadow:"0px 0px 5px gray", height:"100vh", backgroundColor:"white"}}>
      <LeftSidePanel/>
      </div>
      
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div style={{width:"89vw" ,height:"10vh", boxShadow:"0px 0px 5px gray",backgroundColor:"white"}}>
        <Header/>
        </div>
        <div style={{width:"83vw", height:"80vh", marginTop:"2.5vw",backgroundColor:"white"}}>
        <MainContainer />
        </div>
        
      </div>
      <div style={{width:"5vw", height:"100vh", boxShadow:"0px 0px 5px gray",backgroundColor:"white"}}>
      <RightSidePanel />
      </div>
    </div>
  )
}

export default AdminDashboard
