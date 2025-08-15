// 動態年份
document.getElementById("year").textContent = new Date().getFullYear();

// 打招呼互動
const greetBtn = document.getElementById("greetBtn");
const greetMsg = document.getElementById("greetMsg");

let count = 0;

greetBtn.addEventListener("click", () => {
    count++; // 每次按鈕加 1

    if (count > 30) {
        greetMsg.textContent = "❤️❤️爆表了!❤️❤️";
    } else {
        // 計算顯示❤️數量（1~10 循環）
        let hearts = count % 10;
        if (hearts === 0) hearts = 10; // 第10、20、30次顯示10個
        greetMsg.textContent = "❤️".repeat(hearts);
    }

    console.log(`按下次數: ${count}, 顯示文字: ${greetMsg.textContent}`);
});
