Feature: Cálculo de descuento en compras

  Scenario: Descuento para Cliente Regular
    Given Un total de compra de 100 $USD
    And Un cliente de tipo "regular"
    When Calculamos el descuento aplicable
    Then El descuento debe ser 0 $USD

  Scenario: Descuento para Cliente VIP
    Given Un total de compra de 100 $USD
    And Un cliente de tipo "vip"
    When Calculamos el descuento aplicable
    Then El descuento debe ser 10 $USD

  Scenario: Descuento para Compra Mayor a 500 $USD para Cliente VIP
    Given Un total de compra de 600 $USD
    And Un cliente de tipo "vip"
    When Calculamos el descuento aplicable
    Then El descuento debe ser 60 $USD

  Scenario: Descuento para Cliente Nuevo
    Given Un total de compra de 100 $USD
    And Un cliente de tipo "nuevo"
    When Calculamos el descuento aplicable
    Then Debería mostrar un error indicando que no se aplica descuento
