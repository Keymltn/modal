let btn = document.getElementById("btn");
let body = document.getElementById("bo");
let stopBtn = document.getElementById("stop");
let notice = document.getElementById("notice");
let pl = document.getElementById("pl");
let h2El = document.getElementById("cue");
let boxEl = document.getElementById("box");
let push = document.getElementById("push");
let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");
let aw = document.querySelector(".aw");

// LOADING


// let h2Degree = 0;
// let boxW = 0;
// setTimeout(loading, 100);
// function loadps(){
//     if (cue == 100 && boxW == 400) {
//        clearTimeout(loader); 
//     }else{
//         h2Degree = h2Degree + 1;
//         boxW = boxW + 4;
//         h2El.innerText = h2Degree + "%";
//         h2El.style.width = h2Degree + "px";
//     }
// }

// loadps()

// LOADING

let timeoutEl = setTimeout(() => {
    // modal.classList.add('flex-el')
    document.getElementById("modal").style.display = "flex"
    body.classList.add("flow")
}, 5000);

stopBtn.addEventListener("click", () => {
    clearTimeout(timeoutEl)
    notice.style.display = "none";
    aw.style.display = "none";
    pl.innerText = "A'zo bo'lganingiz uchun RAHMAT😁"
})

btn.addEventListener('click' , () => {
    notice.style.display = "none";
    aw.style.display = "none"
    pl.innerText = "Yangi email qilishga harakat qiling!😁"
    document.getElementById("modal").style.display = "none"
})


push.addEventListener('click' , () => {
    localStorage.setItem("names" , JSON.stringify(i1.value))
    localStorage.setItem("years old" , JSON.stringify(i2.value))
    document.getElementById("modal").style.display = "none"
})

