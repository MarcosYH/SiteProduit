import React from 'react'
import img1 from '../assets/img1-1.png'
import img2 from '../assets/img2-1.png'
import img4 from '../assets/img4-1.png'
import '../styles/Produits.css'
function Produits() {
    return (
        <div>
            <h1 className="prod"> Présentation produits</h1>
            <div className="div1">
                <img src={img1} alt="img1" className="img1"/>
                <div className="bloc1">
                    <p> </p>
                </div>
            </div>
            <div className="div2">
                <img src={img2} alt="img2" className="img2"/>
                <div className="bloc2">
                    <p> </p>
                </div>
            </div>
            <div>
                <img src={img4} alt="img4" className="img4"/>
                <div className="bloc3">
                    <p> </p>
                </div>
            </div>



        </div>
    )
}

export default Produits

/*
*/