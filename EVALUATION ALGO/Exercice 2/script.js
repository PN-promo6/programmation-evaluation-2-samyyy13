// We create the H1 and assign it in HTML
let h1;
function header(title) {

  let h1Element = document.createElement('h1');
  document.body.appendChild(h1Element);
  h1Element.textContent = "Cinéma Le Dauphin";

  let paragraph1;

  let pElement = document.createElement('p');
  h1Element.appendChild(pElement);
  pElement.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi)";

  let button = document.createElement("input");
  button.type = "button";
  button.value = "Voir les films à l'affiche cette semaine";
  h1Element.appendChild(button);
}
header(h1);

//2nd part of the exercise, we will create the two-dimensional picture

let movies = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2H", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];

function table(array) {
  let i = 0;
  let first = array[0];
  let currentElement;
  let tableElement = document.createElement('table');
  document.body.appendChild(tableElement);
  while (i < first.length) {
    currentElement = first[i];

    let thElement = document.createElement('th');
    tableElement.appendChild(thElement);
    thElement.textContent = currentElement;

    i++;
  };

  let j = 1;
  let currentElement2;
  let tbodyElement = document.createElement('tbody');
  tableElement.appendChild(tbodyElement);
  while (j < array.length) {
    currentElement2 = array[j];
    let trElement = document.createElement('tr');
    tableElement.appendChild(trElement);

    let k = 0;
    let currentElement3;

    while (k < currentElement2.length) {
      currentElement3 = currentElement2[k];
      let tdElement = document.createElement('td');
      tdElement.textContent = currentElement3;


      trElement.appendChild(tdElement);

      k++;
  };
  j++
};
};
table(movies);

let firstScreen=getElementById('firstscreen');
firstScreen.addEventListener("click",function(header){
  firstscreen.style.display="none";
  secondscreen.style.display="block"
})
