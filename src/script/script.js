//FOREACH()
function newForEach(array, callback) {
    for (let index = 0; index < array.length; index++){
        const currentValue = array[index]
        callback(currentValue,index,array)
    }
}

//ARRAY PARA TESTE
const testArray = [1,2,3,4,5]

//MAP
const testNewMap = (test)=>{
    const callback = a =>a*2
    const esperado = test.map(callback).toString()
    console.assert(newMap(test,callback).toString()===esperado,
    `Função: newMap`,
    `Resultado: ${newMap(test,callback).toString()}`,
    `Esperado: ${esperado}`
    )
}

function newMap(array, callback) {
    const newArray = []
    for (let index = 0; index < array.length; index++){
        const currentValue = array[index]
        newArray.push(callback(currentValue,index,array))
    }
    return newArray
}
testNewMap(testArray)

//FILTER
const testNewFilter = (test)=>{
    const callback = a =>a%2===0
    const esperado = test.filter(callback).toString()
    console.assert(newFilter(test,callback).toString()===esperado,
    `Função: newFilter`,
    `Resultado: ${newFilter(test,callback).toString()}`,
    `Esperado: ${esperado}`
    )
}

function newFilter(array, callback) {
    const newArray = []
    for (let index = 0; index < array.length; index++){
        const currentValue = array[index]
        if(callback(currentValue,index,array))
            newArray.push(currentValue)
    }
    return newArray
}
testNewFilter(testArray)

//FIND
const testNewFind = (test)=>{
    const callback = a =>a%2===0
    const esperado = test.find(callback).toString()
    console.assert(newFind(test,callback).toString()===esperado,
    `Função: newFind`,
    `Resultado: ${newFind(test,callback).toString()}`,
    `Esperado: ${esperado}`
    )
}

function newFind (array, callback) {
    for (let index = 0; index < array.length; index++){
        const currentValue = array[index]
        if(callback(currentValue,index,array))
        return currentValue
    }
}
testNewFind(testArray)

//FINDINDEX
const testNewFindIndex = (test)=>{
    const callback = a =>a%2===0
    const esperado = test.findIndex(callback).toString()
    console.assert(newFindIndex(test,callback).toString()===esperado,
    `Função: newFindIndex`,
    `Resultado: ${newFindIndex(test,callback).toString()}`,
    `Esperado: ${esperado}`
    )
}

function newFindIndex (array, callback) {
    for (let index = 0; index < array.length; index++){
        const currentValue = array[index]
        if(callback(currentValue,index,array))
        return index
    }
}
testNewFindIndex(testArray)

//REDUCE
const testNewReduce = (test)=>{
    const callback = (a,b) => a+b
    const initialValue = null
    const esperado = test.reduce(callback,initialValue).toString()
    console.assert(newReduce(test,callback,initialValue).toString()===esperado,
    `Função: newReduce`,
    `Resultado: ${newReduce(test,callback,initialValue).toString()}`,
    `Esperado: ${esperado}`
    )
}

function newReduce (array,callback,initialValue) {
    let acc = initialValue===null?array[0]:initialValue
    let initialIndex = initialValue===null?1:0
    for (let index = initialIndex; index < array.length; index++){
        const currentValue = array[index]
        acc = callback(acc,currentValue,index,array)
    }
    return acc
}
testNewReduce(testArray)

//SOME
const testNewSome = (test)=>{
    const callback = a =>a%2===0
    const esperado = test.some(callback).toString()
    console.assert(newSome(test,callback).toString()===esperado,
    `Função: newSome`,
    `Resultado: ${newSome(test,callback).toString()}`,
    `Esperado: ${esperado}`
    )
}

function newSome(array, callback) {
    for (let index = 0; index < array.length; index++){
        const currentValue = array[index]
        if(callback(currentValue,index,array))
            return true
    }
}
testNewSome(testArray)

//EVERY
const testNewEvery = (test)=>{
    const callback = a =>a%2===0
    const esperado = test.every(callback).toString()
    console.assert(newEvery(test,callback).toString()===esperado,
    `Função: newEvery`,
    `Resultado: ${newEvery(test,callback).toString()}`,
    `Esperado: ${esperado}`
    )
}

function newEvery(array, callback) {
    for (let index = 0; index < array.length; index++){
        const currentValue = array[index]
        if(!callback(currentValue,index,array))
            return false
    }
    return true
}
testNewEvery(testArray)

//FILL
const testNewFill = (test,a,b,c)=>{
    const esperado = test.fill(a,b,c).toString()
    console.assert(newFill(test,a,b,c).toString()===esperado,
    `Função: newFill`,
    `Resultado: ${newFill(test,a,b,c).toString()}`,
    `Esperado: ${esperado}`
    )
}

function newFill(array,a,b=0,c=array.length) {
    if(b<0){
        b=array.length+b    
    }
    if(c<0){
        c=array.length+c    
    }
    for (let index = b; index < c; index++){
        array[index] = a
    }
    return array
}
testNewFill(testArray,2,1,3)

//INCLUDES
const testNewIncludes = (test,a,b)=>{
    const esperado = test.includes(a,b).toString()
    console.assert(newIncludes(test,a,b).toString()===esperado,
    `Função: newIncludes`,
    `Resultado: ${newIncludes(test,a,b).toString()}`,
    `Esperado: ${esperado}`
    )
}

function newIncludes(array,a,b=0) {
    if(b<0){
        b = array.length+b
    }
    for (let index = b; index < array.length; index++){
        if(a===array[index])
            return true
    }
    return false
}
testNewIncludes(testArray,3,-3)

