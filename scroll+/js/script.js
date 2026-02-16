// //監視対象が範囲内に現れたら実行する動作
// const showEightSix = (entries) => {
//     const keyframes = {
//         opacity: [0,1],
//         translate: ["200px 0", 0],
//     };
//     entries[0].target.animate(keyframes, 600);
// };

// //監視ロボットの設定
// const carObserver = new IntersectionObserver(showEightSix);

// //#eightSixを監視するように指示
// carObserver.observe(document.querySelector("#eightSix"));

//------------------------------------------------------------//



const showEightSix = (entries) => {
    const keyframes = {
        opacity:[0,1],
        translate: ["200px 0",0],
    };
    const options = {
        duration: 600,
        // rootMargin: "10px",


    };
    entries[0].target.animate(keyframes,options);
};

const carObserver = new IntersectionObserver(showEightSix);

carObserver.observe(document.querySelector("#eightSix"));//監視するように指定

//------------------------------------------------------------//


