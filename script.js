function sendtoEmail(firstName, lastName, message){
    //console.log(firstName+lastName+message)
    //window.open('mailto:qismatech@gmail.com?subject=Enquiry');
}

function sendtohome(){
    window.location.href="../pages/index.html";
}

function sendtoabout(){
    window.location.href="../pages/about.html";
}

function sendtopeople(){
    window.location.href="../pages/people.html"
}

function sendtoinsta(){
    window.location.href="https://instagram.com/qismatech";
}

function sendtocontact(){
    window.location.href="mailto:qismatech@gmail.com";
}

// Create the dropdown base
$("<select />").appendTo("nav");

// Create default option "Go to..."
$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Go to..."
}).appendTo("nav select");

// Populate dropdown with menu items
$("nav a").each(function() {
 var el = $(this);
 $("<option />", {
     "value"   : el.attr("href"),
     "text"    : el.text()
 }).appendTo("nav select");
});

$("nav select").change(function() {
    window.location = $(this).find("option:selected").val();
  });


  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }