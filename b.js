document.addEventListener('DOMContentLoaded', () => {
    // Select the buttons and the paragraph
    const firstButton = document.getElementById('firstButton');
    const secondButton = document.getElementById('secondButton');
    const thirdButton = document.getElementById('thirdButton');
    const message = document.getElementById('message');
  
    // Add an event listener to the first button
    firstButton.addEventListener('click', () => {
      message.textContent = 'Hi, Isaani';
    });
  
    // Add an event listener to the second button
    secondButton.addEventListener('click', () => {
      message.textContent = 'That I have to say you something';
    });

    thirdButton.addEventListener('click', () => {
        message.textContent = 'Isaani Modaz...';
      });
  });
  