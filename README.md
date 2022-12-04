# Pig Dice
#### By Richelle Thorpe & Chloe O'Neil
#### Play pig dice online with friends

## Technologies Used
- HTML
- CSS
- BOOTSTRAP
- JAVA SCRIPT
- MARKDOWN

## Description


## Setup/Installation Requirements
- Clone this repository to your desktop.
- Navigate to the top level of the directory.
- Open index.html in your browser.

## Tests

Describe: rollDice ()
Test: "It will display a number between 1 and 6"
Code: rollDice ()
Expected Output: A number between 1-6

Describe: scoreAmount (roll)
Test: "If a 1 is rolled it returns 0, else it returns roll amount"
Code:scoreAmount(1)
Expected Output:0

Describe: Player.rollTotal(roll)
Test: "If roll amount equals something other than 1, next roll is added to that number"
Code: Player.rollTotal(5)
      Player.rollTotal(4)
Expected Output: 9

Describe: Player.rollTotal(roll)
Test: "If roll ends with "
Code: Player.rollTotal(5)
      Player.rollTotal(4)
      Player.rollTotal(1)
Expected Output: 0



## Known bugs

## License information
Copyright 2022 Richelle Thorpe & Chloe O'Neil;
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

