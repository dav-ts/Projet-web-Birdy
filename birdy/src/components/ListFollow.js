import React from "react";
import Follow from "./Follow";
function ListFollow(props){
    const dateAuj = new Date();
    const dateE = new Date(2023, 1, 19);

    const [livres, setLivres] = useState([
        {auteur: "Hugo Victor", titre: "La Légende des siècles", emprunt: {statut: false, dateEmprunt:dateAuj}, cote: "HUG001"},
        {auteur: "Hugo Victor", titre: "Les Misérables", emprunt: {statut: false, dateEmprunt:dateAuj}, cote: "HUG002"},
        {auteur: "Zola Émile", titre: "L'Assommoir", emprunt: {statut: true, dateEmprunt:dateE}, cote: "ZOL001"},
    ]);
/*
    const handleChangeTitreCollection = (event) => {
        setTitreCollection(event.target.value)
    }

    const handleSubmitLivre = (event) => {
        event.preventDefault();
        setLivres([...livres, {
            titre: document.getElementById('titre').value,
            auteur: document.getElementById('auteur').value,
            cote: document.getElementById('cote').value,
            emprunt: {statut: false, dateEmprunt: dateAuj}
        }]);
    }

    return <div>
        <h1>{titreCollection}</h1>
        <label htmlFor="titreCollection">Titre de la collection ?</label><input id='titreCollection' onChange={handleChangeTitreCollection} />
        <ul>
            {
                livres.map((livre) => {
                    return <li><Livre titre={livre.titre} auteur={livre.auteur} cote={livre.cote} emprunt={livre.emprunt} /></li>
                })
            }
        </ul>
        <form onSubmit={handleSubmitLivre}>
            <label htmlFor="auteur">Auteur</label><input id='auteur' placeholder='Nom Prénom' />
            <label htmlFor="titre">Titre</label><input id='titre' placeholder='Titre complet' />
            <label htmlFor="cote">Côte</label><input id='cote' placeholder='AUTxxx' />
            <button>Ajouter le livre</button>
        </form>
    </div>;
*/
    return (
        <div class="follow">
            <h3 class="follow-heading"> Qui suivre </h3>

            {
                livres.map((livre) => {
                        return <Follow/>
                }  )
            }

        </div>
    )
}
//SI on veut ecrire a l interieur du return div un boutton ayant comme class=roro il faut ecrire className=roro

export default ListFollow;

