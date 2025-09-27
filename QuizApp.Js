// ===============================
// Quiz data: pools (≥ 10 each). App draws 10 per round.
// After a round finishes you can choose Next Round (same category) which loads a different set.
// You may also pick a different category before starting.
// ===============================

const categoryPools = {
    HTML: [
        { q: "What does HTML stand for?", a: [{ t: "Hyper Text Markup Language", c: true }, { t: "Home Tool Markup Language", c: false }, { t: "Hyperlinks and Text Markup Language", c: false }, { t: "Hyperlinking Text Mark Language", c: false }] },
        { q: "Which tag creates a new paragraph?", a: [{ t: "<p>", c: true }, { t: "<break>", c: false }, { t: "<para>", c: false }, { t: "<paragraph>", c: false }] },
        { q: "Which attribute is used to create a link?", a: [{ t: "href", c: true }, { t: "src", c: false }, { t: "link", c: false }, { t: "ref", c: false }] },
        { q: "Which tag is used for the largest heading?", a: [{ t: "<h1>", c: true }, { t: "<h6>", c: false }, { t: "<head>", c: false }, { t: "<header>", c: false }] },
        { q: "What element is used for an ordered list?", a: [{ t: "<ol>", c: true }, { t: "<ul>", c: false }, { t: "<li>", c: false }, { t: "<list>", c: false }] },
        { q: "How do you add a comment in HTML?", a: [{ t: "<!-- comment -->", c: true }, { t: "// comment", c: false }, { t: "/* comment */", c: false }, { t: "' comment", c: false }] },
        { q: "Which attribute adds alternate text to an image?", a: [{ t: "alt", c: true }, { t: "title", c: false }, { t: "caption", c: false }, { t: "text", c: false }] },
        { q: "Which tag is self-closing?", a: [{ t: "<img>", c: true }, { t: "<div>", c: false }, { t: "<section>", c: false }, { t: "<article>", c: false }] },
        { q: "Which tag contains table rows?", a: [{ t: "<tr>", c: true }, { t: "<td>", c: false }, { t: "<th>", c: false }, { t: "<table>", c: false }] },
        { q: "What does the <a> tag define?", a: [{ t: "A hyperlink", c: true }, { t: "An anchor point only", c: false }, { t: "An audio element", c: false }, { t: "A button", c: false }] },
        { q: "Which input type submits data without a visible field?", a: [{ t: "hidden", c: true }, { t: "text", c: false }, { t: "submit", c: false }, { t: "button", c: false }] },
        { q: "Which attribute specifies the language of the page?", a: [{ t: "lang", c: true }, { t: "type", c: false }, { t: "charset", c: false }, { t: "language", c: false }] }
    ],

    CSS: [
        { q: "What does CSS stand for?", a: [{ t: "Cascading Style Sheets", c: true }, { t: "Computer Style Sheets", c: false }, { t: "Creative Style Sheets", c: false }, { t: "Colorful Style Sheets", c: false }] },
        { q: "Which property changes text color?", a: [{ t: "color", c: true }, { t: "font-color", c: false }, { t: "text-color", c: false }, { t: "foreground", c: false }] },
        { q: "Which property adds space inside an element?", a: [{ t: "padding", c: true }, { t: "margin", c: false }, { t: "gap", c: false }, { t: "spacing", c: false }] },
        { q: "How do you make text bold?", a: [{ t: "font-weight: bold;", c: true }, { t: "text-style: bold;", c: false }, { t: "font: bold;", c: false }, { t: "text-weight: 700;", c: false }] },
        { q: "Which display value lets items flow inline?", a: [{ t: "inline", c: true }, { t: "block", c: false }, { t: "flex", c: false }, { t: "grid", c: false }] },
        { q: "Which unit is relative to the root font-size?", a: [{ t: "rem", c: true }, { t: "px", c: false }, { t: "em", c: false }, { t: "vh", c: false }] },
        { q: "How to center an element horizontally with margin?", a: [{ t: "margin: 0 auto;", c: true }, { t: "margin-left: center;", c: false }, { t: "align:center;", c: false }, { t: "margin: auto 0;", c: false }] },
        { q: "Which property controls element opacity?", a: [{ t: "opacity", c: true }, { t: "visibility", c: false }, { t: "display", c: false }, { t: "transparency", c: false }] },
        { q: "Which property creates flexible layouts?", a: [{ t: "display: flex;", c: true }, { t: "display: block;", c: false }, { t: "flexible: true;", c: false }, { t: "layout: flex;", c: false }] },
        { q: "Which pseudo-class for hovering?", a: [{ t: ":hover", c: true }, { t: ":active", c: false }, { t: ":focus", c: false }, { t: ":visited", c: false }] },
        { q: "Which property sets background gradient?", a: [{ t: "background: linear-gradient(...)", c: true }, { t: "background-image: gradient(...)", c: false }, { t: "bg-gradient:", c: false }, { t: "gradient:", c: false }] },
        { q: "How to select all inside a container (.card)?", a: [{ t: ".card *", c: true }, { t: ".card all", c: false }, { t: ".card > all", c: false }, { t: "* .card", c: false }] }
    ],

    JavaScript: [
        { q: "Which symbol starts a single-line comment?", a: [{ t: "//", c: true }, { t: "/*", c: false }, { t: "<!--", c: false }, { t: "#", c: false }] },
        { q: "Which method adds element at array end?", a: [{ t: "push()", c: true }, { t: "pop()", c: false }, { t: "shift()", c: false }, { t: "unshift()", c: false }] },
        { q: "How do you declare a constant?", a: [{ t: "const x = 5;", c: true }, { t: "let x = 5;", c: false }, { t: "var x = 5;", c: false }, { t: "constant x = 5;", c: false }] },
        { q: "Which returns 'true' if value is NaN?", a: [{ t: "isNaN(value)", c: true }, { t: "Number.isInteger(value)", c: false }, { t: "isFinite(value)", c: false }, { t: "typeof value === 'NaN'", c: false }] },
        { q: "Which function parses JSON string?", a: [{ t: "JSON.parse()", c: true }, { t: "JSON.stringify()", c: false }, { t: "parseJSON()", c: false }, { t: "JSON.toObject()", c: false }] },
        { q: "Which is block-scoped variable?", a: [{ t: "let", c: true }, { t: "var", c: false }, { t: "function", c: false }, { t: "global", c: false }] },
        { q: "Which method returns substring?", a: [{ t: "slice()", c: true }, { t: "substr()", c: false }, { t: "extract()", c: false }, { t: "substringOf()", c: false }] },
        { q: "How to attach click handler in JS (vanilla)?", a: [{ t: "element.addEventListener('click', handler)", c: true }, { t: "element.onclick = handler()", c: false }, { t: "attach('click', handler)", c: false }, { t: "element.listen('click')", c: false }] },
        { q: "Which keyword creates a class?", a: [{ t: "class", c: true }, { t: "struct", c: false }, { t: "object", c: false }, { t: "type", c: false }] },
        { q: "Which returns a Promise?", a: [{ t: "async function returns Promise", c: true }, { t: "function() {}", c: false }, { t: "return value", c: false }, { t: "setTimeout()", c: false }] },
        {
            q: "How to convert string '5' to number?", a: [{ t: "Number('5')", c: true }, { t: "parseInt('5')", c: true }, { t: "+'5'", c: true }, { t: "All above", c: false }],
            // Note: multiple correct answers allowed, but our UI treats boolean single-correct; keep primary true on Number()
        },
        { q: "Which array helper creates new array?", a: [{ t: "map()", c: true }, { t: "forEach()", c: false }, { t: "find()", c: false }, { t: "reduce()", c: false }] }
    ],

    "Prompt Engineering": [
        { q: "What is a 'prompt' in LLM context?", a: [{ t: "Input text/instructions for the model", c: true }, { t: "Model's output", c: false }, { t: "A dataset", c: false }, { t: "A token only", c: false }] },
        { q: "Which helps get more reliable LLM outputs?", a: [{ t: "Clear instructions + examples", c: true }, { t: "Short vague prompts", c: false }, { t: "Random tokens", c: false }, { t: "No punctuation", c: false }] },
        { q: "What is 'chain-of-thought' prompting?", a: [{ t: "Asking model to show reasoning steps", c: true }, { t: "A dataset type", c: false }, { t: "Model fine-tuning", c: false }, { t: "A tokeniser", c: false }] },
        { q: "Why use roles (system/user) in prompts?", a: [{ t: "To set behavior & context", c: true }, { t: "To change model weights", c: false }, { t: "To reduce tokens", c: false }, { t: "To encrypt data", c: false }] },
        { q: "What improves factual accuracy?", a: [{ t: "Provide context & sources", c: true }, { t: "Use shorter prompts only", c: false }, { t: "Avoid specifying format", c: false }, { t: "Use emojis", c: false }] },
        { q: "What is 'prompt templating'?", a: [{ t: "Reusable prompt with placeholders", c: true }, { t: "A model architecture", c: false }, { t: "A tokenizer feature", c: false }, { t: "A dataset", c: false }] },
        { q: "What is 'zero-shot' prompting?", a: [{ t: "No examples given", c: true }, { t: "One example given", c: false }, { t: "Many examples given", c: false }, { t: "Model fine-tuned", c: false }] },
        { q: "What is 'few-shot' prompting?", a: [{ t: "Provide a few examples in prompt", c: true }, { t: "Fine-tune model", c: false }, { t: "Use system role", c: false }, { t: "Use chain-of-thought", c: false }] },
        { q: "Why specify output format (JSON/table)?", a: [{ t: "Easier parsing & validation", c: true }, { t: "Shorter prompt", c: false }, { t: "Faster model", c: false }, { t: "Reduces tokens", c: false }] },
        { q: "What is 'temperature' in LLMs?", a: [{ t: "Controls randomness in outputs", c: true }, { t: "Model speed", c: false }, { t: "Token limit", c: false }, { t: "A dataset", c: false }] }
    ],

    Angular: [
        { q: "Which language is used to write Angular apps?", a: [{ t: "TypeScript", c: true }, { t: "Java", c: false }, { t: "Python", c: false }, { t: "Ruby", c: false }] },
        { q: "Which decorator marks a component?", a: [{ t: "@Component", c: true }, { t: "@Directive", c: false }, { t: "@Injectable", c: false }, { t: "@NgModule", c: false }] },
        { q: "Which file holds metadata for module?", a: [{ t: "app.module.ts", c: true }, { t: "main.ts", c: false }, { t: "index.html", c: false }, { t: "component.ts", c: false }] },
        { q: "Which is Angular's router directive?", a: [{ t: "<router-outlet>", c: true }, { t: "<ng-router>", c: false }, { t: "<router-view>", c: false }, { t: "<outlet>", c: false }] },
        { q: "How to bind property in template?", a: [{ t: "[property] = value", c: true }, { t: "{property}", c: false }, { t: "(property) = value", c: false }, { t: "#property", c: false }] },
        { q: "Which lifecycle hook runs after view init?", a: [{ t: "ngAfterViewInit", c: true }, { t: "ngOnInit", c: false }, { t: "ngOnDestroy", c: false }, { t: "ngDoCheck", c: false }] },
        { q: "How to create a service injectable root?", a: [{ t: "@Injectable({ providedIn: 'root' })", c: true }, { t: "@Service()", c: false }, { t: "new Service()", c: false }, { t: "@InjectableRoot()", c: false }] },
        { q: "Which directive repeats items?", a: [{ t: "*ngFor", c: true }, { t: "*ngIf", c: false }, { t: "[ngClass]", c: false }, { t: "*ngSwitch", c: false }] },
        { q: "Which pipe transforms date format?", a: [{ t: "date", c: true }, { t: "formatDate", c: false }, { t: "time", c: false }, { t: "datetime", c: false }] },
        { q: "Which CLI command creates a new component?", a: [{ t: "ng generate component name", c: true }, { t: "ng new component name", c: false }, { t: "ng add component", c: false }, { t: "ng make component", c: false }] }
    ]
};

