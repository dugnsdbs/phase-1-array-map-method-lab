const tutorials = 
  ['what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
  ];

// function finalAnswer (array){
//   let answer = []
//   for(let senten of array){
//     let splitWord = senten.split (" ");
//     for (let i = 0; i < splitWord.length; i++){
//         answer.push(splitWord[i][0].toUpperCase() + splitWord[i].substr(1));
//     }
//   }
//   return answer.join(' ')
// }

const titleCased = () => {
  return tutorials.map(tutorial =>{
      return tutorial.split(' ').map(word => word[0].toUpperCase() + word.substring(1, word.length)).join(' ')
  })
}

titleCased(tutorials)



const titleCased = () => {
  tutorials.map(function (array){
    let splitWord = array.split(" ");
    let answer = "";
    for(let i = 0; i < splitWord.length; i ++){
      let firstCaseUpper = splitWord[i][0].toUpperCase() + splitWord[i].slice(1);
      
    }
  })
  return tutorials
}
