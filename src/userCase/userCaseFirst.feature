Feature: Login

  Scenario: Ingreso correcto con las credenciales válidas
    Given El usuario está en la página de inicio de sesión
    When El usuario ingresa sus credenciales válidas (nombre de usuario y contraseña)
    Then El usuario debería ser redirigido a su página de perfil
    And Debería ver un mensaje de bienvenida o su nombre de usuario en la página de perfil

  Scenario: Intento de ingreso fallido con credenciales inválidas
    Given El usuario está en la página de inicio de sesión
    When El usuario ingresa credenciales inválidas
    Then El usuario debería ver un mensaje de error indicando que el ingreso falló
