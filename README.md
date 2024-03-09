# RIDICULOUSLY SIMPLE COUNTER
So these codes basically show you how everytime you press the increase button it will add 1 to counter, when you press decrease button, it will take away one from the counter. And of course when you press reset button the coutner will return to 0

I will show you how to do this in less than 15 minutes. Could be less but becuase I am a newbie, it takes slightly longer lol. 

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
