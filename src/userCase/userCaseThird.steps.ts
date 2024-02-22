import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./src/userCase/validacionCedula.feature');

defineFeature(feature, (test) => {
    let cedulaIntroducida: string;

    test('La cédula es válida y corresponde a la provincia de Pichincha', ({ given, then }) => {
        given(/^El usuario introduce su número de cédula "([^"]*)"$/, (cedula: string) => {
            cedulaIntroducida = cedula;
        });

        then(/^El sistema valida que la cédula es real y corresponde a la provincia "([^"]*)"$/, (provincia: string) => {
            expect(validarCedula(cedulaIntroducida)).toBe(true);
            expect(validarProvincia(cedulaIntroducida)).toBe(provincia);
        });
    });

    test('La cédula es inválida por dígito verificador incorrecto', ({ given, then }) => {
        given(/^El usuario introduce su número de cédula "([^"]*)"$/, (cedula: string) => {
            cedulaIntroducida = cedula;
        });

        then('El sistema valida que la cédula es inválida', () => {
            expect(validarCedula(cedulaIntroducida)).toBe(false);
        });
    });

    test('La cédula es inválida por código de provincia incorrecto', ({ given, then }) => {
        given(/^El usuario introduce su número de cédula "([^"]*)"$/, (cedula: string) => {
            cedulaIntroducida = cedula;
        });

        then('El sistema valida que la cédula es inválida', () => {
            expect(validarCedula(cedulaIntroducida)).toBe(false);
        });
    });
});

function validarCedula(cedula: string): boolean {
    if (cedula.length !== 10) {
        return false;
    }
    let total = 0;
    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    for (let i = 0; i < 9; i++) {
        let valor = parseInt(cedula.charAt(i)) * coeficientes[i];
        if (valor >= 10) {
            valor -= 9;
        }
        total += valor;
    }
    total = total % 10 !== 0 ? 10 - total % 10 : 0;
    return total === parseInt(cedula.charAt(9));
}

function validarProvincia(cedula: string): string {
    const provincias: { [key: string]: string } = {
        '01': 'Azuay', '02': 'Bolívar', '03': 'Cañar', '04': 'Carchi',
        '05': 'Cotopaxi', '06': 'Chimborazo', '07': 'El Oro', '08': 'Esmeraldas',
        '09': 'Guayas', '10': 'Imbabura', '11': 'Loja', '12': 'Los Ríos',
        '13': 'Manabí', '14': 'Morona Santiago', '15': 'Napo', '16': 'Pastaza',
        '17': 'Pichincha', '18': 'Tungurahua', '19': 'Zamora Chinchipe',
        '22': 'Sucumbíos', '23': 'Santa Elena', '24': 'Santo Domingo de los Tsáchilas',
        '21': 'Orellana'
    };
    const codigoProvincia = cedula.substring(0, 2);
    return provincias[codigoProvincia] || 'Invalid';
}

