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

//forEach文での書き方
// thumbImages.forEach((thumbImage) => {
//     thumbImage.addEventListener("mouseover",(event) => {
//         mainImage.src = event.target.src;
//         mainImage.animate({opacity: [.6,1]}, 500);
//     });
// });

//for文での練習
// for(let i = 0; i < thumbImages.length; i++) {
//     thumbImages[i].addEventListener("mouseover",(event) => {
//         console.log(event.target.src);
//         mainImage.animate({opacity: [0 , 1]}, 500);
//     })
// }

//forEach文での書換え
thumbImages.forEach((thumbImage) => {//forEachでthumbImagesの中身を一つずつthumbImageに代入してくれる
    // console.log(thumbImage.src);//thumbImageのなかのsrcをしていしてコンソールに表示
    thumbImage.addEventListener("mouseover",(event) => {
        mainImage.src = event.target.src;
        mainImage.animate({opacity: [0 , 1]}, 500);
    })
})



//ForEachでの練習
const animals = ["猫","牛","虎","兎"];

//無名関数の場合
// animals.forEach((animal) => {
//     console.log(animal);
// })

//関数名をつける場合
const showAnimal = (animal) => {
    console.log(animal);
};

animals.forEach(showAnimal);