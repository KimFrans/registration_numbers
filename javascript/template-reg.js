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
var checkedRadio2 = document.querySelector("input[name='town']:checked");
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
    // for(i=0; i<localArray1.length; i++){
    //     var nodeExample = document.createElement("li")
    //     var textNode = document.createTextNode(localArray1[i])
    //     nodeExample.appendChild(textNode)  
    //     document.getElementById("regs").appendChild(nodeExample)
    // }
    tempDisplay.innerHTML = userTemplate({reg: localArray1})
}


function registrationTemplate(){
    
    factTemplate.getRegNumber(regInput1.value)
    
    
    if(regInput1.value != "" ){

        var array1 = factTemplate.getArr()
        console.log(array1.length)
       
        if(factTemplate.addRegNumber() == true){
            // for(i=0; i<array.length; i++){
            //     var nodeExample = document.createElement("li")
            //     var textNode = document.createTextNode(array[i])
            //     nodeExample.appendChild(textNode)  
            // }

            // document.getElementById("regs").appendChild(nodeExample)
            // console.log(userTemplate({reg: array}))
            console.log(array1)
            // tempDisplay.innerHTML = userTemplate({reg: ["CA 123456", "CV 123456"]})
            tempDisplay.innerHTML = userTemplate({reg: array1})
            message1.innerHTML = factTemplate.values().addMessage
            setTimeout(function(){ message1.innerHTML = "" }, 4000);
            
        }
        localStorage.setItem('regNumberArray1', JSON.stringify(factTemplate.getArr()))
        // tempDisplay.innerHTML = userTemplate({reg: array1})
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

    if(checkedRadio1 != ''){
        var checkedRadio2 = document.querySelector("input[name='town']:checked");
        factTemplate.filterRegistration(checkedRadio2.value)
        
        if(checkedRadio2.value === "cape-town"){
            var cape1 = factTemplate.getCape()
           
            var list = document.getElementById("regsTemp");
            list.innerHTML = ''

            if(cape1.length != 0){
            //   for(i=0; i<cape1.length; i++){
            //     var capeTown = document.createElement("li")
            //     var capeRegNum = document.createTextNode(cape[i])
            //     capeTown.appendChild(capeRegNum) 

            //     }
            
                // document.getElementById("regs").appendChild(capeTown)  
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

            if(stell1.length != 0){
                // for(i=0; i<stell.length; i++){
                //     var stellTown = document.createElement("li")
                //     var stellRegNum = document.createTextNode(stell[i])
                //     stellTown.appendChild(stellRegNum)  
                
                // }
            
                // document.getElementById("regs").appendChild(stellTown)
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
                // for(i=0; i<bell.length; i++){
                //     var bellTown = document.createElement("li")
                //     var bellRegNum = document.createTextNode(bell[i])
                //     bellTown.appendChild(bellRegNum)  
                // }
            
                // document.getElementById("regs").appendChild(bellTown)
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
                // for(i=0; i<paar.length; i++){
                //     var paarTown = document.createElement("li")
                //     var paarRegNum = document.createTextNode(paar[i])
                //     paarTown.appendChild(paarRegNum)  
                
                // }
                // document.getElementById("regs").appendChild(paarTown)
                tempDisplay.innerHTML = userTemplate({reg: paar1})
            }
            else{
                errorMessage1.innerHTML = "There are no registration numbers for this location"
                setTimeout(function(){ errorMessage1.innerHTML = "" }, 4000);
            }
            
        }
        
        else if(checkedRadio2.value === "all"){
            var allReg1 = factTemplate.getArr()
        //    console.log(allReg)
           
            var list = document.getElementById("regsTemp");
            list.innerHTML = ''

            for(i=0; i<allReg1.length; i++){
                // var allTown = document.createElement("li")
                // var allRegNum = document.createTextNode(allReg[i])
                // allTown.appendChild(allRegNum)  
                // document.getElementById("regs").appendChild(allTown)
                tempDisplay.innerHTML = userTemplate({reg: allReg1})
            }
            
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

