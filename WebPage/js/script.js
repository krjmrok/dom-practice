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
//スライドメニュー
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 1000,//デフォだと1400
  easing: 'ease',
  fill: 'forwards',
};
//menuを開く
// menuOpen.addEventListener("click", () => {
//     menuPanel.animate({translate: ["100vw", 0]}, menuOptions);
//     menuItems.forEach((menuItem, index) => {
//         menuItem.animate(
//             {
//                 opacity: [0, 1],
//                 translate: ["2rem", 0],
//             },
//             {
//                 duration: 2400,
//                 delay: 300 * index,
//                 easing: "ease",
//                 fill: "forwards",
//             }
//         );
//     });
// });

// //menuを閉じる
// menuClose.addEventListener("click", () => {
//     menuPanel.animate({translate: [0, "100vw"]}, menuOptions);
//     menuItems.forEach((menuItem) => {
//         menuItem.animate({opacity: [1, 0]}, menuOptions);
//     });
// });

//練習
menuOpen.addEventListener("click", () => {
    // console.log("メニューを開く");
    menuPanel.animate({translate: ["100vw", 0]}, menuOptions);

    //リンクを順番に表示
    menuItems.forEach((menuItem,index) => {
        // console.log(`${index}番目のリスト`);
        menuItem.animate(
            {
                opacity: [0, 1],
                translate: ["2rem", 0],
            },
            {
                duration: 2000,
                delay: 300 * index,
                easing: "ease",
                fill: "forwards",
            }
        );
         
    });
});

menuClose.addEventListener("click", () => {
        menuPanel.animate({translate: [0, "100vw"]}, menuOptions);
        menuItems.forEach((menuItem) => {
            menuItem.animate({opacity: [1, 0]}, menuOptions);
        })
    });








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

//スクロールで要素を表示
//監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ["blue(.4rem)", "blue(0)"],
                    translate: ["0 4rem", 0],
                },
                {
                    duration: 2000,
                    easing: "ease",
                    fill: "forwards",
                }
            );
            //一度ふわっと表示されたら監視をやめる。
            obs.unobserve(entry.target);
        }
    });
};

//監視設定
const fadeObserver = new IntersectionObserver(animateFade);

//.fadeinを監視するように指示
const fadeElements = document.querySelectorAll(".fadein");
fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});

