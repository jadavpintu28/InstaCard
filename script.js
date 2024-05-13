let h5 = document.querySelector("h5");
let btn = document.querySelector(".btn");

let check = 0;

btn.addEventListener("click", function ()  {
    if(check == 0){
        h5.innerHTML = "friends";
        h5.style.color = "green";
        btn.innerHTML = "Follow"

        check = 1
    }else{
        h5.innerHTML = "Stranger";
        h5.style.color = "red";
        btn.innerHTML = "Unfollow"

        check = 0
    }
})