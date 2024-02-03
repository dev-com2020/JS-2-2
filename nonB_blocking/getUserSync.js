// getUserSync.js
function getUserSync(id) {
    const users = {
      '123': { id: '123', name: 'John Doe' },
      '321': { id: '321', name: 'Jane Doe' }
    };
  
    // Symulacja opóźnienia
    const startTime = new Date().getTime();
    while (new Date().getTime() - startTime <= 1000); // Blokuj wątek na 1 sekundę
  
    return users[id] || null; // Zwróć użytkownika lub null, jeśli nie znaleziono
  }
  
  module.exports = getUserSync;
  