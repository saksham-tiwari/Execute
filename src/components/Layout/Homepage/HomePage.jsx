import React, {useEffect,useState} from 'react'
import Navbar from '../Navbar/Navbar1';
import styles from "./Homepage.module.css"
import Card from './Card/Card';
import ListElement from './ListElement';
import SearchBar from '../SearchBar/SearchBar';
// import { useDispatch } from 'react-redux';
// import { getNearby } from '../../../redux/actions/LayoutAction';
// import { useSelector } from 'react-redux/es/exports';

const HomePage = () => {
  const [loc,setLoc]= useState({
    lat: 0,
    long: 0
 });


function getLocation() {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition);
       console.log(loc.lat.toString(),loc.long.toString());
    //   dispatch(getNearby(loc.lat.toString(),loc.long.toString()))

    } else {
       console.log( "Geolocation is not supported by this browser.");
    }
 }
 function showPosition(position) {
    setLoc({lat: position.coords.latitude, long: position.coords.longitude});
 }
//   const dispatch = useDispatch();
//   const nearby = useSelector((state)=>state.LayoutReducer).nearby;

  useEffect(()=>{
    console.log("here");
    getLocation()
    console.log(loc.lat.toString(),loc.long.toString())
    // dispatch(getNearby(loc.lat.toString(),loc.long.toString()))
  },[])

  const nearby = useState(
      [
        {about:"",billingTime:0,counter:0,frm:9,id:0,latitude:"0",longitude:"0",name:"Hey",peopleCount:0,to:6,waitingTime:0},
        {about:"",billingTime:0,counter:0,frm:9,id:0,latitude:"0",longitude:"0",name:"Store 2",peopleCount:0,to:6,waitingTime:0},
        {about:"",billingTime:0,counter:0,frm:9,id:0,latitude:"0",longitude:"0",name:"store n",peopleCount:0,to:6,waitingTime:0},
      ]
  )
  return (
    <>
        <Navbar/>
        <SearchBar/>
        
        <h1 className={styles.mainHead}>Nearby Stores</h1>
        <div className={styles.cards}>
            {nearby.length===0?<button onClick={getLocation}>Show Nearby</button>:""}
            {nearby.length!==0?nearby.map(n=>{
              return <Card n={n}/>
            }):<></>}
        </div>
        <br/>
        <br/>
        <h1 className={styles.mainHead}>Queues Joined</h1>
        <br/>
        <div>
            <ListElement/>
            <ListElement/>
            <ListElement/>
            <ListElement/>
        </div>

    </>
  )
}

export default HomePage