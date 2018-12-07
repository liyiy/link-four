document.addEventListener("DOMContentLoaded", () => {
   const canvas = document.getElementById("game-canvas");
   canvas.width = 750;
   canvas.height = 800;

   const context = canvas.getContext("2d");

   var img = new Image();
   img.onload = function() {
      context.drawImage(img, canvas.width/2 - img.width/2, canvas.height/2 - img.height/2);
   };
   img.src = "./Connect4Board.png";

   let column;
   let board = newBoard();

   canvas.onclick = function(event) {
      let x = event.clientX;
      if (75 < x && x < 150) {
         column = 0;
      } else if (170 < x && x < 240) {
         column = 1;
      } else if (260 < x && x < 330) {
         column = 2;
      } else if (350 < x && x < 420) {
         column = 3;
      } else if (440< x && x < 510) {
         column = 4;
      } else if (530 < x && x < 600) {
         column = 5;
      } else if (620 < x && x < 690) {
         column = 6;
      }
      dropToken(board, column);
      if (isWin(board, "R")) {
         console.log("You've won");
      }
      console.log(board);
   };

   function newBoard() {
      let board = [];
      for(let i = 0; i < 6; i++) {
         board.push([null, null, null, null, null, null, null]);
      }
      return board;
   }

   const drawToken = (row, column) => {
      let x;
      let y;
      if (row === 5) {
         y = 600;
      } else if (row === 0) {
         y = 200;
      } else {
         y = (200 + (row * 80));
      }

      if (column === 0) {
         x = 105;
      } else if (column === 6) {
         x = 645;
      } else {
         x = (105 + (column * 90));
      }
      context.beginPath();
      context.arc(x, y, 35, 0, 2*Math.PI);
      context.fillStyle = "red";
      context.fill();
      context.closePath();
   }

   const dropToken = (board, column) => {
      for (let i = 5; i >= 0; i--) {
         if (board[i][column] === null) {
            board[i][column] = "R";
            drawToken(i, column);
            break;
         }
      }
   }

   function isWin(board, token) {
      // horizontal win 
      for (let j = 0; j < 6; j++) {
         for (let k = 0; k < 4; k++) {
            if (board[j][k] === token && board[j][k+1] === token && board[j][k+2] === token && board[j][k+3] === token) {
               return true;
            }            
         }         
      }
   
      // vertical win 
      for (let l = 5; l > 3; l--) {
         for (let m = 0; m < 7; m++) {
            if (board[l][m] === token && board[l-1][m] === token && board[l-2][m] === token && board[l-3][m] === token) {
               return true;
            }
         }
      }

      // diagonal / win
      // for (let d1 = 0; d1 < 4; )
      return false;
   }



});