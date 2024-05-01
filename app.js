const accordion = document.getElementsByClassName('container');

// console.log(accordion.length);


for (let i = 0; i < accordion.length; i++) {
    // console.log(i);
    accordion[i].addEventListener('click',function(){
        // console.log("hiii")
        this.classList.toggle("active");
    })
}