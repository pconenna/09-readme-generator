# Weather Dashboard
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  The weather dashboard shows weather information for a city entered by the user in the search bar. The top card shows the current temperature, humidity level, and wind speed. The forecast cards show the information for the next five days. One thing I should explain is that the Open Weather api returns the forcast for each of the next five days in intervals of three hours. I used the data retruned for noon of each day in my forecast. There is also a search history. When the user types a city name into the search bar and presses the button, a button with that city's name will appear in th ehistory. They can then press the button for information on that city instead of typing it in again.

  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#contribute)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation
  Link to app: https://pconenna.github.io/06-weather-dashboard/ 

  ## Usage
  when the user opens the page in a new session, they will see placeholder content. If there are items in their search history, the buttons will be on the page becasue the serach history is stored in local storage. The user can click a button in their history if they have any items. They can also type a city name in the search bar and press the button or enter on their keyboard. They do not need to worry about case senstivity. There is a bug with the search history. Typing New York to get New York City will give the correct result. However,it will go into the history as New york County, and clicking on it will retrun results for Carnegie Hill, NY. To get the right result again the user has to retype New york. When the user enters their query, they will see the current weather in the top ccard and the forecast in the 5 forecast cards.

  ## Contribute
  please make a new branch to push changes

  ## Testing
  n/a
  
  ## Questions
  Contact me if you have additional questions.
  Github: https://github.com/pconenna

  Email: peterconenna13@gmail.com


