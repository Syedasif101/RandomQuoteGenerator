const quotes = [
  {
    text: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
  },
  {
    text: 'Life is 10% what happens to us and 90% how we react to it.',
    author: 'Charles R. Swindoll',
  },
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: 'Your time is limited, don’t waste it living someone else’s life.',
    author: 'Steve Jobs',
  },
  { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
  { text: 'Get busy living or get busy dying.', author: 'Stephen King' },
  {
    text: 'You have within you right now, everything you need to deal with whatever the world can throw at you.',
    author: 'Brian Tracy',
  },
  {
    text: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    text: 'The only limit to our realization of tomorrow is our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'The quieter you become, the more you are able to hear.',
    author: 'Rumi',
  },
];

const colors = [
  '#FF5722',
  '#FF9800',
  '#FFC107',
  '#FFEB3B',
  '#CDDC39',
  '#8BC34A',
  '#4CAF50',
  '#009688',
  '#00BCD4',
  '#2196F3',
];

function getTimeOfDay() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 17) {
    return 'afternoon';
  } else {
    return 'evening';
  }
}

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
  const greetingElement = document.getElementById('greeting');
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  const buttonElement = document.getElementById('new-quote-btn');
  const quoteContainerElement = document.querySelector('.quote-container');

  const timeOfDay = getTimeOfDay();
  greetingElement.textContent = `Let's start our ${timeOfDay} with a new quote`;

  const initialQuote = getRandomQuote();
  const initialColor = getRandomColor();

  quoteElement.textContent = `"${initialQuote.text}"`;
  authorElement.textContent = `- ${initialQuote.author}`;

  document.body.style.backgroundColor = initialColor;
  quoteElement.style.color = initialColor;
  authorElement.style.color = initialColor;
  buttonElement.style.backgroundColor = initialColor;
  quoteContainerElement.style.backgroundColor = '#FFFFFF'; // Default color

  buttonElement.addEventListener('click', () => {
    const newQuote = getRandomQuote();
    const newColor = getRandomColor();

    quoteElement.textContent = `"${newQuote.text}"`;
    authorElement.textContent = `- ${newQuote.author}`;

    quoteElement.style.color = newColor;
    authorElement.style.color = newColor;
    buttonElement.style.backgroundColor = newColor;

    document.body.style.backgroundColor = newColor;
  });
});
