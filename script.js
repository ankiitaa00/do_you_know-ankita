const questions = [
    {
        question: "When is Ankita's birthday?",
        options: ["21 September", "5 October", "31 December", "9 July"],
        answer: 0
    },
    {
        question: "What is Ankita studying?",
        options: ["Mechanical", "Fashion", "Computer Science", "Architecture"],
        answer: 2
    },
    {
        question: "Which programming language has she recently learned?",
        options: ["Java", "Kotlin", "Python", "JavaScript"],
        answer: 1
    },
    {
        question: "What is Ankita's height?",
        options: ["5.4 ft", "5.0 ft", "5.2 ft", "5.5 ft"],
        answer: 2
    },
    {
        question: "Which aesthetic does Ankita love?",
        options: ["Grunge", "Gen Z", "Dark academia", "Minimalism"],
        answer: 1
    }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
    const q = questions[current];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((option, i) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className = "option-btn";
        btn.onclick = () => selectOption(i);
        optionsEl.appendChild(btn);
    });
}

function selectOption(index) {
    if (index === questions[current].answer) {
        score++;
        alert("✅ Correct!");
    } else {
        alert("❌ Wrong!");
    }
    nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
    current++;
    if (current < questions.length) {
        showQuestion();
        nextBtn.style.display = "none";
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById("quiz-box").style.display = "none";
    resultEl.innerHTML = `🎉 You got ${score} out of ${questions.length}!<br>${
        score === questions.length ? "You're Ankita's bestie 💖" : score >= 3 ? "Not bad 😄" : "Fake friend alert! 🚨"
    }`;
}

showQuestion();
