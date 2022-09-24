<h1 align="center">RockPaperScissors.com</h1>

## Rock Paper & Scissors
**RockPaperScissors.com** will help teach you the basics of the classic game called *Rock Paper & Scissors*. The random choices of the computer is meant to emulate another person playing against you to better prepare you for a real battle of *Rock Paper & Scissors!*

![Home Page](assets/readmeimg/amIResponsive.png)

## Live Site
[RockPaperScissors.com](https://madebybrown.github.io/RockPaperScissors.com/)

## Social Links
- [Repository](https://github.com/Madebybrown/TheFitnessHub.com.git)
- [Linkedin](https://www.linkedin.com/in/alexander-jonsson-312a70248/)

## Table Of Contents
- 

## Wireframe
Before building anything it's crucial to plan ahead to steer clear of any possible obstacles in the future. Here we have an image displaying the idea I had for the websites apperance on different devices *(Computer, Tablet & Phone)*, some minor style and feature changes where made during the process but in it's entierity it looks the same.

![wireframe](assets/readmeimg/wireframe.jpg)

## Game Area
The finished design of the game is minimal with an aim to appear as clean as possible while still being engaging and informative, we will go more in depth on the features in the [feature section](#features)!

**Day Mode!**

![Game Area White](assets/readmeimg/gameAreaStartWhite.png)

**Night Mode!**

![Game Area Black](assets/readmeimg/gameAreaStartBlack.png)

## Features
### **Header**
At the top of the game area on the page we have the [Restart button](#restart-button) to the left, The [Day & Night Switch](#day-and-night-switch) to the right and the heading in the middle, wich is used to clearly convey the name of the game, *Rock Paper & Scissors*.

### **Restart Button**
- The restart button is used to restart the game and empty all fields when the player chooses to do so.

![Restart Button Black](assets/readmeimg/restartBtnBlack.png) ![Restart Button White](assets/readmeimg/restartBtnWhite.png)

### **Day And Night Switch**
- The function of the day and night switch is used to invert all the colors on the website depending on if the game is played at the day or at the night.

![Day And Night Switch Black](assets/readmeimg/switchBlack.png) ![Day And Night Switch WHite](assets/readmeimg/switchWhite.png)

#### **Day Mode**
- Heading of the game displayed in the day mode.

![Header Black](assets/readmeimg/gameHeadingBlack.png)

#### **Night Mode**
- Heading of the game displayed in the night mode.

![Header White](assets/readmeimg/gameHeadingWhite.png)

### **Score Area**
- The default score area displays what options the player and the computer chose this round, it also displays the result of those two choises. Points will be updated after every click.

![Score Area Black](assets/readmeimg/scoreAreaBlack.png) ![Score Area White](assets/readmeimg/scoreAreaWhite.png)

#### **Win Result**
- If you win the round, the result will look like this.

![Result Win Black](assets/readmeimg/ResultWinBlack.png) ![Result Win White](assets/readmeimg/ResultWinWhite.png)

#### **Lose Result**
- If you lose the round, the result will look like this.

![Result Lose Black](assets/readmeimg/ResultLostBlack.png) ![Result Lose White](assets/readmeimg/ResultLostWhite.png)

#### **Draw Result**
- If you and the computer chose the same option, the result will look like this.

![Result Draw Black](assets/readmeimg/ResultDrawBlack.png) ![Result Draw White](assets/readmeimg/ResultDrawWhite.png)


### **Options**
- The option buttons displays the choises that are avilable to the player.

![Options Black](assets/readmeimg/optionsBlack.png) ![Options White](assets/readmeimg/optionsWhite.png)

### **Footer**
- In the footer we have both the links to the developers socials and the rules for the game.

#### **Social Links**


![Social Links Black](assets/readmeimg/socialLinksBlack.png) ![Social Links White](assets/readmeimg/socialLinksWhite.png)

#### **Game Rules**
- An easy explenation of the rules of the game.

![Game Rules Black](assets/readmeimg/gameRulesBlack.png) ![Game Rules White](assets/readmeimg/gameRulesWhite.png)

### **Features Left To Implement**
- The ability to set the score limit
- Username creation
- Highscores

## **Testing**

### **Code Validation**

The HTML passed validation without any issues.
![Validation HTML](assets/images/validationHtml.png)

CSS passed validation without any issues.
![Validation CSS](assets/images/validationCss.png)

Script passed validation without any issues.
![Validation Javascript](assets/images/validationJshint.png)

### **Ligthhouse**
#### **First Scan**
The first lighthouse scan came out to low in Accessibility and SEO, the best practices score could also be higher.

![Validation First Lighthouse scan](assets/images/lighthouseOne.png)


![Validation Lighthouse Fix Suggestions](assets/images/lighthouseTwo.png)

#### **Second Scan**
By adding a lable to the input element for the day and night switch and adding Aria-lables to the social links i managed to increse the Acessibility and SEO score to a 100 each.
![Validation Lighthouse Third Scan](assets/images/lighthouseThree.png)

#### **Third Scan**
After cleaning up my code and restructering some javascript functions to be shorter I managed to increase the score of best practises to a 100 to.
![Validation Lighthouse Fourth Scan](assets/images/lighthouseThree.png)

### **Responsiveness**
- I tested the responsive design with [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)
    - Ipad air & mini
    - iPhone SE, XR, and 12Pro
    - Pixel 5
    - Samsung Galaxy S8, S20 Ultra, A51/71
    - Surface Pro 7 & duo
    - Galaxy Fold
    - Nest Hub & Hub Max

I also tested the website on Iphone 7, 8 and 13 pro, without any known issues.

### **Browsers**
I've tried using the website on google chrome, microsoft edge and firefox without any issues.

### **Bugs & Fixes**
In the process of developing the game buttons I encouterd a problem with the (i) elements used to add FontAwesome icons to the buttons didn't respond when clicked on and the players result ended up blank and the result was undefined, i solved this by removing the icons from the buttons.
![Validation Lighthouse Fourth Scan](assets/images/undefined.png)

## Deployment
- The website was deployed using GitHub
1. Enter repositories

![Repository](assets/readmeimg/deployStepOne.png)

2. Locate RockPaperScissors.com and click it

![The Fitness Hub](assets/readmeimg/deployStepTwo.png)

3. Go to settings

![Settings](assets/readmeimg/deployStepThree.png)

4. On the left-hand side is a section called Pages, click it

![Pages](assets/readmeimg/deployStepFour.png)
5. Select the Branch to be "Main" and click save

![Branch](assets/readmeimg/deployStepFive.png)

6. Now wait a few minutes for GitHub to build and deploy your site then refresh the page and at the top of the Pages section you will find the link to your deployed website.


![Deployd](assets/readmeimg/deployStepSix.png)

## Technonolgies used
- [HTML](https://sv.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://www.javascript.com/)
- [ColorMind](http://colormind.io/)
- [Miro](https://miro.com/)

## Credits
- [Rock, Paper & Scissors](https://sebhastian.com/rock-paper-scissors-javascript/)
- [Rock, Paper & Scissors - 2](https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/)
- [Day and Night Switch](https://www.foolishdeveloper.com/2021/11/day-and-night-mode-javascript.html)
- [Favicon instructions](https://favicon.io/favicon-converter/)
- [Favicon images](https://www.flaticon.com/free-icons/rock-paper-scissors)