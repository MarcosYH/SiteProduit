import React from 'react'
import img1 from '../assets/img1-1.png'
import img2 from '../assets/img2-1.png'
import img4 from '../assets/img4-1.png'
import '../styles/Produits.css'
function Produits() {
    return (
        <div>
 <h1 className='prod'> Présentation de Produits </h1>
 <h3 className='prod1'> Toutes une collection de produits de choix, de vêtement a votre goût et conçu pour vous rendre sublime </h3>
            <div className="div1">
                <img src={img1} alt="img1" className="img1"/>
                <div className="bloc1">
                    <h1 className='prod'> Robe en coton biologique </h1>
                    <p className="para1">La robe "Soleil d'été" est une pièce incontournable pour les journées chaudes de l'été. Fabriquée en coton biologique doux et respirant, elle offre un confort optimal tout en étant respectueuse de l'environnement. Son motif fleuri et sa coupe fluide mettront en valeur votre silhouette avec élégance. Avec ses bretelles ajustables et sa ceinture amovible, cette robe s'adaptera parfaitement à votre morphologie pour un look frais et féminin. </p>
                </div>
            </div>
            <div className="div2">
                <img src={img2} alt="img2" className="img2"/>
                <div className="bloc2">
                <h1 className='prod'> Chemise en lin </h1>
                    <p className='para1'> La chemise "Brisa del mar" est un must-have pour les amoureux du style casual chic. Confectionnée en lin léger et respirant, elle est idéale pour les journées ensoleillées. Sa coupe droite et décontractée s'adapte à toutes les morphologies et sa couleur bleu pastel rappelle la fraîcheur de l'océan. Les boutons en nacre apportent une touche d'élégance à cette pièce intemporelle, facile à porter en toutes occasions. </p>
                </div>
            </div>
            <div>
            <img src={img4} alt="img4" className="img4"/>
            <div className="bloc3">
                <h1 className='prod'>T-shirt en coton recyclé </h1>
                    <p className='para1'> Le T-shirt "Second Life" est un vêtement à la fois tendance et écologique. Fabriqué à partir de coton recyclé, il contribue à réduire l'empreinte carbone de votre garde-robe. Son design épuré et moderne en fait un basique indispensable, facile à assortir avec différents styles vestimentaires. Sa coupe droite et confortable convient à toutes les morphologies et sa couleur gris chiné apporte une touche de sobriété à votre look.</p>
                </div>
                
                
            </div>



        </div>
    )
}

export default Produits

/*
*/