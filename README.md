# Link Four
![link-four-game](https://i.imgur.com/XxMm9p6.png)
## About 
Link Four is a browser based replication of the classic game Connect Four. There are two modes - single and multiplayer. 
A defensive AI was implemented for single player mode. Players can choose which mode to begin with and simply click on a column 
to make their first move.     
## AI Mode
![computer-move](https://i.imgur.com/LYnsXra.png)

The board is first duped in order to test for the AI's win/lose condition on the board's next state. It tests all 7 potential moves that can be made, since there are only 7 columns for the AI to make a move into. If the next board state results in a win for the AI, it'll break out of the loop and drop its token into that column. Otherwise, it'll create a new duped board so it can check which column it needs to drop into in order to "block" the win for the player.  
## Architecture and Technologies 
This project was implemented with the following technologies:
* JavaScript for game logic
* HTML5 Canvas 



