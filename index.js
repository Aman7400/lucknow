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



 