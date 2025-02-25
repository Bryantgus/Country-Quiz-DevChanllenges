
export default function QuestionsGenerator(data) {

  const questions = [
      {
        question: "Which country has {capital} as its capital?",
        toReplace: "{capital}",
        answer: "name"
      },
      {
        question: "Which currency is used in {country}?",
        toReplace: "country",
        answer: "currencies"
      },
      {
        question: "What is the population of {country}?",
        toReplace: "country",
        answer: "population"
      },
      {
        question: "Which continent have a {country} named?",
        toReplace: "continent",
        answer: "name"
      },
      {
        question: "What is the official language of {country}?",
        toReplace: "country",
        answer: "languages"
      },
      {
        question: "Which country uses {currency} as its official currency?",
        toReplace: "currencies",
        answer: "name"
      },
      {
        question: "What is the population of {country}?",
        toReplace: "country",
        answer: "population"
      },
      {
        question: "This flag {flag} belongs to?",
        toReplace: "flag",
        answer: "name"
      },
      {
        question: "What is the capital of {country}?",
        toReplace: "country",
        answer: "capital"
      },
      {
        question: "Which country has {languages} as one of its official languages?",
        toReplace: "languages",
        answer: "name",
      }
    ];
  
  // for (let i = 0; i < 10; i++) {
      
      const randomQuestions = questions[Math.floor(Math.random() * questions.length)];
      const questionSelected = randomQuestions.question;
      const toReplaceStr = randomQuestions.toReplace;
      const answerQuestion = randomQuestions.answer;

      const toReplaceFormated = Object.values(data.toReplace)[0];

      questionSelected = questionSelected.replace(`{${toReplaceFormated}}`, )
      answerFormated = Object.values(data.answer)[0];


  // }

  // return [questionSelected, answerFormated];
  return data;

}