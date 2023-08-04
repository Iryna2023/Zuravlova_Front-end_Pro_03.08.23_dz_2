let yourname = prompt("What is your name?","");

if (yourname == "") {
    alert("Hello! How are you?");
}

else {
    alert("Hello," +yourname+ "! How are you?");
}

const wasConfirmed = confirm("Let's start?");

if(wasConfirmed) {
    alert("Start");
}

else {
   alert("End");
}