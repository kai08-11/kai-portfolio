// 動態年份
document.getElementById("year").textContent = new Date().getFullYear();

// 打招呼互動
const greetBtn = document.getElementById("greetBtn");
const greetMsg = document.getElementById("greetMsg");
let count = 0;
greetBtn.addEventListener("click", () => {
    count++;
    greetMsg.textContent = `第 ${count} 次按下：嗨，很高興認識你！`;
});



