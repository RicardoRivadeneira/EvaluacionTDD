import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./src/evaluacion/validacionpregunta2.feature');

const calcularDescuento = (totalCompra: number, tipoCliente: string): number | Error => {
    //Uso al cliente VIP como referencia, ya que es a quien se le aplica el descuento
    if (tipoCliente === "vip") {
    if (totalCompra > 500) {
      return totalCompra * 0.1; 
    }
    return totalCompra * 0.1;
  } else if (tipoCliente === "regular") {
    return 0;
  }
  throw new Error("No se aplica descuento para clientes nuevos");
};

defineFeature(feature, (test) => {
  let resultado: number | Error;
  let totalCompra: number;
  let tipoCliente: string;

  beforeEach(() => {
    resultado = 0; 
    totalCompra = 0;
    tipoCliente = '';
  });

  test('Descuento para Cliente Regular', ({ given, when, then }) => {
    given(/^Un total de compra de (\d+) \$USD$/, (total) => {
      totalCompra = Number(total);
    });

    given('Un cliente de tipo "regular"', () => {
      tipoCliente = "regular";
    });

    when('Calculamos el descuento aplicable', () => {
      resultado = calcularDescuento(totalCompra, tipoCliente);
    });

    then(/^El descuento debe ser (\d+) \$USD$/, (descuentoEsperado) => {
      expect(resultado).toEqual(Number(descuentoEsperado));
    });
  });

  test('Descuento para Cliente VIP', ({ given, when, then }) => {
    given(/^Un total de compra de (\d+) \$USD$/, (total) => {
      totalCompra = Number(total);
    });

    given('Un cliente de tipo "vip"', () => {
      tipoCliente = "vip";
    });

    when('Calculamos el descuento aplicable', () => {
      resultado = calcularDescuento(totalCompra, tipoCliente);
    });

    then(/^El descuento debe ser (\d+) \$USD$/, (descuentoEsperado) => {
      expect(resultado).toEqual(Number(descuentoEsperado));
    });
  });

  test('Descuento para Compra Mayor a 500 $USD para Cliente VIP', ({ given, when, then }) => {
    given(/^Un total de compra de (\d+) \$USD$/, (total) => {
      totalCompra = Number(total);
    });

    given('Un cliente de tipo "vip"', () => {
      tipoCliente = "vip";
    });

    when('Calculamos el descuento aplicable', () => {
      resultado = calcularDescuento(totalCompra, tipoCliente);
    });

    then(/^El descuento debe ser (\d+) \$USD$/, (descuentoEsperado) => {
      expect(resultado).toEqual(Number(descuentoEsperado));
    });
  });

  test('Descuento para Cliente Nuevo', ({ given, when, then }) => {
    given(/^Un total de compra de (\d+) \$USD$/, (total) => {
      totalCompra = Number(total);
    });

    given('Un cliente de tipo "nuevo"', () => {
      tipoCliente = "nuevo";
    });

    when('Calculamos el descuento aplicable', () => {
      try {
        resultado = calcularDescuento(totalCompra, tipoCliente);
      } catch (error) {
        resultado = error as Error; 
      }
    });

    then('Debería mostrar un error indicando que no se aplica descuento', () => {
      expect(resultado).toBeInstanceOf(Error);
      expect((resultado as Error).message).toEqual('No se aplica descuento para clientes nuevos');
    });
  });
});
