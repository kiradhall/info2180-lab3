document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('#board > div')
//let board = document.getElementById("board");
boxes.forEach((div, i) => {
    div.classList.add('square');})
  
});