import React from 'react'
import img1 from '../assets/img1-1.png'
import img2 from '../assets/img2-1.png'
import img4 from '../assets/img4-1.png'
import '../styles/Produits.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Produits() {
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 ">
                    <div className="text-center">
                        <h1 className=''> Présentation de Produits </h1>
                        <h3 className=''> Toutes une collection de produits de choix, de vêtement a votre goût et conçu pour vous rendre sublime </h3>
                    </div>
                    <div className="img1 col">
                        <img src={img1} alt="img1"  className="mr-3 img-fluid"/>
                        <div className="bloc1 text-black p-3 rounded-lg position-absolute mt-5 me-5 z-index-1 m-5">
                            <h2>Robe en coton biologique</h2>
                            <p>La robe "Soleil d'été" est une pièce incontournable pour les journées chaudes de l'été. Fabriquée en coton biologique doux et respirant, elle offre un confort optimal tout en étant respectueuse de l'environnement. Son motif fleuri et sa coupe fluide mettront en valeur votre silhouette avec élégance. Avec ses bretelles ajustables et sa ceinture amovible, cette robe s'adaptera parfaitement à votre morphologie pour un look frais et féminin.</p>
                        </div>
                    </div>
                    <div className="img2 col ">
                        <img src={img2} alt="img2" className="img-fluid mr-3 img2"/>
                        <div className="bloc2 text-black p-3 rounded-lg position-absolute mt-5 me-5 z-index-1 m-5 ">
                            <h2> Chemise en lin </h2>
                            <p >La chemise "Brisa del mar" est un must-have pour les amoureux du style casual chic. Confectionnée en lin léger et respirant, elle est idéale pour les journées ensoleillées. Sa coupe droite et décontractée s'adapte à toutes les morphologies et sa couleur bleu pastel rappelle la fraîcheur de l'océan. Les boutons en nacre apportent une touche d'élégance à cette pièce intemporelle, facile à porter en toutes occasions.</p>
                        </div>

                    </div>
                    <div className="img4 col ">
                        <img src={img4} alt="img4" className="img-fluid mr-3 img4"/>
                        <div className="bloc3 text-black p-3 rounded-lg position-absolute mt-5 me-5 z-index-1 m-5 ">
                            <h2>T-shirt en coton recyclé</h2>
                            <p >Le T-shirt "Second Life" est un vêtement à la fois tendance et écologique. Fabriqué à partir de coton recyclé, il contribue à réduire l'empreinte carbone de votre garde-robe. Son design épuré et moderne en fait un basique indispensable, facile à assortir avec différents styles vestimentaires. Sa coupe droite et confortable convient à toutes les morphologies et sa couleur gris chiné apporte une touche de sobriété à votre look.</p>
                        </div>

                    </div>


                </div>
            </div>

        </div>


)
}

export default Produits

/*
*/