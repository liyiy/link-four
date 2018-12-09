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
   let currPlayer = "red";

   canvas.onclick = function(event) {
      let x = event.clientX;
      let y = event.clientY;
      offsetLeft = canvas.offsetLeft + 70;
      offsetTop = canvas.offsetTop + 160;
      
      if (currPlayer === "red") {
         currPlayer = "yellow";
      } else {
         currPlayer = "red";
      }

      if (offsetLeft < x && x < offsetLeft + 70) {
         column = 0;
      } else if (offsetLeft + 90 < x && x < offsetLeft + 160) {
         column = 1;
      } else if (offsetLeft + 180 < x && x < offsetLeft + 250) {
         column = 2;
      } else if (offsetLeft + 270 < x && x < offsetLeft + 340) {
         column = 3;
      } else if (offsetLeft + 360 < x && x < offsetLeft + 430) {
         column = 4;
      } else if (offsetLeft + 450 < x && x < offsetLeft + 520) {
         column = 5;
      } else if (offsetLeft + 540 < x && x < offsetLeft + 610) {
         column = 6;
      }
      dropToken(board, column, offsetLeft, offsetTop, currPlayer);
      if (isWin(board, currPlayer)) {
         context.fillStyle = "black";
         context.fillText(`${currPlayer} wins :)`, 300, 100);
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

   const drawToken = (row, column, offsetLeft, offsetTop, color) => {
      let x;
      let y;

      if (row === 5) {
         y = offsetTop + 432;
      } else if (row === 4) {
         y = offsetTop + 352;
      } else if (row === 3) {
         y = offsetTop + 272;
      } else if (row === 2) {
         y = offsetTop + 192;
      } else if (row === 1) {
         y = offsetTop + 112;
      } else {
         y = offsetTop + 32;
      }

      if (column === 0) {
         x = 105;
      } else if (column === 1) {
         x = 195;
      } else if (column === 2) {
         x = 285;
      } else if (column === 3) {
         x = 375;
      } else if (column === 4) {
         x = 465;
      } else if (column === 5) {
         x = 555;
      } else {
         x = 645;
      }

      console.log(x, y);
      context.beginPath();
      context.arc(x, y, 35, 0, 2*Math.PI);
      context.fillStyle = color;
      context.fill();
      context.closePath();
   }

   const dropToken = (board, column, offsetLeft, offsetTop, currPlayer) => {
      for (let i = 5; i >= 0; i--) {
         if (board[i][column] === null) {
            board[i][column] = currPlayer;
            drawToken(i, column, offsetLeft, offsetTop, currPlayer);
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
      for (let diagRow1 = 5; diagRow1 > 3; diagRow1--) {
         for (diagCol1 = 0; diagCol1 < 4; diagCol1++) {
            if (board[diagRow1][diagCol1] === token &&
                board[diagRow1-1][diagCol1+1] === token &&
                board[diagRow1-2][diagCol1+2] === token &&
                board[diagRow1-3][diagCol1+3] === token) {
                   return true;
                }
         }
      }

      // diagonal \ win 
      for (let diagRow2 = 5; diagRow2 > 3; diagRow2--) {
         for (diagCol2 = 6; diagCol2 > 3; diagCol2--) {
            if (board[diagRow2][diagCol2] === token &&
                board[diagRow2-1][diagCol2-1] === token &&
                board[diagRow2-2][diagCol2-2] === token &&
                board[diagRow2-3][diagCol2-3] === token) {
                   return true;
                }
         }
      }
      
      return false;
   }



});