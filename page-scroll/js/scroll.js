const getScrollPercent = () => {

// スクロール量
const scrolled = window.scrollY;

//ページの全体の高さ
const pageHeight = document.documentElement.scrollHeight;

//表示領域の高さ
const viewHeight = document.documentElement.clientHeight;

//スクロールされた割合
const percentage = scrolled / (pageHeight - viewHeight) * 100;

//プログレスバーに幅を指定
document.querySelector("#bar").style.width = `${percentage}%`;
};

window.addEventListener("scroll", getScrollPercent);

//------------------------------------------------------//

// //getScrollPercent関数を呼び出す！！
// const getScrollPercent = () => {

//     console.log("スクロールされました");
// };

// window.addEventListener("scroll",getScrollPercent);

//------------------------------------------------------//

// //スクロール量を取得する
// const getScrollPercent = () => {
//     //スクロール量
//     const scrolled = window.scrollY;
//     console.log(`${scrolled}スクロールされました。`);
// };

// window.addEventListener("scroll",getScrollPercent);

//------------------------------------------------------//

// const getScrollPercent = () => {
//     //スクロール量
//     const scrolled = window.scrollY;
//     console.log(`${scrolled}スクロールされました。`);

//     //ページ全体の高さ
//     const pageHeight = document.documentElement.scrollHeight;

//     //表示領域の高さ
//     const viewHeight = document.documentElement.clientHeight;

//     console.log(`ページの高さ${pageHeight}、表示領域の高さ${viewHeight}`);
// };

// window.addEventListener("scroll",getScrollPercent);

//------------------------------------------------------//

// const getScrollPercent = () => {
//     const scrolled = window.scrollY;

//     const pageHeight = document.documentElement.scrollHeight;

//     const viewHeight = document.documentElement.clientHeight;

//     const percentage = scrolled / (pageHeight - viewHeight) * 100;
//     console.log(`${percentage}％スクロールされました。`);
// }

// window.addEventListener("scroll",getScrollPercent);