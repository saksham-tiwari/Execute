import React from 'react'
import styles from "../Homepage.module.css"
import img1 from "../../../Assets/img1.png"
import img2 from "../../../Assets/img2.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimerIcon from '@mui/icons-material/Timer';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    let navigate = useNavigate();
    console.log(props)
    // let dispatch = useDispatch();
    const open = (id)=>{
        // dispatch(getSingle(id))
        navigate("/store/"+id);
    }
  return (
    <div className={styles.card}>
        <h1 className={styles.head}>{props.n.name}</h1>
        <div style={{display:"flex", width:"100%", justifyContent:"center", marginTop:"8px"}}>
            <div>
              <img src={img1} alt="counters" className={styles.icons}/><div className={styles.roundNo}>{props.n.counter}</div>
                <div style={{textAlign:"center", width:"100%"}}>Counters</div>
            </div>
            <div>
              <img src={img2} alt="counters" className={styles.icons}/><div className={styles.roundNo}>{props.n.peopleCount}</div>
                <div style={{textAlign:"center", width:"100%"}}>Customers</div>
            </div>
        </div>
        <div style={{textAlign:"center", marginTop:"8px"}}>
          <LocationOnIcon fontSize='small' style={{position:"relative",top:"4px", color:"#192839"}}/> Address of the store here...
        </div>
        <div style={{textAlign:"center", marginTop:"4px", color:"#304D6D", fontSize:"12px"}}>
          <TimerIcon fontSize='small' style={{position:"relative",top:"6px", color:"#192839"}}/> Waiting Time
        </div>
        <div className={styles.yellowCapsule}>
          {props.n.waitingTime}
        </div>
        <button className={styles.enterButton} onClick={()=>open(props.n.id)}>
          Enter Queue
        </button>
    </div>
  )
}

export default Card