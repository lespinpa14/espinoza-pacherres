Feature: Inicio de sesión en OrangeHRM
  Como usuario de OrangeHRM
  Quiero iniciar sesión en la plataforma
  Para poder gestionar mis tareas

  Scenario: Usuario inicia sesión con credenciales válidas
    Given el usuario está en la página de inicio de sesion
    When el usuario introduce "Admin" como nombre de usuario
    And el usuario introduce "admin123" como contraseña
    And el usuario hace clic en el botón de iniciar sesion
    Then el usuario debería ver la página principal