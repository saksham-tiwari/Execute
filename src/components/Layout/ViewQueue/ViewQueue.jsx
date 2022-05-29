import React from 'react'
import Navbar from '../Navbar/Navbar'
import counter from "../../Assets/img1.png"
import styles from "./view.module.css"

const ViewQueue = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.viewFlex}>
        <div>
        <img src={counter} alt="count" style={{width:"50%",marginLeft:"25%"}}/>
    <p style={{textAlign:"center",width:"50%", marginLeft:"25%"}}>1</p><span className={styles.removeBtn}>Remove</span>
        </div>
        <div>
        <img src={counter} alt="count" style={{width:"50%",marginLeft:"25%"}}/>
    <p style={{textAlign:"center",width:"50%", marginLeft:"25%"}}>2</p><span className={styles.removeBtn}>Remove</span>
        </div>
        <div>
        <img src={counter} alt="count" style={{width:"50%",marginLeft:"25%"}}/>
    <p style={{textAlign:"center",width:"50%", marginLeft:"25%"}}>3</p><span className={styles.removeBtn}>Remove</span>
        </div>
        <div>
        <img src={counter} alt="count" style={{width:"50%",marginLeft:"25%"}}/>
    <p style={{textAlign:"center",width:"50%", marginLeft:"25%"}}>3</p><span className={styles.removeBtn}>Remove</span>
        </div>
        <div>
        <img src={counter} alt="count" style={{width:"50%",marginLeft:"25%"}}/>
    <p style={{textAlign:"center",width:"50%", marginLeft:"25%"}}>3</p><span className={styles.removeBtn}>Remove</span>
        </div>
        <div>
        <img src={counter} alt="count" style={{width:"50%",marginLeft:"25%"}}/>
    <p style={{textAlign:"center",width:"50%", marginLeft:"25%"}}>3</p><span className={styles.removeBtn}>Remove</span>
        </div>
        <div>
        <img src={counter} alt="count" style={{width:"50%",marginLeft:"25%"}}/>
    <p style={{textAlign:"center",width:"50%", marginLeft:"25%"}}>3</p><span className={styles.removeBtn}>Remove</span>
        </div>
    </div>
    
    </>
  )
}

export default ViewQueue