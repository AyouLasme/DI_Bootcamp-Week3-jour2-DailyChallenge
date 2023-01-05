// Obtenir la balise form et les éléments d'entrée
const form = document.querySelector('#libform');
const nounInput = document.querySelector('#noun');
const adjectiveInput = document.querySelector('#adjective');
const personInput = document.querySelector('#person');
const verbInput = document.querySelector('#verb');
const placeInput = document.querySelector('#place');
const story = document.querySelector('#story');

// Ajouter un submit event listener dans form
form.addEventListener('submit', (event) => {
    // empecher le comportement par defaut
    event.preventDefault();

    // obtenir les valeurs de input
    const noun = nounInput.value;
    const adjective = adjectiveInput.value;
    const person = personInput.value;
    const verb = verbInput.value;
    const place = placeInput.value;

    // s'assurer que les valeurs d'entrée ne sont pas vides
    if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
        alert("remplir tous les champs de saisie");
        return;
    }

    // generation de la story a l'aide des valeurs d'entrée
    const storyText = `Bonjour, moi c'est, ${person} je me trouve actuellement en ${place} j'adore la fete de noel et cette ${adjective} ${noun} est pour bientot! je ${verb} deja ma lettre au pere noel`;
    //afficher la story dans l'element story
    story.textContent = storyText;
});

