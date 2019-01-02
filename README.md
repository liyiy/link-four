# Link Four
[live](https://liyiy.github.io/link-four/)

![link-four-game](https://i.imgur.com/XxMm9p6.png)
## About 
Link Four is a browser based replication of the classic game Connect Four. There are two modes - single and multiplayer. 
A defensive AI was implemented for single player mode. Players can choose which mode to begin with and simply click on a column 
to make their first move.     
## AI Mode
```javascript
    const computerMove = (board, offsetTop) => {

      let moveCol;

      for (let column = 0; column < 7; column++) {
         let boardDup = deepDup(board);
         possibleDropToken(boardDup, column, "yellow");
         if (isWin(boardDup, "yellow")) {
            moveCol = column;
            break;
         } else {
            let boardDup2 = deepDup(board);
            possibleDropToken(boardDup2, column, "red");
            if (isWin(boardDup2, "red")) {
               moveCol = column;
               break;
            }
         }
      }

      if (moveCol) {
         dropToken(board, moveCol, offsetTop, "yellow");
      } else {
         dropToken(board, Math.floor(Math.random() * 7), offsetTop, "yellow");
      }

      if(isWin(board,"yellow")) {
         context.fillStyle = "#3f6db5";
         context.fillText("YOU LOST", 300, 700);
      }

    };
 ```
<!---![comuter-move](https://i.imgur.com/LYnsXra.png)--->

The board is first duped in order to test for the AI's win/lose condition on the board's next state. It tests all 7 potential moves that can be made, since there are only 7 columns for the AI to make a move into. If the next board state results in a win for the AI, it'll break out of the loop and drop its token into that column. Otherwise, it'll create a new duped board so it can check which column it needs to drop into in order to "block" the win for the player.  
## Architecture and Technologies 
This project was implemented with the following technologies:
* JavaScript for game logic
* HTML5 Canvas 