// DOM refs
const categorySelect = document.getElementById("category-select");
const startRoundBtn = document.getElementById("start-round-btn");
const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const nextRoundBtn = document.getElementById("next-round-btn");
const chooseCatBtn = document.getElementById("choose-cat-btn");
const categoryLabel = document.getElementById("category");
const qNumEl = document.getElementById("q-num");
const qTotalEl = document.getElementById("q-total");

// state
const categoryNames = Object.keys(categoryPools);
let currentCategory = null;
let currentRoundQuestions = []; // array of {index, item}
let currentQuestionIndex = 0;
let score = 0;
let lastRoundIndexSet = {}; // store indexes used in previous round per category

// populate category select
function populateCategorySelect() {
    categoryNames.forEach(name => {
        const opt = document.createElement("option");
        opt.value = name;
        opt.textContent = name;
        categorySelect.appendChild(opt);
    });
}
populateCategorySelect();

// helpers
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// pick 10 indexes that try to avoid repeating the immediate last round's indexes
function pickRoundIndexes(poolLength, category) {
    const want = 10;
    // create array of all indexes
    const all = Array.from({ length: poolLength }, (_, i) => i);
    const lastSet = new Set(lastRoundIndexSet[category] || []);
    // prefer indexes not in lastSet
    const candidates = all.filter(i => !lastSet.has(i));
    shuffleArray(candidates);
    const picked = [];

    // take from candidates first
    while (picked.length < want && candidates.length) {
        picked.push(candidates.pop());
    }
    // if not enough, fill from others (including lastSet)
    const remaining = all.filter(i => !picked.includes(i));
    shuffleArray(remaining);
    while (picked.length < want && remaining.length) {
        picked.push(remaining.pop());
    }
    // finally, if pool < want, allow duplicates (edge-case)
    return picked.slice(0, want);
}

