document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('#board > div')
  const status = document.getElementById('status')
  const originalStatus = status.textContent;
  
  let move = 'X'

  const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8], [0,4,8],[2,4,6]]
  
  function didWin(){
    for (let i = 0; i in wins; i++){  

      if (boxes[wins[i][0]].classList.contains('X') && boxes[wins[i][1]].classList.contains('X') && boxes[wins[i][2]].classList.contains('X')) {
        console.log('Win');
        status.classList.add('you-won')
        status.textContent = "Congratulations! X is the Winner!"
        return true
      };

      if (boxes[wins[i][0]].classList.contains('O') && boxes[wins[i][1]].classList.contains('O') && boxes[wins[i][2]].classList.contains('O')) {
        console.log('Win')
        status.classList.add('you-won')
        status.textContent = "Congratulations! O is the Winner!"
        return true
        }
    }
  };

  boxes.forEach((div) => {
    div.classList.add('square');  

    div.addEventListener('mouseover', function(div) {
      div.target.classList.add('hover');
    });

    div.addEventListener('mouseout', function(div) {
      div.target.classList.remove('hover');
    });

    div.addEventListener('click', function(){
      
      if (div.textContent != ''){
        return
      }

      div.textContent = move;

      if (move  == 'X'){
       div.classList.add('X')
      }
      
      if (move == 'O'){
       div.classList.add('O')
      }

      if (didWin()){
        boxes.forEach((div) =>{
          if (div.textContent == ''){
            div.textContent = ' ';
          }
        })
      }

      move = (move === 'X') ? 'O' : 'X'; 
    })

  });

  function reset(){
    status.classList.remove('you-won');
    status.textContent = originalStatus;

    boxes.forEach((div) => {
      div.textContent = "";
      div.classList = 'square'
    })
  }

  const NewGame = document.querySelector('.btn');

  NewGame.addEventListener('click', e => {
    e.preventDefault();
    reset();})

});
