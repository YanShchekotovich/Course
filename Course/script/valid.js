document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Проверка валидации
    if (this.checkValidity()) {
      // вывод сообщения о успешной отправке
      document.getElementById("success-message").style.display = "block";
  
      // Закрытие окна через время
      setTimeout(function() {
        document.getElementById("modal").style.display = "none";
      }, 2000);
    }
  });