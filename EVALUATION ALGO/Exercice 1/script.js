//EXERCICE 1

let fishlist = [
  ["Ordre","Famille","Nom vernaculaire","Nom binomial"],
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
  ["Aulpiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
  ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
];

let fish = getElementById('firstscreen');
function fish(array){
  let i = 0;
  let currentElement;
  let first = array[0];
let last = array[3];
  let tableElement = document.createElement('table');
  document.body.appendChild(tableElement);



//We modify the 1st column to make it bold and give it a color change.
  while (i < first.length) {
    currentElement = first[i];

    let thElement = document.createElement('th');
    tableElement.appendChild(thElement);
    thElement.textContent = currentElement;
    thElement.style.color= "red";

    i++;
  };



  let j = 1;
  let currentElement2;

// We'll take care of the rest.
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
    j++;
  };
};

//   let i=0;
//   let currentElement;
// let firstrow=array[0];
//   let tableElement = document.createElement('table');
//   document.body.appendChild(tableElement);
//
//
//     while (i<array.length) {
//     currentElement= array[i];
//     tableElement.textContent=currentElement;
//     i++
//   }
// }
fish(fishlist);
