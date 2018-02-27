//Example how we can use Loops

var links = document.getElementsByTagName("a");

    for ( i = 0; i < links.lenght; i++ ){

        links[i].className = "link-" + i;
}