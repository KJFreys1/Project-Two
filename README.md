# Project Overview


## Project Description

This is a remake of the game "Solitaire". It uses an external API for card information and images and uses this date to replicate the classical table-top game we all know and love.

## Project Links

- [GitHub](https://git.generalassemb.ly/KJFreys1/project-2)
- [deployment](https://thirsty-tereshkova-fcfa2a.netlify.com)

## Wireframes

- [wireframe](https://docs.google.com/drawings/d/1tzUNoerIn4hL4Ir4ngrA0y9HhLIz0D0M1hx8u5q2z8k/edit?usp=sharing)

App: Refers to other components and manages styling:
- Title: Creates a title page with instructions and path to start games:
	- Instructions: Explain the rules and how to play the game.
	- Board: Container for main game components as well as any functions/state shared by multiple child components:
		- Score: Displays current score plus timer.
		- Columns: Holds shared code for Deck and Table:
			- Deck: Holds interactable deck that display 3 cards at a time to be played.
			- Table: Allows player to place Aces from Deck or Column to score points.
			- Card: Holds the information (image, suit, value) for the specific card called on or needed by parent and sibling components.

### MVP/PostMVP  

#### MVP EXAMPLE
- Fetch external API
- Display cards on screen
- Allow user to move cards to a correct location

#### PostMVP EXAMPLE

- Add winning mechanism
- Add styling

## Time Frames

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setting up API | H | 2hrs| ~30min | ~30min |
| Functionality | H | 16hrs| ~20hrs | ~20hrs |
| Styling | H | 10hrs| ~10hrs | ~10hrs |
| Total | H | 28hrs | ~31hrs | ~31hrs |

## Code Snippet

This bit of code allowed me to have a clean looking timer present in the Score component that modelled other classic stopwatch formats. An example of this is "3:31.4" for 3 minutes, 31 seconds, and 4/10s of a second. It also keeps a 0 as a placeholder to keep its look. For example, it would show "1:03.0" rather than "1:3".

```
let newTimer = Math.round(this.state.timer * 10 + 1) / 10
if (newTimer < 10) {
    space = '0'
}
if (newTimer % 1 === 0) {
    newTimer = newTimer + '.0'
}
if (newTimer === '60.0') {
    minute += 1
    newTimer = '0.0'
}
```

## Issues and Resolutions

Syntactical issues were not present during the making of this project. However,I did run into several complications with manipulation of state through sibling components (ie. moving a card from the Deck component over to the Table or Columns component). The solution to this was refractoring my code, moving state and functions up to the parent component (Board) to be maniuplated and then passed back down to the child components.
