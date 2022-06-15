// создаём массив объектов

const quizData = [
  { 
    question:"Які числа будуть виведені?",
    description:
`for (int i = 10; i < 20; i += 2) {
    if (i > 15)
        break;
    if (i % 4 == 0)
        continue;
    System.out.println (i);
  }`,
    a:'10, 12, 14',
    b:'12, 14',
    c:'10, 14',
    d:'14',
    correct: 'c',
  }
  ,
  
  {
    question:'Скількі параметрів може приймати функція?',
    description:'',
    a:'Не більше 5',
    b:'Не більше 3',
    c:'Не більше 10',
    d:'Необмежену кількість',
    correct: 'd', }, {
    question:'Який метод дозволяє запустити програму на Java?',
    description:'',
    a:'З классу, що був написаний першим та з методів, що знаходяться всередині нього',
    b:'Будь-який, його можно задавати в налаштуваннях проекту',
    c:'Запуск програми здійснюється через компіляцію проекту, основного методу нема',
    d:'З методу main в будь-якому з классів',
    correct: 'd',}, {
    question:'У чому тут помилка?',
    description:`int a, b;
System.out.print("Введить перше число: ");
Scanner num = new Scanner(System.in);
a = num.nextFloat ();`,
    a:'Замість System.in потрібно використовувати System.out',
    b:'int a, b - необхідно записувати окремо',
    c:'Замість nextFloat потрібно використовувати nextInt',
    d:'Помилок немає',
    correct:'c',
  }, {
    question:'Що спільного у всіх елементів масиву?',
    description:'',
    a:'Їх назви',
    b:'Їх тип даних',
    c:'Їх розмір',
    d:'Їх адреса у памяті',
    correct:'b',
  },
  
  {
    question:'Де правильно створена проста змінна?',
    description:'',
    a:'bool isDone = true;',
    b:'int[] a;',
    c:'float x = 23.3f;',
    d:`char str = 'ab';`,
    correct:'c',
  },
  
  {
    question:'Що виведе цей код?',
    description: `int a = 9;
switch (a) {
    case 0: System.out.print ("0");
    case 5: System.out.print ("5"); break;
    case 9: System.out.print ("9");
    case 10: System.out.print ("10"); break;
    default: System.out.print ("!");
};`,
    a:'9',
    b:'910!',
    c:'910',
    d:'Помилка у коді',
    correct:'c', },  {
    question:'Кожен файл повинен називатися...',
    description:'',
    a:'по імені назви пакету',
    b:'як вам захочеться',
    c:'по імені першої бібліотеки у ньому',
    d:'по імені класу у ньому',
    correct:'d',  },
  {
    question:'Де правильно присвоєно нове значення до багатовимірного масиву?',
    description:'',
    a:'a[0 0] = 1;',
    b:'a{0}{0} = 1',
    c:'a[0, 0] = 1',
    d:'a[0][0] = 1',
    correct:'d',
  },
  {
    question:'Які математичні операції є у Java?',
    description:'',
    a:'+, -, *, /, %',
    b:'+, -, *, /, --, ++',
    c:'+, -, *, /',
    d:'Усі наведені',
    correct:'d',
  },
  {
    question:'Який клас відповідає за отримання інформації від користувача?',
    description:'',
    a:'Get',
    b:'System',
    c:'Scanner',
    d:'Out',
    correct:'c',
  },
  {
    question:'Де правильно буде здійснено вивід?',
    description:'',
    a:'System.out("Hello World!");',
    b:'System.print("Hello World!");',
    c:'System.out.print = "Hello World!";',
    d:'System.out.print("Hello World!");',
    correct:'d',
  },
  {
    question:'Що виведе цей код?',
    description:
`int a = 9;
boolean isDone = false;
if (a % 3 != 0 || !isDone)   
System.out.print("Готово");`,
    a:'Помилка у коді',
    b:'Нічого не виведе',
    c:'Виведе текст "Готово"',
    d:'Виведе виключення',
    correct:'c',
  },
  {
    question:'Для чого можна використовувати Java?',
    description:'',
    a:'Для створення программ під ПК',
    b:'Для створення сайтів',
    c:'Для створення ігор',
    d:'Для усього наведеного вище',
    correct:'d',
  },
  {
    question:'Де правильно створено масив?',
    description:'',
    a:'int[] a = new int {1, 2, 3, 4, 5};',
    b:'int a[] = 1, 2, 3, 4, 5;',
    c:'int[] a = int[] {1, 2, 3, 4, 5};',
    d:'int[] a = new int[] {1, 2, 3, 4, 5};',
    correct:'a',
  }

]

const quiz = document.getElementById("quiz");
const counter = document.getElementById("counter");
const answerEls = document.querySelectorAll(".answer"); 
const questionEl = document.getElementById("question");
const descEl = document.getElementById("description");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");


let currentQuiz = 0; //номер объекта (вопроса)
let score = 0;

loadQuiz();


// функция для загрузки каждого вопроса
function loadQuiz() {
  
    counter.innerHTML = `<p>Питання ${currentQuiz+1}/${quizData.length}<\p>`;
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz]; // данные текущего вопроса = данные объекта из массива по номеру вопроса
    questionEl.innerText = currentQuizData.question; // возвращает текст и заменяет его на вопрос из массива 
    descEl.innerText = currentQuizData.description;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) { // если ответ выбран, сохраняем его айди 
            answer = answerEl.id;
        }
    });
    return answer;
}

// функция для очистки выбора ответа
function deselectAnswers() { 
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // проверяем ответ
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++; // если ответ правильный результат+1
        }

    currentQuiz++; 

    if (currentQuiz < quizData.length) { // прогружаем вопросы до конца массива
        loadQuiz();
    } else {
      // выводит результат и создает две кнопки
      quiz.innerHTML = `<center>Результати тесту</center>
      <h2 class="results">Ви відповіли правильно на ${score}/${quizData.length} питань.</h2>
      <button class="answers" onclick="document.location.href='answers.html'">Подивитися відповіді</button>
      <button class="anotherTest" onclick="document.location.href='index.html#id1'">Обрати інший тест</button>`;
    }
  }
});


