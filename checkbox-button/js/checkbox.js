const isAgreed = document.querySelector("#check");
const catCheck = document.querySelector("#catcheck");
const takenokoCheck = document.querySelector("#takenokocheck");
const btn = document.querySelector("#btn");

/*元*/
// isAgreed.addEventListener("change", () => {
//     btn.disabled = !isAgreed.checked;
// });

/*自分なりの実装😅(クソ長)*/
// isAgreed.addEventListener("change", () => {
//     if (isAgreed.checked) {
//         catCheck.disabled = false;
// }else {
//         catCheck.disabled = true;
//         takenokoCheck.disabled = true;
//         btn.disabled = true;
// }});

// catCheck.addEventListener("change", () => {
//     if (catCheck.checked) {
//         takenokoCheck.disabled = false;
// }else {
//         takenokoCheck.disabled = true;
// }});

// takenokoCheck.addEventListener("change", () => {
//     if (takenokoCheck.checked && catCheck.checked && isAgreed.checked) {
//         btn.disabled = false;
// }else {
//         btn.disabled = true;
// }}); /*これだと長すぎ*/

/*React思考めちゃシンプル*/
const updateState = () => {
    catCheck.disabled = !isAgreed.checked;
    takenokoCheck.disabled = !catCheck.checked;
    btn.disabled = !(isAgreed.checked && catCheck.checked && takenokoCheck.checked);
};

isAgreed.addEventListener("change", updateState);/*updateStateっていう箱にまとめて、true,falseを返してる*/ 
catCheck.addEventListener("change", updateState);
takenokoCheck.addEventListener("change", updateState);