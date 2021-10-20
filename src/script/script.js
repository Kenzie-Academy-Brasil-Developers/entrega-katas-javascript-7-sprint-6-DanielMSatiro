//FOREACH()
function newForEach(array, callback) {
    for (let index = 0; index < array.length; index++){
        const currentValue = array[index]
        callback(currentValue,index,array)
    }
}

//ARRAY PARA TESTE
const testArray = [1,2,3,4,5]

/* NOTA: Alguns métodos, de acordo com o mdn, não possuem callback
 como parâmetro de entrada. Então, não compreendi como fazer
  callback internamente nestes casos. Tentei reproduzir o melhor que eu
  eu acredito que poderia acontecer por "baixo dos panos".
  Se houver uma forma diferente, gostaria de apoio de um coach
  para me ajudar na compreensão. Para todos os casos tentei programar
  um teste simples antes de fazer a função em si. Outro ponto é o thisArg,
  que é um parâmetro opcional em algumas funções. Mas, não tentei reproduzir
  nesta tarefa, pois acredito que não era o foco dela. Se for, gostaria
  de um auxílio neste caso também.*/

//MAP
//--------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------
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

//INDEXOF
//--------------------------------------------------------------------------------------------------------------
const testNewIndexOf = (test,a,b)=>{
    const esperado = test.indexOf(a,b).toString()
    console.assert(newIndexOf(test,a,b).toString()===esperado,
    `Função: newIndexOf`,
    `Resultado: ${newIndexOf(test,a,b).toString()}`,
    `Esperado: ${esperado}`
    )
}

function newIndexOf(array,a,b=0) {
    if(b<0){
        b = array.length+b
    }
    for (let index = b; index < array.length; index++){
        if(a===array[index])
            return index
    }
    return -1
}
testNewIndexOf(testArray,3,1)

//CONCAT
//--------------------------------------------------------------------------------------------------------------
const testNewConcat = (test,a,b)=>{
    const esperado = JSON.stringify(test.concat(a,b))
    console.assert(JSON.stringify(newConcat(test,a,b))===esperado,
    `Função: newConcat`,
    `Resultado: ${JSON.stringify(newConcat(test,a,b))}`,
    `Esperado: ${esperado}`
    )
}

function newConcat(...arguments) {
    let newArray = [...arguments[0]]
    for (let i = 1; i < arguments.length; i++){
        if(Array.isArray(arguments[i])){
            for(let j = 0; j < arguments[i].length; j++){
                newArray.push(arguments[i][j])
            }
        } else {
            newArray.push(arguments[i])
        }
    }
    return newArray
}
testNewConcat(testArray,3,[2,3,5],[2,2,2,2])

//JOIN()
//--------------------------------------------------------------------------------------------------------------
const testNewJoin = (test,a)=>{
    const esperado = test.join(a)
    console.assert(newJoin(test,a)===esperado,
    `Função: newJoin`,
    `Resultado: ${newJoin(test,a)}`,
    `Esperado: ${esperado}`
    )
}

function newJoin(array,a) {
    let string = ''
    for(let i = 0; i < array.length; i++){
        string+= array[i].toString()
        if(i!==array.length-1){
            string+= a
        }
    }
    return string
}
testNewJoin(testArray,',')

//SLICE()
//--------------------------------------------------------------------------------------------------------------
const testNewSlice = (test,a,b)=>{
    const esperado = test.slice(a,b).toString()
    console.assert(newSlice(test,a,b).toString()===esperado,
    `Função: newSlice`,
    `Resultado: ${newSlice(test,a,b).toString()}`,
    `Esperado: ${esperado}`
    )
}

function newSlice(array,a=0,b=array.length) {
    if(a<0){
        a=array.length+a    
    }
    if(b<0){
        b=array.length+b    
    }
    if(b>array.length){
        b=array.length
    }
    let newArray = []
    for (let index = a; index < b; index++){
        newArray.push(array[index])
    }
    return newArray
}
testNewSlice(testArray,2,4)

//FLAT()
//--------------------------------------------------------------------------------------------------------------
const testNewFlat = (test,a)=>{
    const esperado = JSON.stringify(test.flat(a))
    console.assert(JSON.stringify(newFlat(test,a))===esperado,
    `Função: newFlat`,
    `Resultado: ${JSON.stringify(newFlat(test,a))}`,
    `Esperado: ${esperado}`
    )
}

function newFlat(array,a=1) {
    let newArray=[]
    let nivel = a-1
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])&&nivel>=0){
            if(!nivel){
                newArray = newConcat(newArray,array[i])
            } else {
                newArray = newConcat(newArray,newFlat(array[i],nivel))
            }
        } else if(array[i]!==undefined){
            newArray.push(array[i])
        }
    }
    return newArray
}

testNewFlat([5,,2,3,[2,3],[3,5,[3,4,5,[1,2,4]]]],3)

//FLATMAP()
//--------------------------------------------------------------------------------------------------------------
const testNewFlatMap = (test)=>{
    const callback = a =>a%2===0?[a*2]:a
    const esperado = JSON.stringify(test.flatMap(callback))
    console.assert(JSON.stringify(newFlatMap(test,callback))===esperado,
    `Função: newFlatMap`,
    `Resultado: ${JSON.stringify(newFlatMap(test,callback))}`,
    `Esperado: ${esperado}`
    )
}

function newFlatMap(array,callback) {
    let arrayMap = newMap(array, callback)
    let newArray=[]
    for(let i = 0; i < arrayMap.length; i++){
        if(Array.isArray(arrayMap[i])){
            newArray = newConcat(newArray,arrayMap[i])
        } else if(arrayMap[i]!==undefined){
            newArray.push(arrayMap[i])
        }
    }
    return newArray
}

testNewFlatMap(testArray)