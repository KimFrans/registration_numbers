var domTemplate = document.querySelector(".split right")
var regInput1 = document.querySelector(".textNumTemp")
var radioInput1 = document.querySelector(".radio-btnTemp")
var addButton1 = document.querySelector(".addTemplate")
var clearButton1 = document.querySelector(".clearTemplate")
var errorMessage1 = document.querySelector(".errorMessageTemp")
var showReg1 = document.querySelector(".showTemp")
var message1 = document.querySelector(".messageTemp")
var regDisplay1 = document.getElementById("reg-displayTemp")
var tempDisplay = document.getElementById("regsTemp")
var clear1 = document.querySelector(".clearTemplate")
var temp = document.querySelector(".displayReg")
var checkedRadio2 = document.querySelector("input[name='townT']:checked");
checkedRadio2.checked = false

var factTemplate = registrations()

 // get a reference to the template script tag
var templateSource = document.querySelector(".templateReg").innerHTML;

 // compile the template
var userTemplate = Handlebars.compile(templateSource);

var localArray1 = []

if (localStorage['regNumberArray1']){
    localArray1 = JSON.parse(localStorage['regNumberArray1'])
    console.log(localArray1)
}

factTemplate.setArray(localArray1)

if(localArray1.length != 0){
   
    tempDisplay.innerHTML = userTemplate({reg: localArray1})
}


function registrationTemplate(){
    
    factTemplate.getRegNumber(regInput1.value)
    
    
    if(regInput1.value != "" ){

        var array1 = factTemplate.getArr()
        console.log(array1.length)
       
        if(factTemplate.addRegNumber() == true){
            // console.log(array1)
           
            tempDisplay.innerHTML = userTemplate({reg: array1})
            message1.innerHTML = factTemplate.values().addMessage
            setTimeout(function(){ message1.innerHTML = "" }, 4000);
            
        }
        localStorage.setItem('regNumberArray1', JSON.stringify(factTemplate.getArr()))
        message1.innerHTML = factTemplate.values().addMessage
        setTimeout(function(){ message1.innerHTML = "" }, 4000);

    }
    
    else{
        message1.innerHTML = "please enter a registration number"
        setTimeout(function(){ message1.innerHTML = "" }, 4000);
        
    }
    regInput1.value = ""
    
}
addButton1.addEventListener("click", registrationTemplate)

function radioButtonsTemplate(){

    if(checkedRadio2 != ''){
        var checkedRadio2 = document.querySelector("input[name='townT']:checked");
        factTemplate.filterRegistration(checkedRadio2.value)
        
        if(checkedRadio2.value === "cape-town"){
            var cape1 = factTemplate.getCape()

            tempDisplay.innerHTML = ""
            if(cape1.length != 0){
             
                tempDisplay.innerHTML = userTemplate({reg: cape1})
            }
            else{
                errorMessage1.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage1.innerHTML = "" }, 4000);
            }
        }

        else if(checkedRadio2.value === "stellenbosch"){
            var stell1 = factTemplate.getStell()
           
            var list = document.getElementById("regsTemp");
            list.innerHTML = ''
            tempDisplay.innerHTML = ""
            if(stell1.length != 0){
                
                tempDisplay.innerHTML = userTemplate({reg: stell1})
            }
            else{
                errorMessage1.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage1.innerHTML = "" }, 4000);
            }
        
        }

        else if(checkedRadio2.value === "bellville"){
            var bell1 = factTemplate.getBell()
           
            var list = document.getElementById("regsTemp");
            list.innerHTML = ''

            if(bell1.length != 0){
                
                tempDisplay.innerHTML = ""
                tempDisplay.innerHTML = userTemplate({reg: bell1})
            }
            else{
                errorMessage1.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage1.innerHTML = "" }, 4000);
            }
        }

        else if(checkedRadio2.value === "paarl"){
            var paar1 = factTemplate.getPaar()
           
            var list = document.getElementById("regsTemp");
            list.innerHTML = ''

            if(paar1.length != 0){
                tempDisplay.innerHTML = ""
                tempDisplay.innerHTML = userTemplate({reg: paar1})
            }
            else{
                errorMessage1.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage1.innerHTML = "" }, 4000);
            }
            
        }
        
        else if(checkedRadio2.value === "all"){
            var allReg1 = factTemplate.getArr()
        
           
            var list = document.getElementById("regsTemp");
            list.innerHTML = ''

                tempDisplay.innerHTML = ""
                tempDisplay.innerHTML = userTemplate({reg: allReg1})
            
            
        }

    }

}
showReg1.addEventListener('click', radioButtonsTemplate)

function clearReg(){
    factTemplate.clearTheCountButton()
    var list = document.getElementById("regsTemp");
    list.innerHTML = ''
    checkedRadio2.checked = false
    message1.innerHTML = factTemplate.values().cleared
    setTimeout(function(){ message1.innerHTML = "" }, 4000);
}
clear1.addEventListener("click", clearReg)

