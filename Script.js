// Отримуємо елементи сцени по їх ID
const ball = document.getElementById("ball");      // Кулька
const card = document.getElementById("card");      // Картка
const square = document.getElementById("square");  // Квадрат
const root = document.documentElement;             // Кореневий елемент <html>, для зміни CSS-змінних

// Отримуємо кнопки по їх ID
const startAll = document.getElementById("startAll");    // Кнопка: Запустити всі
const pauseAll = document.getElementById("pauseAll");    // Кнопка: Пауза
const resetAll = document.getElementById("resetAll");    // Кнопка: Скинути
const faster = document.getElementById("faster");        // Кнопка: Швидше
const slower = document.getElementById("slower");        // Кнопка: Повільніше

const toggleBall = document.getElementById("toggleBall");    // Кнопка: Показати/Сховати Кульку
const toggleCard = document.getElementById("toggleCard");    // Кнопка: Показати/Сховати Картку
const toggleSquare = document.getElementById("toggleSquare"); // Кнопка: Показати/Сховати Квадрат

// Функції допомоги для керування класами CSS
function play(el) { el.classList.remove("paused"); }   // Запуск анімації: прибираємо клас .paused
function pause(el) { el.classList.add("paused"); }     // Пауза анімації: додаємо клас .paused
function hide(el) { el.classList.add("hidden"); }      // Сховати елемент: додаємо клас .hidden
function show(el) { el.classList.remove("hidden"); }   // Показати елемент: прибираємо клас .hidden

// ======================
// Кнопки керування
// ======================

// Запустити всі анімації та показати елементи
startAll.onclick = () =>
    [ball, card, square].forEach(el => { play(el); show(el); });
// forEach перебирає масив елементів; для кожного викликає play(el) та show(el)

// Пауза всіх анімацій
pauseAll.onclick = () =>
    [ball, card, square].forEach(el => pause(el));

// Скинути всі анімації та швидкість до початкових значень
resetAll.onclick = () => {
    root.style.setProperty("--speed", 1);  // CSS-змінна --speed = 1
    [ball, card, square].forEach(el => {
        el.classList.remove("paused");    // Знімаємо паузу
        el.style.animation = "none";      // Тимчасово відключаємо анімацію
        requestAnimationFrame(() => el.style.animation = ""); 
        // Перезапуск анімації без перезавантаження сторінки
    });
};

// Збільшити швидкість всіх анімацій
faster.onclick = () => {
    let s = parseFloat(getComputedStyle(root).getPropertyValue("--speed")); 
    // Отримуємо поточне значення CSS-змінної --speed
    root.style.setProperty("--speed", Math.min(s * 1.3, 6)); 
    // Збільшуємо на 30%, максимум 6
};

// Зменшити швидкість всіх анімацій
slower.onclick = () => {
    let s = parseFloat(getComputedStyle(root).getPropertyValue("--speed")); 
    root.style.setProperty("--speed", Math.max(s / 1.3, 0.2)); 
    // Зменшуємо на ~23%, мінімум 0.2
};

// Показати/сховати Кульку
toggleBall.onclick = () => ball.classList.toggle("hidden"); 
// toggle додає клас, якщо його немає, або прибирає, якщо є

// Показати/сховати Картку
toggleCard.onclick = () => card.classList.toggle("hidden");

// Показати/сховати Квадрат
toggleSquare.onclick = () => square.classList.toggle("hidden");