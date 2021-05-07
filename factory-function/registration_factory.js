function registrations(){

    var regNum = ""
    var regList = []
    var regOb = {}
    var regCount = 0
    var mess = ""
    var alreadyAddedError = ""
    var addedMessage = ""
    var clearMessage = "All registrations have been cleared!"
    var typeMessage = ""
    var empty = "Please enter a registration number"
    var tooMany = ""

    function getRegNumber(reg){
        regNum = reg.toUpperCase()
        console.log(regNum)

    }

    function getArr(){
        return regList
    }

    function addRegNumber(){
       // console.log(regNum)
        addedMessage = ""

        if (!regList.includes(regNum)){
            //console.log('South')
            if(/[A-Z]{2}\s[0-9]{3}\-[0-9]{3}/g.test(regNum) || /[A-Z]{2}\s[0-9]{5}/g.test(regNum) || /[A-Z]{2}\-[0-9]{3}\-[0-9]{3}/g.test(regNum)){
                //console.log('north')
                   if(regNum.length >8 && regNum.length <=10){
                       // console.log('numbers')
                        regList.push(regNum)
                        regCount++
                        addedMessage = "Your registration number has been added"
                        //console.log("try")
                    } 
                    else{
                    addedMessage = "not enough characters more or less!"
                    }
                    regNum = ''
            } 
            else if(!/[A-Z]{2}\s[0-9]{3}\-[0-9]{3}/g.test(regNum) || !/[A-Z]{2}\s[0-9]{5}/g.test(regNum) || !/[A-Z]{2}\-[0-9]{3}\-[0-9]{3}/g.test(regNum)){
                addedMessage = "does not match check the format!"
            }

            // console.log(regList)
            
        }
        else if(regList.includes(regNum)){
            alreadyAddedError = "This registration has already been added!"
        }


    }

    function filterRegistration(radioCheck){

        if(radioCheck == "cape-town"){
            for(i=0; i<regList.length; i++){
                if(regList[i].startsWith("CA")){

                }
            }
        }
        if(radioCheck == "stellenbosch"){
            for(i=0; i<regList.length; i++){
                if(regList[i].startsWith("CL")){

                }
            }
        }
        if(radioCheck == "bellville"){
            for(i=0; i<regList.length; i++){
                if(regList[i].startsWith("CF")){

                }
            }
        }
        if(radioCheck == "paarl"){
            for(i=0; i<regList.length; i++){
                if(regList[i].startsWith("CJ")){

                }
            }
        }
        if(radioCheck == "all"){
            for(i=0; i<regList.length; i++){
                
            }
        }

    }

    function clearTheCountButton(){
        regCount = 0
        regList = []
        //localStorage.clear()
    }
    
    

    function values(){
        return {
            regItems : regCount,
            addMessage : addedMessage,
            noInput : empty,
            display : regList,
            invalid : typeMessage,
            chars : tooMany,
            added : alreadyAddedError,
            counter : regCount,
            object : regOb,
        }
    }

    return{
        values,
        getRegNumber,
        addRegNumber,
        getArr,
        clearTheCountButton,
        filterRegistration,
    }
}