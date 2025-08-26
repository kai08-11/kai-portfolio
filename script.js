// 打招呼互動 (❤️增加)
// ==========================
const greetBtn = document.getElementById("greetBtn"); // 取得按鈕
const greetMsg = document.getElementById("greetMsg"); // 顯示訊息的元素
let count = 0; // 按鈕按下次數

greetBtn.addEventListener("click", () => {
    count++; // 每按一次加 1

    if (count > 10) {
        // 第31次以後顯示爆表訊息
        greetMsg.textContent = "❤️❤️爆表了!❤️❤️";
        greetMsg.style.color = "white"; // 設定文字顏色為白色
    } else {
        // 計算要顯示多少個❤️（每10次循環一次）
        let hearts = count % 10;
        if (hearts === 0) hearts = 10; // 第10、20、30次顯示10個
        greetMsg.textContent = "❤️".repeat(hearts);
    }

    console.log(`按下次數: ${count}, 顯示文字: ${greetMsg.textContent}`);
});

// 取得按鈕與彈出視窗元素
const lineQRBtn = document.getElementById("lineQRBtn");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

// 點擊按鈕時顯示彈出視窗
lineQRBtn.addEventListener("click", (e) => {
    e.preventDefault(); // 防止預設行為
    popup.style.display = "flex"; // 顯示彈出視窗
});

// 點擊關閉按鈕時隱藏彈出視窗
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// 點擊彈出視窗背景時隱藏視窗
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

// 學經歷下拉選單互動
// ==========================
const select = document.getElementById("experienceSelect"); // 取得下拉選單
const details = document.querySelectorAll(".exp-detail"); // 取得所有經歷內容

// 預設隱藏所有內容
details.forEach(d => d.style.display = "none");

// 當選單改變時
select.addEventListener("change", () => {
    // 先隱藏所有內容
    details.forEach(d => d.style.display = "none");

    // 取得選中的值
    const value = select.value;
    if (value) {
        // 顯示對應的經歷
        document.getElementById(value).style.display = "block";
    }
});