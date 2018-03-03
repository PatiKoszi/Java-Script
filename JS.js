//Construction Functions starts with Capital letter

var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver= driver;
    this.drive= function (speed, time){
        console.log(speed * time);
    };

    this.logDriver = function(){
        console.log('Driver name ' + this.driver);
    };


}

var myCar = new Car(70,'Ninja');
var myCar2 = new Car(40,'Patryk');
var myCar3 = new Car(10,'Asia');
var myCar4 = new Car(90,'Maciej');

myCar.drive(30,5);
myCar4.logDriver();
