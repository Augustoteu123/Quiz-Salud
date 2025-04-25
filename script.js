const questions = [
    {
      question: "¿Cuáles son las principales enfermedades consideradas arbovirosis en Bolivia?",
      answers: [
        { text: "Tuberculosis, Leishmaniasis y Malaria", correct: false },
        { text: "Dengue, Chikungunya y Zika", correct: true },
        { text: "Sarampión, Varicela y Rubéola", correct: false },
        { text: "Hepatitis A, B y C", correct: false }
      ]
    },
    {
      question: "¿Cuál es el objetivo principal de la Estrategia de Gestión Integrada (EGI) contra las arbovirosis?",
      answers: [
        { text: "Erradicar todos los mosquitos en Bolivia", correct: false },
        { text: "Reducir la carga de enfermedades mediante acciones coordinadas", correct: true },
        { text: "Aumentar el comercio de insecticidas", correct: false },
        { text: "Centralizar la vigilancia solo en capitales", correct: false }
      ]
    },
    {
      question: "¿Cuál de las siguientes es una línea estratégica de la EGI?",
      answers: [
        { text: "Exclusión de comunidades rurales", correct: false },
        { text: "Sospecha clínica y diagnóstico diferencial oportuno", correct: true },
        { text: "Incremento de tratamientos empíricos", correct: false },
        { text: "Reducción del presupuesto en vigilancia", correct: false }
      ]
    },
    {
      question: "¿Qué acción corresponde al saneamiento ambiental para controlar las arbovirosis?",
      answers: [
        { text: "Fomentar acumulación de agua en recipientes", correct: false },
        { text: "Dejar llantas usadas al aire libre", correct: false },
        { text: "Eliminar criaderos de mosquitos en comunidades", correct: true },
        { text: "Promover la tala de bosques", correct: false }
      ]
    },
    {
      question: "¿Por qué es importante realizar un diagnóstico diferencial entre Dengue, Chikungunya y Zika?",
      answers: [
        { text: "Porque tienen tratamientos iguales", correct: false },
        { text: "Porque se transmiten por diferentes vectores", correct: false },
        { text: "Porque presentan síntomas similares pero requieren enfoques distintos", correct: true },
        { text: "Porque todas son enfermedades bacterianas", correct: false }
      ]
    },
    {
      question: "¿De qué manera contribuyen los laboratorios al control de las arbovirosis?",
      answers: [
        { text: "Produciendo vacunas de emergencia", correct: false },
        { text: "Eliminando manualmente los vectores", correct: false },
        { text: "Detectando rápidamente los virus circulantes", correct: true },
        { text: "Realizando campañas educativas en escuelas", correct: false }
      ]
    },
    {
      question: "¿Cuál es el rol de la comunidad en el control de arbovirosis según la estrategia?",
      answers: [
        { text: "No participar directamente", correct: false },
        { text: "Solo recibir información", correct: false },
        { text: "Participar activamente en acciones de prevención y control", correct: true },
        { text: "Dejar la responsabilidad exclusivamente a las autoridades", correct: false }
      ]
    },
    {
      question: "¿Qué representa la vigilancia epidemiológica en la estrategia EGI?",
      answers: [
        { text: "Solo control de medicamentos", correct: false },
        { text: "Supervisión de laboratorios", correct: false },
        { text: "Base para identificar brotes y apoyar la prevención", correct: true },
        { text: "Análisis del impacto económico de las epidemias", correct: false }
      ]
    },
    {
      question: "¿Qué función cumple el CENETROP en la red de laboratorios de Bolivia?",
      answers: [
        { text: "Capacitar a personal militar", correct: false },
        { text: "Servir como Laboratorio Nacional de Referencia para Dengue, Chikungunya y Zika", correct: true },
        { text: "Dirigir campañas de saneamiento ambiental", correct: false },
        { text: "Producir repelentes naturales", correct: false }
      ]
    },
    {
      question: "¿Cuál de las siguientes actividades pertenece a la gestión integrada de la EGI?",
      answers: [
        { text: "Educación ambiental y saneamiento comunitario", correct: true },
        { text: "Incremento de construcciones en zonas húmedas", correct: false },
        { text: "Liberación de mosquitos modificados genéticamente sin estudios", correct: false },
        { text: "Reducción de redes de laboratorio", correct: false }
      ]
    },
    {
        question: "¿Qué es la leishmaniasis?",
        answers: [
          { text: "Una enfermedad bacteriana transmitida por aire", correct: false },
          { text: "Una infección parasitaria transmitida por la picadura de un insecto", correct: true },
          { text: "Una enfermedad viral transmitida por mosquitos", correct: false },
          { text: "Una intoxicación alimentaria", correct: false }
        ]
      },
      {
        question: "¿Cuál es el vector principal de la leishmaniasis?",
        answers: [
          { text: "Mosquito Aedes aegypti", correct: false },
          { text: "Mosca negra", correct: false },
          { text: "Lutzomyia (mosca de la arena)", correct: true },
          { text: "Garrapata Ixodes", correct: false }
        ]
      },
      {
        question: "¿Qué tipo de agente causa la leishmaniasis?",
        answers: [
          { text: "Virus", correct: false },
          { text: "Bacteria", correct: false },
          { text: "Protozoo", correct: true },
          { text: "Hongo", correct: false }
        ]
      },
      {
        question: "¿Cuál es una manifestación clínica de la leishmaniasis cutánea?",
        answers: [
          { text: "Fiebre hemorrágica", correct: false },
          { text: "Lesiones ulcerativas en la piel", correct: true },
          { text: "Parálisis muscular", correct: false },
          { text: "Insuficiencia renal", correct: false }
        ]
      },
      {
        question: "¿Qué caracteriza a la leishmaniasis mucocutánea?",
        answers: [
          { text: "Compromiso de órganos internos", correct: false },
          { text: "Destrucción progresiva de mucosas nasales y bucales", correct: true },
          { text: "Úlceras en miembros inferiores únicamente", correct: false },
          { text: "Aumento de la presión arterial", correct: false }
        ]
      },
      {
        question: "¿Qué caracteriza a la leishmaniasis visceral?",
        answers: [
          { text: "Lesiones en mucosas", correct: false },
          { text: "Infección sistémica que compromete bazo e hígado", correct: true },
          { text: "Erupciones vesiculares", correct: false },
          { text: "Dolor articular severo", correct: false }
        ]
      },
      {
        question: "¿Cuál es un método de diagnóstico de leishmaniasis?",
        answers: [
          { text: "Aislamiento bacteriano", correct: false },
          { text: "Prueba de reacción en cadena de polimerasa (PCR)", correct: true },
          { text: "Radiografía pulmonar", correct: false },
          { text: "Dosificación de anticuerpos contra virus", correct: false }
        ]
      },
      {
        question: "¿Qué acción ayuda a prevenir la transmisión de la leishmaniasis?",
        answers: [
          { text: "Uso de mosquiteros tratados con insecticida", correct: true },
          { text: "Consumo de agua hervida", correct: false },
          { text: "Vacunación infantil obligatoria", correct: false },
          { text: "Uso exclusivo de repelentes caseros", correct: false }
        ]
      },
      {
        question: "¿Qué grupos poblacionales son más vulnerables a la leishmaniasis?",
        answers: [
          { text: "Adultos mayores en áreas urbanas", correct: false },
          { text: "Niños y trabajadores rurales en áreas endémicas", correct: true },
          { text: "Personas que viven en ciudades industriales", correct: false },
          { text: "Viajeros en zonas montañosas de clima frío", correct: false }
        ]
      },
      {
        question: "¿Qué medida ambiental ayuda a reducir el riesgo de leishmaniasis?",
        answers: [
          { text: "Incrementar la presencia de aguas estancadas", correct: false },
          { text: "Eliminación de criaderos de insectos y manejo de residuos sólidos", correct: true },
          { text: "Deforestación de bosques protegidos", correct: false },
          { text: "Construcción masiva de viviendas improvisadas", correct: false }
        ]
      }
    ];
  
  
  
  const startButton = document.getElementById('start-button');
  const startContainer = document.getElementById('start-container');
  const questionContainer = document.getElementById('question-container');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const questionElement = document.getElementById('question');
  const nextButton = document.getElementById('next-button');
  const resultContainer = document.getElementById('result-container');
  const scoreText = document.getElementById('score-text');
  const restartButton = document.getElementById('restart-button');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  startButton.addEventListener('click', startQuiz);
  nextButton.addEventListener('click', nextQuestion);
  restartButton.addEventListener('click', startQuiz);
  
  function startQuiz() {
    startContainer.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let current = questions[currentQuestionIndex];
    questionElement.innerText = current.question;
    current.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(button, answer.correct));
      answerButtonsElement.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.classList.add('hide');
    answerButtonsElement.innerHTML = '';
    questionContainer.classList.remove('red-background');
  }
  
  function selectAnswer(selectedButton, correct) {
    const buttons = Array.from(answerButtonsElement.children);
    buttons.forEach(button => {
      if (button.innerText === buttons.find(b => b.innerText === button.innerText).innerText) {
        button.disabled = true;
        if (button.textContent === buttons.find(b => b.textContent === button.textContent).textContent) {
          if (button.textContent === buttons.find(b => b.textContent === button.textContent).textContent) {
            const answerCorrect = questions[currentQuestionIndex].answers.find(a => a.text === button.textContent).correct;
            if (answerCorrect) {
              button.classList.add('correct');
            }
          }
        }
      }
    });
  
    if (correct) {
      selectedButton.classList.add('correct');
      score++;
    } else {
      selectedButton.classList.add('wrong');
      questionContainer.classList.add('red-background');
      showCorrectAnswer();
    }
  
    nextButton.classList.remove('hide');
  }
  
  function showCorrectAnswer() {
    const buttons = Array.from(answerButtonsElement.children);
    buttons.forEach(button => {
      const answerText = button.innerText;
      const correctAnswer = questions[currentQuestionIndex].answers.find(a => a.text === answerText && a.correct);
      if (correctAnswer) {
        button.classList.add('correct');
      }
    });
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreText.innerText = `Obtuviste ${score} de ${questions.length} puntos.`;
  
    Swal.fire({
      title: '¡Quiz terminado!',
      text: `Tu puntuación fue: ${score}/${questions.length}`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }
  