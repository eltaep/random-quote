  const quotes = [
    ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Helen Keller"],
    ["The only way to do great work is to love what you do.", "Steve Jobs"],
    ["If you can dream it, you can do it.", "Walt Disney"],
    ["The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"],
    ["The only limit to our realization of tomorrow will be our doubts of today.", "Franklin D. Roosevelt"],
    ["The mind is everything. What you think you become.", "Buddha"],
    ["The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.", "Joel Brown"],
    ["The difference between ordinary and extraordinary is that little extra.", "Jimmy Johnson"],
    ["The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.", "Steve Jobs"],
    ["The best way to predict the future is to create it.", "Peter Drucker"],
    ["The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"],
    ["The journey of a thousand miles begins with a single step.", "Lao Tzu"],
    ["The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.", "Steve Jobs"],
    ["The best way to predict the future is to create it.", "Peter Drucker"],
    ["The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"],
    ["The journey of a thousand miles begins with a single step.", "Lao Tzu"],
    ["The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.", "Joel Brown"],
    ["The difference between ordinary and extraordinary is that little extra.", "Jimmy Johnson"],
    ["The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.", "Steve Jobs"],
    ["The best way to predict the future is to create it.", "Peter Drucker"],
    ["The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"],
    ["The journey of a thousand miles begins with a single step.", "Lao Tzu"],
    ["The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.", "Joel Brown"],
    ["The difference between ordinary and extraordinary is that little extra.", "Jimmy Johnson"],
    ["The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.", "Steve Jobs"],
    ["The best way to predict the future is to create it.", "Peter Drucker"],
  ];
  function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];
    document.getElementById("quote").innerHTML = quote[0];
    document.querySelector('.autor').innerHTML=quote[1]
  }
  generateQuote()
  document.getElementById("generate").onclick = generateQuote;
  