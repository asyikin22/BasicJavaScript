# Role-Playing Game
**SUMMARY**: 

This code is a text-based adventure game implemented using JS and HTML elements. It controls what happens in the game such as:
* where the player can go (town, store, cave)
* What they can do  (buy health, buy weapon, fight monster)
* How the game responds to player's action (winning or losing the game) <br>

**Buttons** are primarily used to make choices in the game and the text areas display information to the player <br>

**FOUR MAIN ELEMENTS IN HTML**
1. Create HTML elements that will display the game information where users can track their stats, buy weapons and fight monsters
   * Create 1 elements with #game
   * Create 4 elements within it with these id (#) respectively: #stats, #controls, #monsterStats, #text
2. For #stats elements, wrap words in span to make them bold.
3. For #control elements, create 3 button elements with id button1, button 2, button 3, set these texts accordingly: 'Go to Store', 'Go to Cave' and 'fight dragon'
4. For #monsterStats element, add 2 spans elements with class stats
   * Give them text 'Monster Name:  ' and 'Health:  ' respectively
   * Give it span element with id #monsterHealth

**FOUR JAVASCRIPT CONCEPTS ARE USED IN THIS CODE**
1. **VARIABLES**: Containers that hold information -
   * Variables that store various game-related values: xp, health, gold, currentWeapon, fighthing, monsterHealth
   * Variables that stores references to the HTML elements on webpage:  button1, button2, button3, text, xpText, healthText, goldText, mosnterStats, monsterName, monsterHealthText
     
2. **ARRAYS**: Collection of items -
   * 'weapons' : contain different weapons with their names and power levels
   * 'monster' - contain information about different monsters such as name, level and health
   * 'location' - contain information about different location in the game including 'Butto texts', 'Button functions' and descriptive text for each location.
     
3. **FUNCTIONS**: Actions or tasks that the game can perform -
   * 'update(location)' - this function updates game interface based on the current location
   * Function that changes the current location in the game: 'goTown', 'goStore', 'goCave'
   * Functions that handle different actions the player can take: buyHealth, buyWeapon, sellWeapon, fightSlime, fightBeast, fightDragon and goFight
   * Function that handles different outcomes during gameplay: attack, dodge, defeatMonster, lose, winGame
   * 'restart' function - resets the game to its initial state
   * Functions that are part of an easter egg mini-game: pickTwo, pickEight, pick
     
4. **EVENT-HANDLERS**: Function that runs when certain event occurs -
   * 'onclick' event handlers for 'button1', 'button2' and 'button3' elements trigger different actions in the game based on what the player selects.

**OTEHR JAVASCRIPT CONCEPTS THAT CONTRIBUTE TO THE FUNCTIONALITY OF THE CODE ARE SUMMARIZED IN THE TABLE BELOW** 


![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/e9100966-1d69-48be-863a-c60c717d8fc6)
![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/3328c41e-4e88-4d63-9173-f2474cbbc11d)
![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/f32fca4d-8306-4062-8535-1ff7818c5c79)


# SIMPLE COUNTER
So these codes basically show you how everytime you press the increase button it will add 1 to counter, when you press decrease button, it will take away one from the counter. And of course when you press reset button the coutner will return to 0

**HTML**
1. Create one div with ID=ccountLabel. set the text to 0(zero)
2. Create one button container, nest 3 button elements inside it, name it Decrease, Reset, Increase respectively.
3. do not forget to link you CSS file and JS file to your HTML file!

**CSS**
1. Style it howwever you like.
2. To give a slightly interesting effect on the button, I added transition property to the button. When it's clicked/mouse hovers over it, the background will become brighter.
3. For this animation to take effect, you have to use button:hover selector. The transition will end after some time, in my example i set it to 0.2s.
4. So when the mouse no longer hovers over it, it will transition back to original background color which is less brighter.

**JavaScript**
1. Grab all the button elements we want to manipulate from HTML, using document.getElementById for buttons with ID minusButton, resetButton and plusButton
2. Also, we gonna grab the countLabel element too beacuase we want the number to be displayed accordingly when user presses increase, decrease or reset.
3. Set the number to 0
4. Create 3 incredibly easy functions for decrease, reset and button.

# Magic Eight Ball 

**OBJECTIVE:** input a question, then the program will output a random fortune. <br>

**STEP-BY-STEP**:
1. In the first line of the program, define a variable called userName that is set to an empty string. If the user wants, they can enter their name in between the quotation marks.
2. Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.
3. Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
4. Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!\
5. We need to generate a random number between 0 and 7. Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods (Math.floor() and Math.random()) from the Math library.
6. Create one more variable named eightBall, and set it equal to an empty string. We will save a value to this variable in the next steps, depending on the value of randomNumber.
7. We need to create a control flow that takes in the randomNumber we made in step 5, and then assigns eightBall to a reply that a Magic Eight Ball would return. Think about utilizing if/else or switch statements. Here are 8 Magic Eight Ball phrases that we’d like to save to the variable eightBall:
8. Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable
9. Run your program a few times to see random results appear in the console!

# Race Day

**OBJECTIVE:** 
* Write a program that will register runners for the race and give them instructions on race day.
* Runners are assigned a race number and start time based on their age and registration.

![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/e4d38f3f-c637-4f71-8e40-729b889b7761)

**STEP-BY-STEP**:
1. Race numbers are assigned randomly.
2. Create a variable that indicates whether a runner registered early or not.
3. Create a variable for the runner’s age and set it equal to a number.
4. Create a control flow statement that checks whether the runner is an adult AND registered early. Add 1000 to their raceNumber if this is true.
5. Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time.
6. For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.
7. “Late adults run at 11:00 am” - Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am
8. Write the corresponding else if statement.
9. Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.
10. “Youth registrants run at 12:30 pm (regardless of registration)” - For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.
11. Enter different combinations of values for the two variables you created and run your code several times. Verify that the correct statements are printing to the consol
12. Don’t forget about runners exactly 18 years old! Add an else statement that logs a statement to the console telling the runner to see the registration desk.
    





