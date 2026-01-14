function swap_img() {
    img = document.getElementById("swap")
    cur_src = img.src
    img_num = (Number(cur_src[cur_src.length - 5]) + 1) % 2
    img.src = `src/swap_img${img_num}.png`
}