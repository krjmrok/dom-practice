const text = document.querySelector("#text");
const count = document.querySelector("#count");


text.addEventListener("keyup",() => {
    count.textContent = text.value.length;
    const textLength = text.value.length;

    if (textLength === 777) {count.style.color = "gold";
    }else if (textLength > 200) {count.style.color = "blue";
    }else if (textLength > 100) {count.classList.add("alert");
    }else {count.classList.remove("alert");
    }});

/*「"文字列".length;」👈chromeでコンソールに直打ちすると3で返してくれる。
「[..."😊"].length」で1と返してくれる。👈上と同じように書くと上手く返してくれない場合。*/