Para ejecutar alguna prueba en concreto, como la validación de la Pregunta1, se debe de usar el comando: 
    npm test validacionpregunta1.steps.ts

Lo mismo para ejecutar la segunda pregunta de validación:
    npm test validacionpregunta2.steps.ts

Si se desea mandar a ejecutar todo en conjunto se puede realizar un:
    npm test

La diferencia entre apuntar la ruta del archivo y el no colocarla, es porque así saldrá las validaciones que se han aprobado 
y las que no se han aprobado, en este caso si se coloca el npm test saldrá el numero de test realizados, pero sin indicar los
test hechos uno por uno.

El archivo validacion1.spect.ts es lo mismo que el archivo validacionpregunta1.steps.ts, solo que cambia entre spect/steps
pero devuelve lo mismo y funciona en la misma manera.