// prepare a round (choose 10 questions)
function prepareRound(category) {
    const pool = categoryPools[category];
    if (!pool || pool.length === 0) return [];

    const poolLength = pool.length;
    // ensure pickRoundIndexes works even if pool < 10
    const indexes = pickRoundIndexes(poolLength, category);
    lastRoundIndexSet[category] = indexes.slice(); // remember this set
    // map them to objects {index, item}
    const round = indexes.map(i => ({ index: i, item: pool[i] }));
    // shuffle round order too
    return shuffleArray(round);
}

function startRound(category) {
    currentCategory = category;
    currentRoundQuestions = prepareRound(category);
    currentQuestionIndex = 0;
    score = 0;

    // UI
    categoryLabel.textContent = `Round: ${category}`;
    qTotalEl.textContent = currentRoundQuestions.length;
    qNumEl.textContent = 0;
    questionEl.textContent = "";
    nextBtn.classList.add("hidden");
    nextRoundBtn.classList.add("hidden");
    chooseCatBtn.classList.add("hidden");

    showQuestion();
}

function showQuestion() {
    resetState();
    if (!currentRoundQuestions || currentRoundQuestions.length === 0) {
        questionEl.textContent = "No questions available for this category.";
        return;
    }

    const current = currentRoundQuestions[currentQuestionIndex].item;
    qNumEl.textContent = currentQuestionIndex + 1;
    qTotalEl.textContent = currentRoundQuestions.length;
    questionEl.textContent = current.q;

    // create answers (shuffle answers)
    const answers = shuffleArray([...current.a]);
    answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = ans.t;
        if (ans.c) btn.dataset.correct = "true";
        btn.addEventListener("click", selectAnswer);
        answerButtons.appendChild(btn);
    });
}

