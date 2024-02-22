Feature: Validación de cédula ecuatoriana

  Scenario Outline: La cédula es válida y corresponde a la provincia indicada
    Given El usuario introduce su número de cédula "<0203040506>"
    Then El sistema valida que la cédula es real y corresponde a la provincia "<Bolívar>"

    Examples:
      | cedula       | provincia  |
      | 0102030405   | Azuay      |
      | 0203040506   | Bolívar    |
      | 0304050607   | Cañar      |
      | 0405060708   | Carchi     |
      | 0506070809   | Cotopaxi   |
      | 0607080910   | Chimborazo |
      | 0708091011   | El Oro     |
      | 0809101112   | Esmeraldas |
      | 0901011213   | Guayas     |
      | 1001021314   | Imbabura   |
      | 1101031415   | Loja       |
      | 1201041516   | Los Ríos   |
      | 1301051617   | Manabí     |
      | 1401061718   | Morona Santiago |
      | 1501071819   | Napo       |
      | 1601081920   | Pastaza    |
      | 1701092021   | Pichincha  |
      | 1801102122   | Tungurahua |
      | 1901112223   | Zamora Chinchipe |
      | 2201122324   | Sucumbíos  |
      | 2401132425   | Orellana   |
      | 2101142526   | Santa Elena|
      | 2301152627   | Santo Domingo de los Tsáchilas |
