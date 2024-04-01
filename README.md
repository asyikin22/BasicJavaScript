
# BASIC CONCEPT IN JAVASCRIPT

**LEXICAL STRUCTURE**
* It refers to the rules governing how characters and symbols are combined to form valid tokens
  
![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/1b207d23-790b-4bf9-8ebc-a5c7f6931ded)

**DATA TYPES**

* SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview
  
![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/19f7d244-a0de-4d34-8ef5-ff25d3394e56)

![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/219452f7-8cf1-4eee-aedc-3eb7a4508681)

![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/4635cfef-5f1f-4bd5-8c4e-ed07b18a9f5c)

**VARIABLES**
* SOURCE: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#what_is_a_variable
* A container for a value
* Variables are not values themselves! They're like cardboard boxes that you can store things in

![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/2cb1e9ce-2534-43e6-a4bf-575515a660b8)

![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/1c272ac7-0566-4b4e-80ac-e3a81419880e)

![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/31883f25-fe08-439c-ab94-b0b65079f411)

![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/7873709f-3221-4c1b-b398-4beebccb5586)

**FUNCTIONS**:

**Definition**:
* Function is a block of reusable code that performs a specific tasks OR calculates a value
* It should take some input and return an output
* You must define it somewhere in the scope from which you wish to call it.
<br>

**First Class Objects**:
* Can be passed to other functions
* Returned from functions
* Assigned to variable and properties

![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/b094f2a7-1236-48fc-9386-16c7b4f47cd4)

![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/16c9a3f8-662f-48dc-af2d-d0dda5ae46ae)

![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/fee6c9b1-f538-4832-9021-590e928d1091)

**Calling a Function**:
* Defining a function DOES NOT execute it
* Defining it names the function & it specifies what to do when the function is called
* Calling a function actually performs the specified actions with the indicated parameters

**Function Scope**:
* It refers to visibility and accessibility of variables defined within a function
* Variables declared inside a function are scoped to that function - they're ONLY accessible within the function body

**Arrow Functions**:
* Arrow function expression has shorter syntax and more concise.
* It's always anonymous
* They don’t have their own 'this' context.
* They have no argument object.

![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/cab57095-ba50-4dc2-a1e3-6638ab3d53f1)

**'This' OPERATOR**:
* It refers to the context in which a function is executed.
* It's used in object methods
* It is crucial for working with object-oriented programming in JS.
* 'this' is always a reference to an object.

**SCOPES**:
* Scopes define where variables and functions are accessible within your code

![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/5c855067-86a7-44d8-b812-2cb5af5fbca7)

**ARRAYS**:
* A data structure that allows you to store multiple values in a single variable
* Core characteristics:
   1. They are resizable and can contain a mix of different data types
   2. They are zero-indexed (accessed using numerical index, starting from 0)
   3. Various built-in methods and properties to manipulate data
   4. Iteration: loops ('for' loop) and methods (forEach(), map(), and filter())
   5. Determine its size using length property
   6. They are mutable - we can change the value of element

**TEMPLATE LITERALS**:
* Literals delimited with backtick characters
* It's commonly used for string interpolation
  1. It refers to the process of embedding variables or expression within a string literal.
  2. Template literals provides a convenient syntax using ${}
	
* Note that it's different from String concatenation (join multiple strings to form a single string)

# LOOPS
* Loops offer a quick and easy way to do something repeatedly
* There are many kind of loops but they are essentially doing the same thing ---> repeat an action some number of times.
* Statements for loops:
  1. For
  2. Do...while
  3. While
  4. For...in
  5. For...of

  ![image](https://github.com/asyikin22/BasicJavaScript/assets/148519441/dfe9eedd-577c-4db2-b547-d973454a0d06)



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
    





