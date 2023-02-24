//Camel Case: gauravKumar
//Pascal Case: GauravKumar
//Snake Case: gaurav_kumar
//Screaming Snake Case: Gaurav_Kumar
//Kebab Case: gaurav-kumar
//Screaming Kebab Case: Gaurav-Kumar

const camelCase = [];
const pascalCase = [];
const snakeCase = [];
const screamingSnakeCase = [];
const kebabCase = [];
const screamingKebabCase = [];

const convertBtn = document.querySelector("#convert-btn");
convertBtn.addEventListener("click", () => {
    const textValue = document.querySelector("#text").value;
    
    if(textValue == ""){
        alert("Please Enter the Text");
    }else{
        // console.log(textValue);
        const textValueIntoArray = textValue.split(" ");
        textValueIntoArray.forEach((element, index) => {
            convertIntoCamelCase(element, index);
            convertIntoPascalCase(element);
            convertIntoSnakeCase(element);
            convertIntoScreamingSnakeCase(element);
            convertIntoKebabCase(element);
            conveIntoScreamingKebabCase(element);
        });
    }

    let camelCaseField = document.querySelector("#camel-case");
     camelCaseField.innerText = camelCase.join("");

     document.querySelector("#pascal-case").innerText = pascalCase.join("");
     document.querySelector("#snake-case").innerText = snakeCase.join("_");
     document.querySelector("#screaming-snake-case").innerText = screamingSnakeCase.join("_");
     document.querySelector("#kebab-case").innerText = kebabCase.join("-");
     document.querySelector("#screaming-kebab-case").innerText = screamingKebabCase.join("-");

     //Empty the array so, that previous word will not concatenate
     camelCase.splice(0, camelCase.length);
     pascalCase.splice(0, pascalCase.length);
     snakeCase.splice(0, snakeCase.length);
     screamingSnakeCase.splice(0, screamingSnakeCase.length);
     kebabCase.splice(0, kebabCase.length);
     screamingKebabCase.splice(0, screamingKebabCase.length);
});


function convertIntoCamelCase(element, index) {
   if(index == 0){
      camelCase.push(element.toLowerCase());
   }else{
       for(let i = 0; i < element.length; i++){
        if(i == 0){
            camelCase.push(element[i].toUpperCase());
        }else{
           camelCase.push(element[i].toLowerCase());
        }
       }
   }

   return camelCase;
  
}

function convertIntoPascalCase(element){
    for(let i = 0; i < element.length; i++){
        if(i == 0){
            pascalCase.push(element[i].toUpperCase());
        }else{
            pascalCase.push(element[i].toLowerCase());
        }
       }
       
       return pascalCase;
}

function convertIntoSnakeCase(element){
   snakeCase.push(element.toLowerCase());
}

function convertIntoScreamingSnakeCase(element){
    const screSnakeCase = [];

    for(let i = 0; i < element.length; i++){
        if(i == 0){
            screSnakeCase.push(element[i].toUpperCase());
        }else{
            screSnakeCase.push(element[i].toLowerCase());
        }
    }

    screamingSnakeCase.push(screSnakeCase.join(""));
    // console.log(screamingSnakeCase.join("_"));
    return screamingSnakeCase;
}

function convertIntoKebabCase(element){
    kebabCase.push(element.toLowerCase());
}

function conveIntoScreamingKebabCase(element){
    const screKebabCase = [];

    for(let i = 0; i < element.length; i++){
        if(i == 0){
            screKebabCase.push(element[i].toUpperCase());
        }else{
            screKebabCase.push(element[i].toLowerCase());
        }
    }

    // console.log(screKebabCase);
    screamingKebabCase.push(screKebabCase.join(""));
    return screamingKebabCase;
}