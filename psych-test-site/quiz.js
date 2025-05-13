
const questions = [
  { text: "هل تحلل المواقف قبل اتخاذ قراراتك؟", scores: [2, 1, 0] },
  { text: "هل تؤثر عليك مشاعر الآخرين بسرعة؟", scores: [0, 1, 2] },
  { text: "هل تفضل العزلة أحيانًا؟", scores: [2, 1, 0] },
  { text: "هل تجد صعوبة في الثقة بالناس؟", scores: [2, 1, 0] },
  { text: "هل تتصرف بعقل أكثر من القلب؟", scores: [2, 1, 0] },
  { text: "هل تراجع نفسك كثيرًا بعد كل موقف؟", scores: [1, 2, 0] },
  { text: "هل تهدف إلى الكمال في عملك؟", scores: [2, 1, 0] },
  { text: "هل تحب التغيير والتجديد؟", scores: [0, 1, 2] },
  { text: "هل تخطط لأهدافك بدقة؟", scores: [2, 1, 0] },
  { text: "هل تتفاعل مع المشاكل عاطفيًا؟", scores: [0, 1, 2] },
  { text: "هل تقيم نفسك كثيرًا؟", scores: [2, 1, 0] },
  { text: "هل تحب فهم نفسك أكثر من الآخرين؟", scores: [2, 1, 0] }
];

const options = ["نعم", "أحيانًا", "لا"];
let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.text;
  const answers = document.getElementById("answers");
  answers.innerHTML = "";
  options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      score += q.scores[i];
      nextQuestion();
    };
    answers.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const container = document.getElementById("quiz-container");
  let resultText = "";
  if (score >= 20) {
    resultText = "🌙 النمط: المفكر — تميل إلى التحليل والتأمل العميق.";
  } else if (score >= 12) {
    resultText = "🚀 النمط: المنجز — متوازن، لكن تميل للتنظيم والسعي لتحقيق الأهداف.";
  } else {
    resultText = "❤️ النمط: العاطفي — حساس وتتفاعل مع مشاعر الآخرين بوضوح.";
  }
  container.innerHTML = "<h2>النتيجة:</h2><p class='result'>" + resultText + "</p>";
}

showQuestion();
