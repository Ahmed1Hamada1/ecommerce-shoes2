let styleBtn = document.getElementById("BtnScroul");

onscroll = function () {
    if (this.scrollY >500) {
        styleBtn.style.display='block'
    } else {
        styleBtn.style.display = "none";
    }
}

function BtnScroul() {
    scroll({
        top:0,behavior:'smooth'
    })
}