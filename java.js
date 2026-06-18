
/* =========================
   FECHA DEL EVENTO
========================= */

const targetDate = new Date(
2026,
6,
10,
18,
30,
0
).getTime();

/* =========================
   CUENTA REGRESIVA
========================= */

function updateCountdown(){
    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance < 0){

        document.getElementById("days").textContent = "99";
document.getElementById("hours").textContent = "12";
document.getElementById("minutes").textContent = "30";
document.getElementById("seconds").textContent = "45";

        return;
    }

    const days = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );

    document.getElementById("days").innerHTML =
    String(days).padStart(2,"0");

    document.getElementById("hours").innerHTML =
    String(hours).padStart(2,"0");

    document.getElementById("minutes").innerHTML =
    String(minutes).padStart(2,"0");

    document.getElementById("seconds").innerHTML =
    String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(
updateCountdown,
1000
);

/* =========================
   MUSICA
========================= */

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener(
"click",
()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML =
        "⏸ Pausar Música";

        playing = true;

    }else{

        music.pause();

        musicBtn.innerHTML =
        "🎵 Música";

        playing = false;

    }

}
);

/* =========================
   CONFETI INICIAL
========================= */

window.addEventListener(
"load",
()=>{

    confetti({

        particleCount:250,

        spread:180,

        origin:{
            y:0.6
        }

    });

}
);

/* =========================
   CONFETI AUTOMATICO
========================= */

setInterval(()=>{

    confetti({

        particleCount:80,

        spread:100,

        startVelocity:40,

        origin:{
            x:Math.random(),
            y:Math.random() * 0.5
        }

    });

},15000);

/* =========================
   ENTRADA SUAVE
========================= */


const container =
document.querySelector(".container");

if(container){

    container.style.opacity="0";
    container.style.transform="translateY(40px)";

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            container.style.transition="all 1s ease";
            container.style.opacity="1";
            container.style.transform="translateY(0)";

        },300);

    });

}

const characters =
document.querySelectorAll('.character');

characters.forEach((item,index)=>{

    item.style.opacity = "0";
    item.style.transform =
    "translateY(40px)";

    setTimeout(()=>{

        item.style.transition =
        ".8s ease";

        item.style.opacity = "1";
        item.style.transform =
        "translateY(0)";

    },index * 200);

});

window.addEventListener("load", () => {

    const music = document.getElementById("music");

    music.play().catch(() => {

        console.log("Autoplay bloqueado");

    });

});