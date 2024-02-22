import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./src/evaluacion/validacionpregunta1.feature');

const validarContrasena = (contrasena: string): boolean => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(contrasena);
};

defineFeature(feature, (test) => {
  test('Contraseña válida', ({ given, when, then }) => {
    let resultado: boolean;
    given('Una función de validación de contraseñas', () => {});

    when('El usuario introduce una contraseña "Abcdefg1"', () => {
      resultado = validarContrasena("Abcdefg1");
    });

    then('La validación debe retornar true', () => {
      expect(resultado).toBe(true);
    });
  });

  test('Contraseña sin letra mayúscula', ({ given, when, then }) => {
    let resultado: boolean;
    given('Una función de validación de contraseñas', () => {});

    when('El usuario introduce una contraseña "abcdefg1"', () => {
      resultado = validarContrasena("abcdefg1");
    });

    then('La validación debe retornar false', () => {
      expect(resultado).toBe(false);
    });
  });

  test('Contraseña sin letra minúscula', ({ given, when, then }) => {
    let resultado: boolean;
    given('Una función de validación de contraseñas', () => {});

    when('El usuario introduce una contraseña "ABCDEFG1"', () => {
      resultado = validarContrasena("ABCDEFG1");
    });

    then('La validación debe retornar false', () => {
      expect(resultado).toBe(false);
    });
  });

  test('Contraseña sin número', ({ given, when, then }) => {
    let resultado: boolean;
    given('Una función de validación de contraseñas', () => {});

    when('El usuario introduce una contraseña "Abcdefgh"', () => {
      resultado = validarContrasena("Abcdefgh");
    });

    then('La validación debe retornar false', () => {
      expect(resultado).toBe(false);
    });
  });

  test('Contraseña con longitud insuficiente', ({ given, when, then }) => {
    let resultado: boolean;
    given('Una función de validación de contraseñas', () => {});

    when('El usuario introduce una contraseña "Abc1"', () => {
      resultado = validarContrasena("Abc1");
    });

    then('La validación debe retornar false', () => {
      expect(resultado).toBe(false);
    });
  });
});
