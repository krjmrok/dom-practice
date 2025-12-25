const text = document.querySelector("#colorText");/*👈必ず(#)が必要*/ 
const color = document.querySelector("#colorPicker");

const colorBg = () => {
    document.body.style.backgroundColor = color.value;

    if ( color.value === "#ffffff") {
        text.textContent = `カラーコード：${color.value} (white)`;
    } else if (color.value === "#000000") {
        text.textContent = `カラーコード：${color.value} (black)`;

    }
        
};

color.addEventListener("input",colorBg);

/*return文の練習問題：関数の処理結果（returnの文）を好きなように出せる！！
const message = (name , color) => {
    return `${name}さん、カラーピッカーが${color}に変更されました！`;
}

console.log(message("太郎", color.value));
alert(message("一郎", color.value));

スタイルを指定して文字サイズを変更した！！
document.querySelector("#colorText").style.fontSize = "100px"*/
