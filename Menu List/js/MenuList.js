const menu = document.querySelector("#menu");

const lists = [
    {
        name: "お好み焼き",
        img: "お好み焼き.jpg",
        price: 1000,
    },
    {
        name: "ざるそば",
        img: "ざるそば定食.jpg",
        price: 1200,
    },
    {
        name: "スタミナ定食",
        img: "スタミナ定食.jpg",
        price: 750,
    },
    {
        name: "トンカツ定食",
        img: "トンカツ定食.jpg",
        price: 800,
    },
    {
        name: "ラーメン",
        img: "ラーメン.jpg",
        price: 1200,
    },
    {
        name: "唐揚げ定食",
        img: "唐揚げ定食.jpg",
        price: 1000,
    },
];

for (let i = 0 ; i < lists.length; i++ ) {
    const {name, img, price} = lists[i];//👈分割代入
    const content = `<div><img src="images/${img}" alt=""><h2>${name}<h2><p>${price}円</p></div>`;
    menu.insertAdjacentHTML("beforeend",content); //insertAdjacentHTMLを使ってHTMLとして表示させている。
}

//--------------------------------------------------------------------------//

// const menu = document.querySelector("#menu");

// const content = `<div><img src="images/唐揚げ定食.jpg" alt=""></div>`;
// menu.textContent = content;
// //HTMLの行がそのまま出力されてしまう。

//--------------------------------------------------------------------------//

// const menu = document.querySelector("#menu");

// const lists = [
//     "お好み焼き.jpg",
//     "ざるそば定食.jpg",
//     "スタミナ定食.jpg",
//     "トンカツ定食.jpg",
//     "ラーメン.jpg",
//     "唐揚げ定食.jpg",
// ];
// console.log(lists.length);

// for(let i = 0; i < lists.length; i++){
//     const content = `<div><img src="images/${lists[i]}" alt=""></div>`;
//     menu.insertAdjacentHTML("beforeend", content);
// }

//--------------------------------------------------------------------------//

// //letで再代入!!
// let letName = "マナ";
// letName = "メアリー"//👈再代入している
// console.log(letName);


// //constで再代入!!
// const constName = "大本";
// // constName = "高橋";//👈定数を書き換えようとしてる。(エラー文：Uncaught TypeError: Assignment to constant variable.at MenuList.js:79:11このエラーを分析)
// console.log(constName);

// //constを使う理由を覚えること！！

//--------------------------------------------------------------------------//

//オブジェクトの情報を取得

// const menu = document.querySelector("#menu");

// const okonomiyaki = {
//     name:"お好み焼き",
//     img:"お好み焼き.jpg",
//     price:1000
// };
// const key = "name";
// console.log(okonomiyaki[key]);

// const lists = [
//     "お好み焼き.jpg",
//     "ざるそば定食.jpg",
//     "スタミナ定食.jpg",
//     "トンカツ定食.jpg",
//     "ラーメン.jpg",
//     "唐揚げ定食.jpg",
// ];


// for(let i = 0; i < lists.length; i++){
//     const content = `<div><img src="images/${lists[i]}" alt=""></div>`;
//     menu.insertAdjacentHTML("beforeend", content);
// }