const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const survey = {
  a1 : '',
  a2 : '',
  a3 : '',
  a4 : '',
  a5 : '',
  a6 : '',
}

rl.question('What is your name?: ', (answer) => {
  survey.a1 = answer;
    rl.question("What's an activity you like doing?: ", (answer) => {
      survey.a2 = answer;
      rl.question('What do you like listening to?: ', (answer) => {
        survey.a3 = answer;
        rl.question('What is your favorite meal of the day?: ', (answer) => {
          survey.a4 = answer;
          rl.question('Do you have a favorite sport?: ', (answer) => {
            survey.a5 = answer;
            rl.question('Do you have any super powers?!: ', (answer) => {
              survey.a6 = answer;
              console.log(`So, your name is ${survey.a1}, you love ${survey.a2}, you listen to ${survey.a3}, you are a ${survey.a4} person, you love ${survey.a5}, AND you have a superpower that allows you to ${survey.a6}?! Wow!... I cannot think of a cooler person!`);
              rl.close();
            })
          });
        });
      });
    });
  
});







