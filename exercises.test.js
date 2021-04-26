import * as exercises from "./exercises.js";

//1

describe('text', () => {
  test('text', () => {
    expect(exercises.texto('This is a test')).toBe('This is a test');
  });
  test('numbers', () => {
    expect(exercises.texto(12345)).toBe(12345);
  });
  test('characters', () => {
    expect(exercises.texto("·$%&/()")).toBe("·$%&/()");
  });
});

//2

describe('sum', () => {
  test('sum numbers', () => {
    expect(exercises.suma(5,4)).toBe(9);
  });
  test('sum characters', () => {
    expect(exercises.suma('soft','ware')).toBe('software');
  });
  test('sum numbers and characters', () => {
    expect(exercises.suma(2,'be')).toBe('2be');
  });
});

//3

describe('subtraction', () => {
  test('subtract numbers', () => {
    expect(exercises.resta(5,3)).toBe(2);
  });
});

//4

describe('multiplication', () => {
  test('multiplication numbers', () => {
    expect(exercises.multiplicacion(6,8)).toBe(48);
  });
});

//5

describe('division', () => {
  test('divisor is 0', () => {
    expect(exercises.division(400,0)).toBe('No se puede dividir por 0');
  });
  test('division with numbers other than 0', () => {
    expect(exercises.division(400,100)).toBe(4);
  });
});

//6

describe('multiplication table', () => {
  test('multiplier is undefined', () => {
    expect(exercises.tablaMultiplicar(6)).toEqual([0,6,12,18,24,30,36,42,48,54,60]);
  });
  test('multiplier is defined', () => {
    expect(exercises.tablaMultiplicar(6,5)).toEqual([0,6,12,18,24,30]);
  });
});

//7

describe('exponentiation', () => {
  test('exponentiation', () => {
    expect(exercises.potencia(7,2)).toBe(49);
  });
});

//8

describe('nested', () => {
  test('nested', () => {
    expect(exercises.anidada(3,7)).toBe(58);
  });
});

//9

describe('zeros on the left', () => {
  test('zeros on the left', () => {
    expect(exercises.cerosIzq(15,5)).toBe('00015');
  });
});