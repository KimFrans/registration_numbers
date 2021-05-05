function registrations(){

    var regNum = ""
    var regList = []
    var regOb = {}
    var regCount = 0
    var mess = ""
    var alreadyAddedError = "This registration number has already been added!"
    var addedMessage = ""
    var clearMessage = "All registrations have been cleared!"
    var typeMessage = ""
    var empty = "Please enter a registration number"
    var tooMany = "Please enter the correct amount of characters!"

    function getRegNumber(reg){
        regNum = reg.toUpperCase()
        console.log(regNum)
        // regList.push(regNum)
        //         regCount++
        //         console.log(regList)
        //         console.log(regCount)
    }

    function addRegNumber(){
        console.log(regNum)

        if (!regList.includes(regNum)){
            console.log('South')
            if(/[A-Z]{2}\s[0-9]{3}\-[0-9]{3}/g.test(regNum) || /[A-Z]{2}\s[0-9]{5}/g.test(regNum) || /[A-Z]{2}\-[0-9]{3}\-[0-9]{3}/g.test(regNum)){
                regList.push(regNum)
                regCount++
                addedMessage = "Your registration number has been added"
            } else{
                addedMessage = "does not match!"
            }

            console.log(regList)
            
        }
        else{
            addedMessage = "This registration has already been added!"
        }

        // else{

        //     if(regNum.match(/[A-Z]{2}\s[0-9]{3}\-[0-9]{3}/g) || regNum.match(/[A-Z]{2}\s[0-9]{5}/g) || regNum.match(/[A-Z]{2}\-[0-9]{3}\-[0-9]{3}/g)){
        //         regList.push(regNum)
        //         regCount++
        //         console.log(regList)
        //         console.log(regCount)
        //         addedMessage = "Your registration number has been added"
        //     }
            
        //     else if(!regNum.match(/[A-Z]{2}\s[0-9]{3}\-[0-9]{3}/g) || !regNum.match(/[A-Z]{2}\s[0-9]{5}/g) || !regNum.match(/[A-Z]{2}\-[0-9]{3}\-[0-9]{3}/g)){
        //         typeMessage = "Invalid type of registration"
        //     }
            
        // }

    }
    
    // function already(){
    //     if (regOb.hasOwnProperty(regNum)){
    //         return alreadyAddedError
    //     }
    // }

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
        // already,
        getRegNumber,
        addRegNumber,
    }
}