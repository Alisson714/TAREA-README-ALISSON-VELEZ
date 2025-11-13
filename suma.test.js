const { suma } = require('./index');

// Prueba unitaria básica
test('suma de 1 + 2 debe ser 3', () => {
  expect(suma(1, 2)).toBe(3);
});

// Prueba con números negativos
test('suma de -1 + 1 debe ser 0', () => {
  expect(suma(-1, 1)).toBe(0);
});

// Prueba de integración simple (simulando uso en otro módulo)
test('suma integrada en un cálculo mayor', () => {
  const resultado = suma(suma(2, 3), 4); // (2+3) + 4 = 9
  expect(resultado).toBe(9);
});