document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('#board > div')
  let plays = []
  let move = 'X'
  

  boxes.forEach((div) => {
    div.classList.add('square');        


    div.addEventListener('click', function(){
      div.textContent = move;
      plays.push(move)
      
      if (move  == 'X'){
       div.classList.add('X')
      }
      
      if (move == 'O'){
       div.classList.add('O')
      }

      move = (move === 'X') ? 'O' : 'X';
    })

  });
  
})
