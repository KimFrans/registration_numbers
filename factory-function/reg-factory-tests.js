describe('Checking the registration number', function(){
    it('Should be able to check if the registration has been added' , function(){
        var regTest = registrations();

        regTest.getRegNumber("ca 123456")
        regTest.addRegNumber("ca 123456")

        assert.equal("Your registration number has been added", regTest.values().addMessage)
        assert.equal(false, regTest.addRegNumber())

    });

    it('Should be able to check if the registration matches the correct format' , function(){
        var regTest = registrations();

        regTest.getRegNumber("ca 789-9632")
        regTest.addRegNumber("ca 789-9632")

        assert.equal("not enough characters more or less!", regTest.values().addMessage)
        assert.equal(false, regTest.addRegNumber())

    });

    it('Should be able to check the length of the registration' , function(){
        var regTest = registrations();

        regTest.getRegNumber("ca 741852963")
        regTest.addRegNumber("ca 741852963")

        assert.equal("not enough characters more or less!", regTest.values().addMessage)
        assert.equal(false, regTest.addRegNumber())

    });

    it('Should be able to check if the registration has already been added' , function(){
        var regTest = registrations();

        regTest.getRegNumber("ca 123456")
        regTest.addRegNumber("ca 123456")
        regTest.getRegNumber("ca 123456")
        regTest.addRegNumber("ca 123456")

        assert.equal("This registration has already been added!", regTest.values().addMessage)
        assert.equal(false, regTest.addRegNumber())

    });



});

describe('Error Messages', function(){
    it('Should be able to display error message if the registration has been added already' , function(){
        var regTest = registrations();

        regTest.getRegNumber("ca 123456")
        regTest.addRegNumber("ca 123456")
        regTest.getRegNumber("ca 123456")
        regTest.addRegNumber("ca 123456")


        assert.equal("This registration has already been added!", regTest.values().addMessage)
        assert.equal(false, regTest.addRegNumber())

    });

    it('Should be able to display the correct error message if a registration does not match the format' , function(){
        var regTest = registrations();

        regTest.getRegNumber("ca 123-96325")
        regTest.addRegNumber("ca 123-96325")

        assert.equal("not enough characters more or less!", regTest.values().addMessage)
        assert.equal(false, regTest.addRegNumber())

    });



    



});