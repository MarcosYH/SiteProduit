import React from 'react'
import img1 from '../assets/Grouptest.png'
import img2 from '../assets/Grouptest2.png'
import img4 from '../assets/Grouptest3.png'
import '../styles/Produits.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Produits() {
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 ">
                    <div className="text-center ms-5 me-5 m-5">
                        <h1 className=''> Présentation de Produits </h1>
                        <h3 className=''> Toutes une collection de produits de choix, de vêtement a votre goût et conçu pour vous rendre sublime </h3>
                    </div>
                    <div className="col">
                        <img src={img1} alt="img1"  className="mr-3 img-fluid img1"/>

                    </div>
                    <div className=" col ">
                        <img src={img2} alt="img2" className="img-fluid mr-3 img2 float-lg-end"/>

                    </div>
                    <div className="col ">
                       <img src={img4} alt="img4" className="img-fluid mr-3 img4"/>


                    </div>


                </div>
            </div>

        </div>


)
}

export default Produits

/*
*/