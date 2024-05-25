const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2") 
const countLikes1 = document.getElementById("countLike1")
const countLikes2 = document.getElementById("countLike2")

function hitLikes1() {
    let totalLikes1:number = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",hitLikes1)
