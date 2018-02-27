/*var age = 5;

while (age < 10){

    console.log("Your age is less then 10")
    age ++;

}

    document.write('You are over 10') */


/*below it is exacly the same but with the "for" loop
for (age = 5; age < 10; age++) {

    console.log("Your age is less then 10")
}

document.write("You are over 10") */

var links = document.getElementsByTagName("a");

for (i =1; i <= links.length; i++) {

    console.log("this is link number" +i);
}

document.write("all links now looped");