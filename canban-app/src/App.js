import { createElement } from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="header appChild">
        <button className="newCard" onClick={handleNewCard}>add card</button>
      </div>
      <div className="aside appChild">
      <button className="switchTable">switch table</button>
      </div>
      <div className="appChild" id='body'>
        
      </div>
      
      <div className="footer appChild">footer</div>
      
    </div>
  );
}

export default App;



function handleNewCard(){
  const table=document.querySelector('#body');

  let card=document.createElement('div');
  let cardContent=document.createElement('div');
  let cardHead=document.createElement('div');
  let taskTitle= document.createElement('input');
  let addTaskContent= document.createElement('button');

  cardHead.className="cardHead";
  taskTitle.className="taskTitle";
  cardContent.className="cardContent";
  addTaskContent.className="addTaskContent";
  addTaskContent.addEventListener('click', () => addCardDescription(cardContent));
  card.className="card";
  
  table.appendChild(card);
  card.appendChild(cardHead);
  card.appendChild(cardContent);
  cardHead.appendChild(taskTitle);
  cardHead.appendChild(addTaskContent);
  return console.log("clicked");
};



function addCardDescription(cardContent) {
  // Создаем новый элемент input
  let newInput = document.createElement('textarea');
  newInput.className = "taskDescription"; // Добавьте класс, если нужно
  
  // Добавляем input в cardContent
  cardContent.appendChild(newInput);
  
  console.log("Input added to cardContent");
}