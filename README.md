#Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Waly-Meissa (Waly) Ndiaye

Time spent: 4.5 hours spent in total

Link to project: https://glitch.com/edit/#!/efficacious-steel-raclette

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. **Note: Instructions said "End," so I used that instead of Stop
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

- Required Functionality:
![Required](https://cdn.glitch.global/688f077e-1a81-4fcd-8f7f-b068b7dbd852/required_codepath.gif?v=1650689074855) 

- Optional Functionality
![Optional](https://cdn.glitch.global/688f077e-1a81-4fcd-8f7f-b068b7dbd852/optional_codepath.gif?v=1650689251286)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- For the random pattern generation optional task: https://www.w3schools.com/js/js_random.asp
- For creating timer: https://www.w3schools.com/js/js_timing.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

My greatest struggle by far was implementing the timer functionality in my app. This task was a bit less intuitive to me than some of the preceding ones and the road to finishing it had many highs and lows. I lacked experience with the setTimeout and setInterval functions prior to tackling the problem, but I started by thinking of how I would approach this problem in other programming languages. This allowed me to plot out a few different ways I could attempt to solve the problem before actively coding it. To help with this, I split the problem into two parts: one was getting my timer functionality to work, and the other was displaying the timer for the user. In addition, I looked at resources like the W3Schools webpage to better grasp how the timeout/interval functions worked, and how I could eventually display a timer in HTML. Breaking down the examples step by step greatly helped improve my understanding of the task at hand.

As I worked through the problem, I built my solution incrementally, and when debugging an issue was needed, I used console.log() to see where my functions might not be working as I had intended. Eventually, I was able to finish part 1 of the problem and move on to the user interface aspect. After I had gotten a version of my code that was fully working with a timer, I did some testing on it to see if it was working well with the other functions. It was very important to make sure that my new timer did not negatively impact any of the previously implemented required/optional functionality. To my dismay, I managed to have a negative time displayed on the user side, and I debugged that issue similar to how I did previously. Eventually, I did some more stress testing and was able to come over the hurdle that was programming the timer functionality.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

A while back, I thought that most of what one could do on websites was constrained to HTML, CSS, and Javascript. Now, I know that there are so many software tools and languages one can use, and I’m curious to learn more about how one can interface HTML/CSS with other programming languages besides Javascript, Python, C++. Seeing web development through the lens of the prework exercise has made me question how complex the features I am so used to on websites truly are behind the scenes. I hope to learn how these different tools help features like the preview panel in Glitch work, how I can utilize different web development tools to complete different projects, and improve on my current knowledge in different programming languages. My first exposure to the Glitch Interface was through this very project, and working on it has been a rather enjoyable experience. In the past, I’ve briefly used Bootstrap, though I never got too much practice with it. These experiences have made me interested in exploring what other similar websites and libraries I can use in the future for web development, and made me wonder about the various advantages and disadvantages of these different tools. Though this was outside of the scope of the prework, I have lots of interest in exploring how hosting websites works, especially on popular platforms like Heroku, so I would like to delve into it as well.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

When looking at my code in retrospect, I would likely make it generally neater and more concise. I made very distinct functions for the optional components of the prework, but I could have combined some aspects better. With more experience working in Javascript, I would likely become better at styling my code and having it be more efficient.

In order to make my app more robust for the player, I would like to add login functionality to the site. By having a user input a username before they begin to play, I could work on creating elements such as a leaderboard, which could be sorted by time, overall accuracy, or other factors. Doing this would also give me the opportunity to work on improving at making databases with SQLite, which I have been learning in one of my classes this term. I’ve been using SQLite with Python, and it would be an interesting learning process to figure out how to use it with Javascript and the web app that I made. With a database, I could even add functionality that could make rounds easier or harder for a user based on how they have been doing so far, which would add a level of intensity to the game. Having varying difficulty is a feature I find rather fun in most games, so I would prioritize that given more time to work on this project. I could add to this idea by implementing more buttons so that a user could toggle between varying modes.




## Interview Recording URL Link

[My 5-minute Interview Recording](https://mit.zoom.us/rec/share/jiJ49zToa6tKArOb_TtWkP0WmyrafHI90dkcOBXLZbntFwXkuAG9A4xTnjFnaffV.k6edyE7Oaac0ZHEe)


## License

    Copyright Waly Ndiaye

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.