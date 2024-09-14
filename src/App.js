import { createElement } from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <button className="newCard" onClick={handleNewCard}>add card</button>
      </div >
      <div className="aside">
        <button className="asideButton" onclick='document.location="./registration.html"'>Registration</button>
        <button className="asideButton">Log in</button>
        <button className="asideButton">switch table</button>
      </div>
      <div className="appChild" id='body'>
        
      </div>
      
      {/* <div className="footer appChild">footer</div> */}
      
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
  addTaskContent.addEventListener('click', () => addCardDescription(cardContent));        //addCardDeescription тут ранее как заглушка
  card.className="card";
  
  table.appendChild(card);
  card.appendChild(cardHead);
  card.appendChild(cardContent);
  cardHead.appendChild(taskTitle);
  cardHead.appendChild(addTaskContent);
  return console.log("clicked");
};

function openCardMenu(){

};

function addCardDescription(cardContent) {
  // Создаем новый элемент input
  let newInput = document.createElement('textarea');
  newInput.className = "taskDescription"; // Добавьте класс, если нужно
  
  // Добавляем input в cardContent
  cardContent.appendChild(newInput);
  
  console.log("Input added to cardContent");
}