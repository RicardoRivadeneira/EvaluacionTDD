Feature: Validación de la cédula ecuatoriana

  Scenario: La cédula es válida y corresponde a la provincia de Pichincha
    Given El usuario introduce su número de cédula "1720903812"
    Then El sistema valida que la cédula es real y corresponde a la provincia "Pichincha"

  Scenario: La cédula es inválida por dígito verificador incorrecto
    Given El usuario introduce su número de cédula "1712345670"
    Then El sistema valida que la cédula es inválida

  Scenario: La cédula es inválida por código de provincia incorrecto
    Given El usuario introduce su número de cédula "2712345678"
    Then El sistema valida que la cédula es inválida
