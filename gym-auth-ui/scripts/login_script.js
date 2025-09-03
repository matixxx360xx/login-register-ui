// Function that changes the background image every 6 seconds
let i = 0;
function changeImageEvery6s(){
    let tab = ["pexels-anush-1431282","pexels-anush-1431283"];
    setInterval(() => {
            document.getElementById("side-image").style.backgroundImage = "url('../images/" + tab[i] + ".jpg')";
            i = (i + 1) % tab.length;
    }, 6000)
}

// Function that toggles light/dark mode and saves the choice in localStorage
function light_dark_mode(){
    const img = document.getElementById("switch-light");
    const wrapper = document.querySelector(".wrapper-login");
    const motivational = document.querySelector(".motivational-text");
    const anchor = document.querySelectorAll("a");
    

    anchor.forEach(v => v.classList.toggle("dark"));
    wrapper.classList.toggle("dark");
    motivational.classList.toggle("dark");
    

    if(wrapper.classList.contains("dark")){
        img.src = "https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg";
        localStorage.setItem("darkMode", "true");
    }else{
        img.src = "https://upload.wikimedia.org/wikipedia/commons/6/66/Antu_applications-education-preschool.svg";
        localStorage.setItem("darkMode", "false");
    }
}

// Function that loads dark mode based on the value from localStorage
function load_dark_mode(){
    const img = document.getElementById("switch-light");
    const wrapper = document.querySelector(".wrapper-login");
    const motivational = document.querySelector(".motivational-text");
    const anchor = document.querySelectorAll("a");

    if (localStorage.getItem("darkMode") === "true") {
        wrapper.classList.add("dark");
        motivational.classList.add("dark");
        anchor.forEach(a => a.classList.add("dark"));
        img.src = "https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg";
    }
}

// Function that toggles the password visibility (show/hide) and changes the icon accordingly
function toggle_password(icon){
     const input = icon.previousElementSibling;

    if(input.type === "password"){
        input.type = "text";
        icon.src = "https://www.svgrepo.com/show/380010/eye-password-show.svg";
    }else{
        input.type = "password";
        icon.src = "https://www.svgrepo.com/show/380007/eye-password-hide.svg";
    }
}
   


// Function that runs after the page loads, initializes the slider and dark mode
window.onload = function(){
    changeImageEvery6s();
    load_dark_mode();
};
