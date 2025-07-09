const questions = [
    {
        question: "When is Ankita's birthday?",
        options: ["21 September", "6 October", "31 December", "9 July"],
        answer: 0
    },
    {
        question: "What is Ankita studying?",
        options: ["Mechanical Engineering", "Fashion Designing", "Computer Science", "Architecture"],
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
        question: "Which social media aesthetic does Ankita love?",
        options: ["Grunge", "Gen Z aesthetic", "Dark academia", "Minimalism"],
        answer: 1
    },
    {
        question: "What was Ankita’s weight the last time she mentioned it?",
        options: ["38 kg", "50 kg", "40 kg", "45 kg"],
        answer: 2
    },
    {
        question: "Where did Ankita go for a chill vacation?",
        options: ["Goa", "Rishikesh", "Manali", "Pathankot"],
        answer: 1
    },
    {
        question: "What’s a personality trait Ankita strongly connects with?",
        options: ["Extroverted", "Loud", "Introverted", "Carefree"],
        answer: 2
    },
    {
        question: "Is she perfect?",
        options: ["yes", "Absolutely yes", "100% yes", "no"],
        answer: 2
    },
    {
        question: "What’s Ankita’s relationship status now?",
        options: ["Single", "In a relationship", "Situationship", "Secret crush"],
        answer: 1
    }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const feedbackEl = document.getElementById("feedback");

function showQuestion() {
    const q = questions[current];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    
    q.options.forEach((option, i) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className = "option-btn";
        btn.onclick = () => selectOption(i);
        optionsEl.appendChild(btn);
    });
}

function selectOption(index) {
    const correct = questions[current].answer;

    if (index === correct) {
        score++;
        feedbackEl.textContent = "✅ Correct yayyy!";
        feedbackEl.style.color = "#28a745"; // green
    } else {
        feedbackEl.textContent = `❌ Wrong! Correct answer is: ${questions[current].options[correct]}`;
        feedbackEl.style.color = "#dc3545"; // red
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
    resultEl.innerHTML = `🎉 You scored <strong>${score} / ${questions.length}</strong><br>` +
        (score === questions.length ? "👑 hehe love yaa" :
        score >= 7 ? "💖 no kisses for you!" :
        score >= 4 ? "😶 what the helly..." :
        "🚨 guu khalo 😤");
}

showQuestion();
