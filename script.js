let lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
let uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters = "!@#$%^&*+";
let space = " ";

function randomString(character){
    let idx = Math.floor(Math.random()*character.length);
    return character[idx];
}

function finalString(){
    finalAnsString = ''
    resultString = ''
    let lowerCaseCheckBox = document.querySelector('#lowerCase');
    let upperCaseCheckBox = document.querySelector('#upperCase');
    let numberCheckBox = document.querySelector('#number');
    let symbolCheckBox = document.querySelector('#symbol');
    let spaceCheckBox = document.querySelector('#includeSpaces');

    if(lowerCaseCheckBox.checked==false && 
       upperCaseCheckBox.checked==false && 
       numberCheckBox.checked==false && 
       symbolCheckBox.checked==false && 
       spaceCheckBox.checked==false){
        alert("Please tick the revalent checkbox to generate password");
        return
    }

    if(lowerCaseCheckBox.checked){
        resultString += randomString(lowercaseCharacters);
        finalAnsString += lowercaseCharacters;
    }
    if(upperCaseCheckBox.checked){
        resultString += randomString(uppercaseCharacters);
        finalAnsString += uppercaseCharacters;
    }
    if(numberCheckBox.checked){
        resultString += randomString(numbers);
        finalAnsString += numbers;
    }
    if(symbolCheckBox.checked){
        resultString += randomString(specialCharacters);
        finalAnsString += specialCharacters;
    }
    if(spaceCheckBox.checked){
        resultString += randomString(space);
        finalAnsString += space
    }

    while(resultString.length<=12){
        resultString += randomString(finalAnsString);
    }

    let exclude_duplicate = document.getElementById("excludeDuplicates");
    let passwordStatus = checkedDuplicate(resultString);
    console.log(passwordStatus);

    while(exclude_duplicate.checked==true && passwordStatus==false){
        finalString();
        passwordStatus = checkedDuplicate(resultString);
    }
    let password = document.querySelector('#password');
    password.style.color = 'white';
    password.value = resultString;
    
    let copyBtn = document.querySelector('#copy');
    copyBtn.textContent = 'Copy';
}

function copyPassword(){
    let password = document.querySelector('#password').value;
    navigator.clipboard.writeText(password);
    let copyBtn = document.querySelector('#copy');
    copyBtn.textContent = 'Copied';
}

function checkedDuplicate(passwordToBeChecked){
    let obj = {}
    console.log(passwordToBeChecked);
    let length = passwordToBeChecked.length;
    for(let i=0;i<length;i++){
        console.log(passwordToBeChecked[i]);
        if (passwordToBeChecked[i] in obj)
            return false;
        obj[passwordToBeChecked[i]] = 1
    }
     console.log(obj);
    return true;
}

let btn = document.querySelector("#generatePassword")
btn.addEventListener("click", finalString);

let copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copyPassword);