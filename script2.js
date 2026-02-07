let ques = document.querySelector(".ques")
let next = document.querySelector(".next")
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")
let option4 = document.querySelector("#option4")
let options = document.querySelectorAll(".options")
let scoree = document.querySelector(".score")
let box = document.querySelector(".box")
let submit = document.querySelector(".submit")
let option = document.querySelector(".option")
let buttonss = document.querySelector(".buttonss")
let heading = document.querySelector(".heading")
let start = document.querySelector(".start")
let hh = document.querySelector(".hh")
let index = 0;

let arr = ["1. Which is the largest planet in our Solar System?", "2. Who is known as the “Father of the Indian Constitution”?", "3. Which gas is most abundant in the Earth's atmosphere", "4. What is the national animal of India?"]

let q = [
    {
        option: ["Earth", "mars", "pluto", "jupiter"],
        correct: 4
    },
    {
        option: ["mahatma gandhi", " narendrea modi ", "br ambedkar", "pranav marke"],
        correct: 3
    },
    {
        option: ["iodine", "co2", "nitrogen", "oxygen"],
        correct: 3
    },
    {
        option: ["lion", "tiger", "dog", "cat"],
        correct: 2
    }
]


//taake answer from the user 
let answerindex = []
function takeanswer() {
    options.forEach((opt, i) => {
        opt.addEventListener("click", () => {
            answerindex[index - 1] = i + 1;

        })
    })
}

function putqandans() {
    ques.innerHTML = arr[index];
    option1.innerHTML = q[index].option[0]
    option2.innerHTML = q[index].option[1]
    option3.innerHTML = q[index].option[2]
    option4.innerHTML = q[index].option[3]
}


start.addEventListener("click", () => {
    options.forEach(element => {
        element.style.display = "flex"
    });
    putqandans()
    next.style.display = "flex"
    start.style.display = "none"
    takeanswer()
    index++

})


next.addEventListener("click", () => {

    if (index < (arr.length - 1)) {
        if (answerindex[index - 1]) {
            options.forEach(element => {
                element.style.display = "flex"


            });

            next.innerHTML = "next"
            putqandans()
            takeanswer()
            index++;
        }
        else {
            alert("u havent select")
        }

    }
    else if (index == (arr.length - 1)) {
        if (answerindex[index - 1]) {


            submit.style.display = "flex"
            options.forEach(element => {
                element.style.display = "flex"
            });

            next.innerHTML = "next"
            putqandans()
            takeanswer()
            index++;
            next.style.display = "none"
            next.disabled = true
        }
        else {
            alert("u havent select")
        }
    }
    else {
        box.innerHTML = `your score is ${score} `
    }
})

submit.addEventListener("click", () => {
    console.log(answerindex)
    checkanswer()
    ques.style.display = "none"
    option.style.display = "none"
    buttonss.style.display = "none"
    heading.style.fontSize="4vh"
    heading.innerHTML = `your score is ${score} `
    hh.style.display = "block"
    hh.innerHTML="YOUR WRONG QUESTIONS AND THEIR CORRECT ANSWER ARE"
      
    for (let i = 0; i < checked.length; i++) {
    let aa = document.createElement("div")
    aa.textContent = ` ${checked[i]} Answer:${ansss[i]}`
    box.appendChild(aa)
        
    }

 


    console.log(checked)
    console.log(score)
})
let checked = []
let ansss = []
let score = 0;
function checkanswer() {
    for (let i = 0; i < answerindex.length; i++) {
        if (answerindex[i] == q[i].correct) {
            score++;
        }
        else {
            checked.push(arr[i])
            ansss.push(q[i].option[q[i].correct - 1])
        }

    }

    return score
}



