var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hellow";

console.log(myArray[0]);
console.log(myArray[1]);

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";

console.log(myCar.driver);
console.log(myCar.maxSpeed);

myCar.drive = function(){console.log("now driving");};

myCar.drive();

var myCar2 = {
    maxSpeed: 50,
    driver: 'Net Ninja',
    drive: function (speed, time) {
        console.log(speed * time);
    }
};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);

