
export default function QuestionsGenerator() {

    const questions = [
        {
          question: "Which country has {capital} as its capital?",
          toReplace: "{capital}",
          answer: ["name", "common"]
        },
        {
          question: "Which currency is used in {country}?",
          toReplace: "{country}",
          answer: "currency"
        },
        {
          question: "What is the population of {country}?",
          toReplace: "{country}",
          answer: "population"
        },
        {
          question: "Which continent have a {country} named?",
          toReplace: "{continent}",
          answer: ["name", "common"]
        },
        {
          question: "What is the official language of {country}?",
          toReplace: "{country}",
          answer: "languages"
        },
        {
          question: "Which country uses {currency} as its official currency?",
          toReplace: "{currencies}",
          answer: ["name", "common"]
        },
        {
          question: "What is the population of {country}?",
          toReplace: "{country}",
          answer: "population"
        },
        {
          question: "This flag {flag} belongs to?",
          toReplace: "flag",
          answer: ["name", "common"]
        },
        {
          question: "What is the capital of {country}?",
          toReplace: "{country}",
          answer: "capital"
        },
        {
          question: "Which country has {languages} as one of its official languages?",
          toReplace: "{languages}",
          answer: ["name", "common"]
        }
      ];
    
    for (let i = 0; i < 10; i++) {
        const questionSelected = questions[i].question;
        const toReplaceStr = questions[i].toReplace;
        const answerQuestion = questions[i].answer;


    }

}