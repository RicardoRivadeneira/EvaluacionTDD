Feature: Gestión de saldo en cuentas bancarias

  Scenario: El saldo inicial de la cuenta debe ser 0
    Given una nueva cuenta bancaria creada
    Then el saldo de la cuenta debe ser 0

  Scenario: El saldo de la cuenta no puede ser negativo
    Given una cuenta bancaria con saldo positivo
    When se intenta retirar una cantidad mayor al saldo disponible
    Then la operación debe ser rechazada
    And el saldo de la cuenta no debe cambiar
