/*Configura un array para que los valores negativos se transformen en 0. Por ejemplo, 
resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0]. */
function resetNegativos(x) {
    for(var i=0; i<x.length; i++){
        if (x[i] < 0) {
            x[i] = 0;
        }
    }
    return x;
}
const x = [1,2,-1,-3];
console.log(resetNegativos(x));

/*Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando
 *  el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) 
 * debiera dar como resultado [2,3,0]. */
function moverAdelante(arr) {
    var newArr = [];
    for(var i=0; i<arr.length -1; i++){
        newArr[i] = arr[i+1];
    }
    newArr.push(0);
    return newArr;
}
const arr = [1,2,3];
console.log(moverAdelante(arr));
/*
Configura un array para que el resultado sean los valores en el orden contrario. 
Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].
 */
function repetirValores(myArr) {
    var reverso = myArr.reverse();
    return reverso;
}
const myArr = [1,2,3];
console.log(repetirValores(myArr));

/* Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). 
Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) 
debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].*/
function valoresRepetidos(array) {
    var duplicados = [];
    for(var i=0; i<array.length; i++){
        duplicados.push(array[i],array[i]);
    }
    return duplicados;
}
const array = [4,"Ulysses", 42, false];
console.log(valoresRepetidos(array))