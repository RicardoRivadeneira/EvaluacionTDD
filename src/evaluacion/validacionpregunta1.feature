Feature: Validación de contraseñas

  Scenario: Contraseña válida
    Given Una función de validación de contraseñas
    When El usuario introduce una contraseña "Abcdefg1"
    Then La validación debe retornar true

  Scenario: Contraseña sin letra mayúscula
    Given Una función de validación de contraseñas
    When El usuario introduce una contraseña "abcdefg1"
    Then La validación debe retornar false

  Scenario: Contraseña sin letra minúscula
    Given Una función de validación de contraseñas
    When El usuario introduce una contraseña "ABCDEFG1"
    Then La validación debe retornar false

  Scenario: Contraseña sin número
    Given Una función de validación de contraseñas
    When El usuario introduce una contraseña "Abcdefgh"
    Then La validación debe retornar false

  Scenario: Contraseña con longitud insuficiente
    Given Una función de validación de contraseñas
    When El usuario introduce una contraseña "Abc1"
    Then La validación debe retornar false
