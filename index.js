function swap_img() {
    img = document.getElementById("swap")
    cur_src = img.src
    img_num = (Number(cur_src[cur_src.length - 5]) + 1) % 2
    img.src = `src/swap_img${img_num}.png`
}

function scan_contents() {
    message = document.body.innerHTML
    alert(message)
}

function change_text() {
    text = document.getElementById("change_p")
    text.innerHTML = text.innerHTML.split("").reverse().join("")
}

function change_vis() {
    text = document.getElementById("change_v")
    if (text.style.display == "inline") {
        text.style.display = "none"
    }
    else {
        text.style.display = "inline"
    }
}

function increment_c() {
    counter = document.getElementById("counter")
    counter.innerHTML = Number(counter.innerHTML) + 1
    counter.classList.add("spin")
    
    counter.addEventListener("animationend", () => {
        counter.classList.remove("spin")
    })
}