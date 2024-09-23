import React, { useState } from 'react'
import styles from './Bulb.module.css'
// import ON from '../assets/Light-On.jpeg';
// import OFF from '../assets/Light-Off.jpeg'
import img from '../assets/img.jpg'
const Bulb = () => {
    const [turnOn, setturnOn] = useState(false)
   const [turnOff, setturnOff] = useState(true)
   const [flicker, setflicker] = useState(false)



    return (
       <div className={styles.container}>

        <img src={img} alt="" 
         className={ 
            turnOn ? styles.bulbOn :
            turnOff ? styles.bulbOff :
            flicker ? styles.flicker :
            styles.img} 
        />

        <div className={styles.buttons}>
            <button className={styles.buttonOn}  onClick={() => setturnOn(true)}>On</button>
            <button className={styles.buttonOff} onClick={() => {setturnOff(true); setturnOn(false), setflicker(false)}}>Off</button>

            <button className={ flicker ? styles.buttonFlicker : styles.btnflicker } onClick={() => {setflicker(true), setturnOn(false), setturnOff(false)}} >Flicker</button>
        </div>
       </div>
    )
}

export default Bulb