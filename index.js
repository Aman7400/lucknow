// Footer Date 

var year = document.getElementById("year");
var currentYear = new Date().getFullYear();
year.innerHTML=currentYear;
// alert(currentYear);
console.log(currentYear);





// active Class Js

const items = document.querySelectorAll(".nav-link");

items.forEach((item) => {


    item.addEventListener("click",(event)=>{

        items.forEach((remove_active_item)=>{

            remove_active_item.classList.remove("active");

        });

        event.target.classList.add("active");

    });

    
});


// About Page JS

var btn  = document.getElementById("readMoreAbout");
btn.addEventListener("click",(e)=>{

    if(btn.innerText === "Read More")
    {
        btn.innerText = "Read Less"
    }
    else if(btn.innerText === "Read Less"){
        btn.innerText = "Read More"
    }

  

});


// Subscibe Us Validation

function validateForm(){

var name = document.forms["Subscribe"]["name"];
var email = document.forms["Subscribe"]["email"];
var phone = document.forms["Subscribe"]["mobile"];
var phoneno = /^\d{10}$/;
if(name.value == "")
{
    
    alert("Please Check Your Name");
    name.focus();
  
    return false;
}
if(email.value == "" || email.value == null || !(email.value.includes(".com"))|| !(email.value.includes("@")))
{
    
    alert("Please Check Your Email");
    email.focus();
    
  
    return false;
}
if( phone.value == "" || !(phone.value.match(phoneno)))
{
    alert("Please Check Your Phone No ");
    phone.focus();
    return false;
}
return true;

}








 