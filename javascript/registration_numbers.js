var regInput = document.querySelector(".textNum")
var radioInput = document.querySelector(".radio-btn")
var addButton = document.querySelector(".add")
var clearButton = document.querySelector(".clear")
var errorMessage = document.querySelector(".errorMessage")
// var nameText = nameInput.querySelector(".textName")
var counterDis = document.querySelector(".counterValue")
var message = document.querySelector(".message")
var regDisplay = document.querySelector(".reg1")
var regDisplay2 = document.querySelector(".reg2")
var regDisplay3 = document.querySelector(".reg3")
var checkedRadio1 = document.querySelector("input[name='town']:checked");
checkedRadio1.checked = false

var factoryFunc = registrations()


function registrationNumbers(){
    factoryFunc.getRegNumber(regInput.value)
    
    
    if(regInput.value != "" ){
        factoryFunc.addRegNumber()
        // if((regInput.value).match(/[A-Z]{2}\s[0-9]{3}\-[0-9]{3}/g) || (regInput.value).match(/[A-Z]{2}\s[0-9]{5}/g) || (regInput.value).match(/[A-Z]{2}\-[0-9]{3}\-[0-9]{3}/g)){

            
        // }
        message.innerHTML = factoryFunc.values().addMessage
        regDisplay.innerHTML = factoryFunc.values().display

        counterDis.innerHTML = factoryFunc.values().counter
            
        setTimeout(function(){ message.innerHTML = "" }, 4000);
    }
    
    else{

        if(regInput.value == ''){
            errorMessage.innerHTML = factoryFunc.values().noInput
            // errorMessage.innerHTML = factoryFunc.values().invalid
            setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);
        }
        if(!(regInput.value).match(/[A-Z]{2}\s[0-9]{3}\-[0-9]{3}/g) || !(regInput.value).match(/[A-Z]{2}\s[0-9]{5}/g) || !(regInput.value).match(/[A-Z]{2}\-[0-9]{3}\-[0-9]{3}/g)){
            errorMessage.innerHTML = factoryFunc.values().invalid
            setTimeout(function(){ errorMessage.innerHTML = "" }, 4000);
        }
        
    }
    regInput.value = ""
    //errorMessage.innerHTML = factoryFunc.values().added
    

    
    

}
addButton.addEventListener("click", registrationNumbers)