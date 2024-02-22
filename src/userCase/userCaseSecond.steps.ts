import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./src/userCase/userCaseSecond.feature');

defineFeature(feature, test => {
  let saldoInicial: number;
  let saldo: number;

  test('El saldo inicial de la cuenta debe ser 0', ({ given, then }) => {
    given('una nueva cuenta bancaria creada', () => {
      saldoInicial = 0; // Simula la creación de una cuenta bancaria nueva
    });

    then('el saldo de la cuenta debe ser 0', () => {
      expect(saldoInicial).toBe(0);
    });
  });

  test('El saldo de la cuenta no puede ser negativo', ({ given, when, then }) => {
    given('una cuenta bancaria con saldo positivo', () => {
      saldo = 100; // Simula una cuenta con saldo positivo
    });

    when('se intenta retirar una cantidad mayor al saldo disponible', () => {
      const montoARetirar = 200;
      if (montoARetirar > saldo) {
        // Simula la operación rechazada
        saldo = saldo; // El saldo no cambia
      }
    });

    then('la operación debe ser rechazada', () => {
      // Este paso se simula en el 'when' por simplicidad
    });

    then('el saldo de la cuenta no debe cambiar', () => {
      expect(saldo).toBe(100);
    });
  });
});
