var myCar2 = {

    maxSpeed: 70,                   //properties
    driver: 'Net Ninja',
    drive: function(speed, time){  // method
        console.log(speed * time);
    },

    test: function(){
        console.log(this); //refers to myCar2 becouse is inside
    },

    logDriver: function(){
        console.log('Driver name is ' + this.driver);
    }

};

console.log(myCar2.maxSpeed);
myCar2.drive(50,3);             // function
myCar2.test();                  // function
myCar2.logDriver();

console.log(myCar2);
