/**
 Реализовать функцию, которая принимает любой тип данных, и преобразовывать тип boolean (при его наличии) в числовое значение.
 В качестве параметров могут быть объекты любого уровня вложенности, массивы, строки, числа и т.д.
 */

function booleanToInt(property) {
    const propertyType = typeof property;
    switch (propertyType) {
        case "boolean": return Number(property);
        case "object": {
            if (property === null) return property;
            if (Array.isArray(property)) {
                return arrayRecursionHandling(property);
            }
            return objectRecursionHandling(property);
        }
        case "string":
        case "function":
        case "bigint":
        case "number":
        case "undefined":
        case "symbol": return property;
    }
}

function arrayRecursionHandling(arr) {
    return arr.map(arrItem => booleanToInt(arrItem));
}

function objectRecursionHandling(obj) {
    for (const key in obj) {
        obj[key] = booleanToInt(obj[key]);
    }
    return obj;
}

console.log(booleanToInt('qwerty'));
console.log(booleanToInt(1));
console.log(booleanToInt(false));
console.log(booleanToInt(true));
console.log(booleanToInt([1, 'qwerty', false]));
console.log(booleanToInt([1, 'qwerty', { a: true }]));
console.log(booleanToInt({ a: { b: true }, c: false, d: 'qwerty' }));
console.log(booleanToInt({
    date1: {
        date1_1: 1,
        date1_2: [
            {
                date2_1: false,
                date2_2: 'str1',
            },
            {
                date2_3: true,
                date2_4: 'str2',
            },
            {
                date2_5: false,
                date2_6: 'str1',
            },
        ],
        date1_3: false,
        date1_4: {
            date3_1: true,
            date3_2: false,
            date3_3: 'str1',
            date3_4: 123,
        },
        date1_5: 'true',
    }
}));
