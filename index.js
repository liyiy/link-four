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
      console.log(board);
   };

   function newBoard() {
      let board = [];
      for(let i = 0; i < 6; i++) {
         board.push([null, null, null, null, null, null, null]);
      }
      return board;
   }

   function dropToken(board, column) {
      for (let i = 5; i >= 0; i--) {
         if (board[i][column] === null) {
            board[i][column] = "R";
            break;
         }
      }
   }

   function isWin(board, token) {
      for (let j = 0; j < 6; j++) {
         for (let k = 0; k < 4; k++) {
            if (board[j][k] === token && board[j][k+1] === token && board[j][k+2] === token) {
               return true;
            }            
         }         
      }
      return false;
   }

   // function game() {
   //    canvas.onclick = function(event) {
   //    let x = event.clientX;
   //    console.log(column);
   // };

   //    dropToken(board, column);
   //    console.log(board);

   // }
   // if (isWin(board, "R") === false) {
   //    canvas.onclick = function (event) {
   //       let x = event.clientX;
   //       if (75 < x && x < 150) {
   //          column = 0;
   //       } else if (170 < x && x < 240) {
   //          column = 1;
   //       } else if (260 < x && x < 330) {
   //          column = 2;
   //       } else if (350 < x && x < 420) {
   //          column = 3;
   //       } else if (440 < x && x < 510) {
   //          column = 4;
   //       } else if (530 < x && x < 600) {
   //          column = 5;
   //       } else if (620 < x && x < 690) {
   //          column = 6;
   //       } 
   //    };
   //    dropToken(board, column);
   // }
   //  console.log(board);

});