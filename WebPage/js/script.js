const loadingAreaGrey = document.querySelector("#loading");
const loadingAreaGreen = document.querySelector("#loading-screen");
// const loadingText = document.querySelector("#loading p");
const loadingText = document.querySelector("#loading a");

window.addEventListener("load",() => { //windowで"load"されたのを確認したらアロー関数(() => {})の中身を実行して！！
    loadingAreaGrey.animate(
        {
            opacity: [1,0],
            visibility: "hidden",
        },
        {
            duration: 2000,
            // delay: 1200,
            easing: "ease",
            fill: "forwards",
        }
    );


    loadingAreaGreen.animate(
        {
            translate: ["0 100vh","0 0","0 -100vh"],
        },
        {
            duration: 2000,
            // delay: 800,
            easing: "ease",
            fill: "forwards",
        }
    );

    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8 //80%
            },
            {
                opacity: 0,
                offset: 1 //100%
            },
        ],
        {
            duration: 800,//スクリーンが動くときに微かに見えてしまうため、2000→800に変更
            easing: "ease",
            fill: "forwards",
        }
        
    );
});
//----------------------------------------------//
//ボタンをclickしたら画面遷移
// const loadingBtn = document.querySelector("#loading-btn");


// loadingBtn.addEventListener("click",() => {
//     loadingAreaGrey.animate(
//         {//動かす内容
//             opacity: [1,0],
//             visibility: "hidden",
//         },
//         {//動きの詳細
//             duration: 2000,
//             // delay: 1200,
//             easing: "ease",
//             fill: "forwards",
//         }
//     );


//     loadingAreaGreen.animate(
//         {
//             translate: ["0 100vh","0 0","0 -100vh"],
//         },
//         {
//             duration: 2000,
//             // delay: 800,
//             easing: "ease",
//             fill: "forwards",
//         }
//     );

//     loadingText.animate(
//         [
//             {
//                 opacity: 1,
//                 offset: .8 //80%
//             },
//             {
//                 opacity: 0,
//                 offset: 1 //100%
//             },
//         ],
//         {
//             duration: 800,//スクリーンが動くときに微かに見えてしまうため、2000→800に変更
//             easing: "ease",
//             fill: "forwards",
//         }
        
//     );
//     });


//---------------------------------------------------------------------------//
const mainImage = document.querySelector(".gallery-image img");
const thumbImages = document.querySelectorAll(".gallery-thumbnails img");

thumbImages.forEach((thumbImage) => {
    thumbImage.addEventListener("mouseover",(event) => {
        mainImage.src = event.target.src;
        mainImage.animate({opacity: [0,1]}, 800);
    });
});

//練習
console.log(thumbImages);