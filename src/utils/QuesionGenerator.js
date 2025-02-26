const questions = [
  {
    question: "Which country has {} as its capital?",
    toReplace: "capital",
    answer: "name"
  },
  {
    question: "Which currencies is used in {}?",
    toReplace: "name",
    answer: "currencies"
  },
  {
    question: "What is the population of {}?",
    toReplace: "name",
    answer: "population"
  },
  {
    question: "Which continent has the country of {}?",
    toReplace: "name",
    answer: "continents"
  },
  {
    question: "What are the official languages of {}?",
    toReplace: "name",
    answer: "languages"
  },
  {
    question: "Which country uses {} as its official currency?",
    toReplace: "currencies",
    answer: "name"
  },
  {
    question: "What is the population of {}?",
    toReplace: "name",
    answer: "population"
  },
  {
    question: "This flag {} belongs to?",
    toReplace: "flag",
    answer: "name"
  },
  {
    question: "What is the capital of {}?",
    toReplace: "name",
    answer: "capital"
  },
  {
    question: "Which country has {} as one of its official languages?",
    toReplace: "languages",
    answer: "name",
  }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Genera un índice aleatorio entre 0 y i
    [array[i], array[j]] = [array[j], array[i]]; // Intercambia los elementos en las posiciones i y j
  }
  return array;
}

function replaceValue(value, randomCountry) {
  let toReplaceFormated = "";

  if (value === "capital") toReplaceFormated = randomCountry.capital[0];
  if (value === "flags") toReplaceFormated = randomCountry.flags.svg;
  if (value === "name") toReplaceFormated = randomCountry.name.common;
  if (value === "population") toReplaceFormated = randomCountry.population.toLocaleString();
  if (value === "continents") toReplaceFormated = randomCountry.continents[0];

  if (value === "languages") {
    const languages = Object.values(randomCountry.languages);
    toReplaceFormated = languages.join(" ");
  }

  if (value === "currencies") {
    const currencies = Object.values(randomCountry.currencies);
    toReplaceFormated = currencies.map(curr => Object.values(curr).join(" ")).join(", ");
  }

  return toReplaceFormated;
}

export default function QuestionsGenerator(data) {
  let dataToExport = []; // Asegúrate de declarar esto fuera del bucle
  
  for (let i = 0; i < 10; i++) { // Cambia el límite del bucle si necesitas más preguntas
    const randomCountry = data[Math.floor(Math.random() * data.length)];
    const randomQuestion = questions[i];
    const toReplaceFormated = replaceValue(randomQuestion.toReplace, randomCountry);
    const randomQuestionsFormated = randomQuestion.question.replace("{}", toReplaceFormated);
    const correctAnswer = replaceValue(randomQuestion.answer, randomCountry);

    let randomAnswers = []; // Aquí puedes almacenar las respuestas aleatorias
    
    for (let j = 0; j < 3; j++) { // Itera 3 veces para generar 3 respuestas incorrectas
      let randomCountryOther;
      let randomAnswer;
      
      do {
        randomCountryOther = data[Math.floor(Math.random() * data.length)];
        randomAnswer = replaceValue(randomQuestion.answer, randomCountryOther);
      } while (randomCountry === randomCountryOther); // Asegúrate de que no se repita el país correcto

      randomAnswers.push(randomAnswer); // Añade la respuesta incorrecta
    }
    
    randomAnswers.push(correctAnswer); // Añade la respuesta correcta
    randomAnswers = shuffleArray(randomAnswers); // Mezcla las respuestas

    // Añadir la pregunta con sus respuestas al array de exportación
    dataToExport.push({
      question: randomQuestionsFormated,
      answer: correctAnswer,
      arrayAnswers: randomAnswers
    });
  }
  dataToExport = shuffleArray(dataToExport);

  console.log(dataToExport); // Aquí puedes ver cómo quedan las preguntas y respuestas generadas
  return dataToExport; // Retorna las preguntas generadas
}
