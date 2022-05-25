





//  <p>hola mundo</p>

// let contG3 = document.getElementsByClassName('contenedorG3');
// let parr =  document.createElement('p');
// let fragment =  document.createDocumentFragment();
// parr.innerHTML = "hola Mundo";
// fragment.appendChild(parr);
// console.log(fragment);
// contG3[0].appendChild(fragment);

// ...................
//  let body = document.getElementsByTagName('body');
// let padrejs1 =  document.createElement('div');

// ...................
// let padrejs1 = document.getElementById('padrejs1');
// let fragment = document.createDocumentFragment();

// let label = document.createElement('label');
// label.innerHTML = 'Elige tu navegador de esta lista:';

// let input1 = document.createElement('input');

// input1.setAttribute('list' , 'browser');
// input1.setAttribute('name', 'myBrowser');
// // ....
// let datalist = document.createElement('datalist');
// datalist.setAttribute('id', 'browser');
// let option1 = document.createElement('option');
// let option2 = document.createElement('option');
// let option3 = document.createElement('option');
// let option4 = document.createElement('option');
// let option5 = document.createElement('option');
// let option6 = document.createElement('option');


// option1.setAttribute('value', 'chrome');
// option2.setAttribute('value', 'Firefox');
// option3.setAttribute('value', 'Internet Explorer');
// option4.setAttribute('value', 'Opera');
// option5.setAttribute('value', 'Safari');
// option6.setAttribute('value', 'Microsoft Edge');

// datalist.appendChild(option1);
// datalist.appendChild(option2);
// datalist.appendChild(option3);
// datalist.appendChild(option4);
// datalist.appendChild(option5);
// datalist.appendChild(option6);
// // ....
// label.appendChild(input1);
// fragment.appendChild(label);

// fragment.appendChild(datalist);
// padrejs1.appendChild(fragment);
            // body[0].appendChild(padrejs1);

var optionsArray = ['chrome','Firefox','Internet Explorer','Opera','Safari','Microsoft Edge' , 'milagros'];

function insertChooser(idPadre , tituloLabel , listIdDataList, optionsArray ){

    let padrejs1 = document.getElementById(idPadre);
    let fragment = document.createDocumentFragment();
    
    let label = document.createElement('label');
    label.innerHTML = tituloLabel;
    
    let input1 = document.createElement('input');
    
    input1.setAttribute('list' , listIdDataList);
    input1.setAttribute('name', 'myBrowser');
    // ....
    let datalist = document.createElement('datalist');
    datalist.setAttribute('id', listIdDataList);
    

    console.log(optionsArray);
    for(let i = 0; i< optionsArray.length; i++){
        let option = document.createElement('option');
        option.setAttribute('value', optionsArray[i]);
         console.log(optionsArray[i]);
        datalist.appendChild(option);        
    }

    // ....
    label.appendChild(input1);
    fragment.appendChild(label);
    
    fragment.appendChild(datalist);
    padrejs1.appendChild(fragment);
    // body[0].appendChild(padrejs1);
    
    // console.log(datalist);
}


insertChooser("padrejs1" ,'Elige tu navegador de esta lista:' , 'broser2' , optionsArray);


