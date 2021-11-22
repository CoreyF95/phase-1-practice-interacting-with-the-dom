const counter = document.getElementById("counter")
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const comment = document.getElementById("comment-input");
const submit = document.getElementById("submit");
const likes = document.querySelector("ul.likes");
const list = document.getElementById("list");
let seconds = 0;
let heartClicks = 0;

let heartZero = () => {
    heartClicks = 0;
}

function timer() {
    if (submit.disabled === false) {
        seconds += 1;
        counter.textContent = seconds;
    } else {
        seconds += 0;
        counter.textContent = seconds;
    }
}

const heartReset = setInterval(heartZero, 1000);
const timeElapsed = setInterval(timer, 1000);



let heartCounter =
    heart.addEventListener("click", () => {
        return heartClicks += 1;
    });



minus.addEventListener("click", () => {
    counter.textContent = seconds -= 1;
})



plus.addEventListener("click", () => {
    counter.textContent = seconds += 1;
})

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let newComment = document.createElement("p");
    document.getElementById("list").appendChild(newComment);
    newComment.textContent = comment.value;
    comment.value = "";


})

pause.addEventListener("click", () => {
    if (pause.textContent === "resume") {
        pause.textContent = "pause";
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
        timer();
    } else {
        pause.textContent = "resume";
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
        counter.textContent = seconds.valueOf();
    }
})

heart.addEventListener("click", () => {
    if (likes.children[likes.children.length - 1] !== undefined) {
        likes.children[likes.children.length - 1].textContent = `${seconds} has been liked ${heartClicks} times`;
    } else {
        let like = document.createElement("li");
        like.textContent = `${seconds} has been liked ${heartClicks} times`
        likes.appendChild(like);
    }
})
