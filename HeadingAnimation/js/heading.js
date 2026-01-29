// const heading = document.querySelector("#heading");

// const keyframes = {
//     opacity: [0,1],
//     // transform: ["translateY(100px)","translateY(0)"] ,
//     translate: ["0 50px", 0],
// };
// const options = {
//     duration: 2000,
//     easing: "ease",
// };

// heading.animate(keyframes,options);


//---------------------------------------------//

// const heading = document.querySelector("#heading");

// const keyframes = {
//     opacity: [0,1],
//     translate: ["0 50px",0]
// };

// heading.animate(keyframes,2000);

//---------------------------------------------//

// //動きの詳細を加える
// const heading = document.querySelector("#heading");

// const keyframes = {
//     opacity: [0,1],
//     // translate: ["0 50px", 0],
//     rotate: ["x 360deg" , 0],
// };
// const options = {
//     duration: 2000,//再生時間：1秒の場合「1000」
//     easing: "ease",//開始時と終了時は緩やかに変化
//     // easing: "linear",//一定の速度で変化
//     // easing: "ease-in",//最初はゆっくりだんだん速く
//     // easing: "ease-out",//最初は速く、だんだんゆっくり

//     // delay: 5000,//５秒後に再生
//     direction: "normal",
//     // direction: "alternate",//奇数回で通常、偶数回で逆方向に再生
//     // direction: "reverse",//逆方向に再生
//     iterations: 4,//4回繰り返す。回数「Infinity」👈（最初大文字）を指定し、無限ループ
//     // direction: "reverse",//逆方向に再生
// };

// heading.animate(keyframes,options)

//-----------------------------------------------------------------//

// //色が変化する見出し
// const heading = document.querySelector("#heading");

// const keyframes = {
//     color: ["#f66","#fc2","#0c6","#0bd"]
// };
// const options = {
//     duration: 8000,
//     direction: "alternate",
//     iterations: Infinity,
// };

// heading.animate(keyframes,options);//成果物の内容に組み込みたい！！

//-----------------------------------------------------------------//

// //背景が伸びる見出し
// const heading = document.querySelector("#heading");

// const keyframes = {
//     color: ["transparent","#fff"],
//     backgroundPosition: ["100% 0%","0% 0%"],
// };
// const options = {
//     duration: 1000,
//     easing: "ease",
// };

// heading.animate(keyframes,options);

//ふよふよ動く見出し
const keyframes = {
    borderRadius: [
        "20% 50% 50% 70%/50% 50% 70% 50%",
        "50% 20% 50% 50%/40% 40% 60% 60%",
        "50% 40% 20% 40%/40% 50% 50% 80%",
        "50% 50% 50% 20%/40% 40% 60% 60%",
    ],
};
const options = {
    duration: 8000,
    direction: "alternate",
    iterations: Infinity,
};

heading.animate(keyframes,options);


// document.querySelector   // DOM API
// heading.animate          // Web Animations API
// CSS transform            // CSS仕様（値として使用）
