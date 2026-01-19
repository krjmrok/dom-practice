const menu = document.querySelector("#menu");

const lists = [
    {
        name: "お好み焼き",
        img: "お好み焼き.jpg",
        price: 800,
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
    const {name, img, price} = lists[i];
    const content = `<div><img src="images/${img}" alt=""><h2>${name}<h2><p>${price}円</p></div>`;
    menu.insertAdjacentHTML("beforeend",content); //insertAdjacentHTMLを使ってHTMLとして表示させている。
}

//--------------------------------------------------------------------------//

// const menu = document.querySelector("#menu");

// const content = `<div><img src="images/唐揚げ定食.jpg" alt=""></div>`;
// menu.textContent = content;
// //HTMLの行がそのまま出力されてしまう。