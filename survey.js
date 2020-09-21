const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  const name = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    const activity = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      const listenTo = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        const favmealTime = answer;
        rl.question('What\'s your favourite thing to eat for that meal? ',(answer) => {
          const favmeal = answer;
          rl.question('Which sport is your absolute favourite? ',(answer) =>  {
            const favSport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ',(answer) => {
              const superpower = answer;
              console.log(`Thank you for your valuable feedback.`);
              console.log(`${name} loves listening to ${listenTo} while ${activity}, devouring ${favmeal} for ${favmealTime}, prefers ${favSport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });

      });
    });
    
  });


});

