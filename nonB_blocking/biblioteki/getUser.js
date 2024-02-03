// Definicja funkcji getUser
function getUser(id, callback) {
    // Symulacja bazy danych użytkowników
    const users = {
      '123': { id: '123', name: 'John Doe' },
      '321': { id: '321', name: 'Jane Doe' }
    };
  
    // Symulacja asynchronicznego zapytania do bazy danych
    setTimeout(() => {
      const user = users[id];
      if (user) {
        callback(user); // Zwracanie użytkownika jeśli znaleziono
      } else {
        callback(null); // Zwracanie null jeśli użytkownik nie istnieje
      }
    }, 1000); // Opóźnienie 1000ms (1 sekunda) dla symulacji asynchroniczności
  }
  
  module.exports = getUser; // Eksport funkcji getUser, aby mogła być używana w innych plikach
  