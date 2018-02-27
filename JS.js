for (i = 0; i < 10; i ++) {

    if (i === 5 || i === 3) {
//just omit the point 5 and 3 and go to up of the code
        continue;
    }

  console.log(i);

    if (i ===7) {
//below end tle loop and finish
        break;
    }

}

console.log("I have broke out of the loop")