function resetState() {
    // hide next & end buttons
    nextBtn.classList.add("hidden");
    nextRoundBtn.classList.add("hidden");
    chooseCatBtn.classList.add("hidden");
    // remove answers
    while (answerButtons.firstChild) answerButtons.removeChild(answerButtons.firstChild);
}

function selectAnswer(e) {
    const btn = e.currentTarget;
    const correct = btn.dataset.correct === "true";

    if (correct) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("incorrect");
    }

    // highlight correct answer and disable all
    Array.from(answerButtons.children).forEach(b => {
        if (b.dataset.correct === "true") b.classList.add("correct");
        b.disabled = true;
    });

    // show next or end controls
    nextBtn.classList.remove("hidden");
}

function handleNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentRoundQuestions.length) {
        showQuestion();
    } else {
        endRound();
    }
}

function endRound() {
    resetState();
    questionEl.textContent = `🎉 Round finished — You scored ${score} / ${currentRoundQuestions.length}`;
    qNumEl.textContent = 0;
    // show options: Next Round (same category) and Choose Category
    nextRoundBtn.classList.remove("hidden");
    chooseCatBtn.classList.remove("hidden");
}

// UI action handlers
startRoundBtn.addEventListener("click", () => {
    const chosen = categorySelect.value;
    if (!chosen) return;
    startRound(chosen);
});

nextBtn.addEventListener("click", () => {
    handleNext();
});

nextRoundBtn.addEventListener("click", () => {
    if (!currentCategory) return;
    // prepare a fresh round for same category
    startRound(currentCategory);
});

chooseCatBtn.addEventListener("click", () => {
    // show selector again — reset UI
    questionEl.textContent = "Select a category and click \"Start Round\"";
    qNumEl.textContent = 0;
    qTotalEl.textContent = 0;
    categoryLabel.textContent = "Round: —";
    nextRoundBtn.classList.add("hidden");
    chooseCatBtn.classList.add("hidden");
});

// Kick things off
(function init() {
    // populate select already done above; default choose first
    categorySelect.value = categoryNames[0] || "";
    categoryLabel.textContent = "Round: —";
    qNumEl.textContent = 0;
    qTotalEl.textContent = 0;
})();
