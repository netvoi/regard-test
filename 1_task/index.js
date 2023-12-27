/**
 Написать функцию, которая будет принимать объект и копировать из него только те свойства, которые прописаны в условиях. Изменение этих ключей в новом объекте не должны менять значения в старом. Пример вызова функции copy(obj, ['key1.key2.key3', 'key2.key1']).
 Второй аргумент функции - это массив путей, по которым нужно выполнять копирование. Этот аргумент может отсутствовать в объекте, например:

 a = {
 b: null
 }

 a.b.c

 Пример
 const a = { b: { c: 3, d: [3, 4] }, a: 12 }
 const b = copy(a, ['a.a', 'b.c', 'b.d.0', 'b.c.e'])
 b = { b: { c: 3, d: [3] } }
 */

function copy(obj, propertiesPaths) {
    const result = {};

    propertiesPaths.forEach(propertyPath => {
        const keys = propertyPath.split(".");
        let copyObj = obj;
        let tempResult = result;

        keys.forEach((key, index) => {
            if (copyObj && typeof copyObj === "object" && copyObj.hasOwnProperty(key) ) {
                copyObj = copyObj[key];
                if (index === keys.length - 1) {
                    tempResult[key] = copyObj;
                } else {
                    tempResult[key] = tempResult[key] || (Array.isArray(copyObj) ? [] : {});
                    tempResult = tempResult[key];
                }
            } else {
                copyObj = undefined;
            }
        });
    });
    cleanupEmptyObjects(result);

    return result;
}

function cleanupEmptyObjects(obj) {
    for (const key in obj) {
        if (typeof obj[key] === "object" && Object.keys(obj[key]).length === 0) {
            delete obj[key];
        } else if (typeof obj[key] === "object") {
            cleanupEmptyObjects(obj[key]);
        }
    }
}


const a = { b: { c: 3, d: [3, 4] }, a: 12 };
const b = copy(a, ['a.a', 'b.c', 'b.d.0', 'b.c.e']);
console.log("b", b);
