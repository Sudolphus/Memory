# _Memory_

#### _A Game of Memory, 06.22.20_

#### By _**Micheal Hansen, JohnNils Olson & Kevin Davis**_

## Description

_A game of memory: click to flip the cards, and try to match._

## Specifications

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5004 | Homepage with user input form |
| **Program defines a card object** | User input: none necessary | Output: Card = {} |
| **Card objects have a value** | User input: none necessary | Output: Card = {Value = 1} |
| **Card objects can be face up or face down** | User input: none necessary | Output: Card = {Value = 1, faceup = false} |
| **Program defines a grid** | User input: none necessary | Output: Grid = {} |
| **Grid holds card objects** | User input: none necessary | Output: Grid = {Cards = []} |
| **Grid assigns IDs to cards as they are added** | User input: none necessary | Output: Grid = {Cards = [], nextID = 0} |
| **Grid can be displayed to user** | User input: Clicks new game | Output: Grid is shown |
| **Program detects when a card is clicked** | User input: Clicks a card | Output: Value = 1 |
| **Program flips the clicked card** | User input: Clicks a card | Output: Card = 1 |
| **Program detects if a second card has the same value as the first** | User input: Clicks second card | Output: Value = 2, Value = 1 |
| **Program removes both cards if they match** | User input: Clicks 2 cards with value 1 | Output: Both cards removed |
| **Program reflips both cards if they do not match** | User input: Clicks 2 cards of different value | Output: Both cards face down |
| **Program continues until all cards are removed** | User input: Matches final cards | Output: "You Win!" |



## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone {PUT_REPO_HERE}`
2. Navigate into the `{NAME_OF_DIRECTORY}` directory in Visual Studio Code or preferred text editor
`code .`
3. Get the necessary packages `npm install`.
4. Compile the code `npm run build`.
5. Open index.html in Chrome or preferred browser:
`open dist/index.html`

#### To see my live website go to {GH_PAGES_LINK_HERE}!


## Known Bugs

_None Currently_

## Support and contact details

_Please reach out through my GitHub account._

## Technologies Used

* _HTML_
* _CSS (including Bootstrap)_
* _JavaScript (including jQuery)_
* _VSCode_
* _Webpack_

### License

MIT License.

Copyright (c) 2020 **_Micheal Hansen, JohnNils Olson, & Kevin Davis_**
