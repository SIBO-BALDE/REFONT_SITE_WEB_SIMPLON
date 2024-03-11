//declarer notre tableau d'objet formation
const formations = [
    {
        id: 1,
        titre : "Infrastructures et Cybersécurité",
        description : "La cybersécurité est un enjeu stratégique pour toute entreprise en transition numérique. vous souhaitez rejoindre les rangs des métiers de la cybersécurité ?",
        image : "https://img.freepik.com/photos-gratuite/groupe-jeunes-assis-conference-ensemble_58466-11188.jpg?w=1060&t=st=1698412628~exp=1698413228~hmac=f4e6c645566e9ce16696a99c3b9e17cb6094a5931dc378c5f61b6491e706218b",
        dateCreation : "2023-10-25"
    },
    {
        id: 2,
        titre : "Développement d'Application",
        description : "Le métier de développeur-se web vous intéresse ? Vous voulez élargir vos compétences en développement web et mobile ?",
        image : "https://img.freepik.com/vecteurs-premium/tendance-personnes-isometriques-concept-salle-formation-vue-face-entraineurs-enseignant-enseignement-conference-formation-commerciale-hommes-affaires-costume_130740-609.jpg?w=826",
        dateCreation : "2023-10-25"
    },
    {
        id: 3,
        titre : "Fondamentaux Numériques",
        description : "Le numérique change notre quotidien de plus en plus vite. Vous souhaitez vous former aux fondamentaux numériques ?",
        image : "https://img.freepik.com/photos-gratuite/formateur-expliquant-details-du-projet-au-stagiaire_74855-1665.jpg?w=1060&t=st=1698411910~exp=1698412510~hmac=2a9fbf50e93699124f77251893525c4ed53ae860422ade9b692a03df34fad060",
        dateCreation : "2023-10-25"
    }
];

if (localStorage.getItem('formations')==null || localStorage.getItem('formations')==undefined) {
    localStorage.setItem('formations', JSON.stringify(formations));
    
}

let formationContainer = document.querySelector('.formation-container');

let db = JSON.parse(localStorage.getItem('formations'))
//fonction qui nous permet d'afficher nos cartes
function formationCards(){
    db.forEach(element => {
        afficherFormation(element)
    })
}

formationCards();

//fonction qui nous permet de creer une carte formation
function afficherFormation(formation){
    // formationContainer.innerHTML = "";
    formationContainer.innerHTML += `
    <div class="card-items col-12 col-lg-4 col-md-6 col-sm-12 p-3" id="card-items">
        <div class="rounded-4 overflow-hidden shadow-sm" id="card-content">
            <div class="image-card">
                <img src="${formation.image}" alt="">
            </div>
            <div class="typo-card p-4 typo" id="typo">
                <h5>${formation.titre}</h5>
                <p>${formation.description}</p>
                <!-- Button modal edit formation -->
                <button type="button" class="btn  btn-primary fw-bold" data-bs-toggle="modal"
                                data-bs-target="#modifierFormation" onclick="getFormationAModifier('${formation.id}', '${formation.titre}', '${formation.description}')">
                                Modifier
                </button>

                            <button class="btn btn-danger fw-bold ms-2">Supprimer</button>
                        </div>
        </div>
    </div>
                            
                           
   `
}

let idFormationAModifier;
function getFormationAModifier(id, titre, description){
    idFormationAModifier = id;
    document.getElementById('titreFormation').value = titre;
    document.getElementById('descriptionFormation').value = description;

}

//creer un fonction pour modifier la formation
function modifierFormation(){
    //recuperer 
    event.preventDefault();
    //recuperer les valeur de nos champs
    let titreFormation = document.getElementById('titreFormation');
    let descriptionFormation = document.getElementById('descriptionFormation');
    //parcourir notre tableaux d'objet puis recuperer la formation qui à l'id de notre fonction et le stocker dans une variable formationFound
    let formationFound = formations.find(formation => formation.id == idFormationAModifier);
    //modifier l'objet trouvé

    formationFound.titre = titreFormation.value;
    formationFound.description = descriptionFormation.value;
    
    localStorage.setItem('formations', JSON.stringify(formations));

    

    
}