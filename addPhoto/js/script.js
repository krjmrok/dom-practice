// const items = document.querySelectorAll(".img-item");

// for (let i = 0; i < items.length; i++) {
//     const keyframes = {
//         opacity: [0, 1] 
//     };
//     const options = {
//         duration: 600,
//         delay: i * 300,
//         fill: "forwards",
//     };
//     items[i].animate(keyframes, options);
// }

//----------------------------------------------------//

// const items = document.querySelector(".img-item");

// const keyframes = {
//     opacity: [0, 1]
// };
// const options = {
//     duration: 600,
//     fill: "forwards",
// };

// items.animate(keyframes,options);

//----------------------------------------------------//

const items = document.querySelectorAll(".img-item");
//console.log(items);

for (let i = 0; i < items.length; i++) {
    const keyframes = {
        opacity: [0,1],

        //落ちてくるような演出
        rotate: ["5deg", 0],
        scale: [1.1, 1],

        //浮かび上がり
        // translate: ["0 50px", 0],

        //回転
        // rotate: ["x 90deg", 0],

        //ブラー
        // filter: ["blur(20px)", "blur(0)"],
        // filter: ["brightness()"],//😒まぶしいので注意
        // filter: ["saturate(20)"],//マイクラ？？
        filter: ["grayscale(90)"],//昔を演出
    };
    const options = {
        duration: 600,
        delay: i * 300,
        fill: "forwards",
    };
    items[i].animate(keyframes,options)
}