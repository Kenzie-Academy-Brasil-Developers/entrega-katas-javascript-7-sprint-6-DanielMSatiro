//FOREACH()
Array.prototype.newForEach = function (callback) {
    for (let index = 0; index < this.length; index++){
        const currentValue = this[index]
        callback(currentValue,index,this)
    }
}

//ARRAY PARA TESTE
const testArray = [1,2,3,4,5]

//MAP
//--------------------------------------------------------------------------------------------------------------
const testNewMap = (test)=>{
    const callback = a =>a*2
    const esperado = test.map(callback).toString()
    console.assert(test.newMap(callback).toString()===esperado,
    `Função: newMap`,
    `Resultado: ${test.newMap(callback).toString()}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newMap = function (callback) {
    const newArray = []
    for (let index = 0; index < this.length; index++){
        const currentValue = this[index]
        newArray.push(callback(currentValue,index,this))
    }
    return newArray
}
testNewMap(testArray)

//FILTER
//--------------------------------------------------------------------------------------------------------------
const testNewFilter = (test)=>{
    const callback = a =>a%2===0
    const esperado = test.filter(callback).toString()
    console.assert(test.newFilter(callback).toString()===esperado,
    `Função: newFilter`,
    `Resultado: ${test.newFilter(callback).toString()}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newFilter = function (callback) {
    const newArray = []
    for (let index = 0; index < this.length; index++){
        const currentValue = this[index]
        if(callback(currentValue,index,this))
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
    console.assert(test.newFind(callback).toString()===esperado,
    `Função: newFind`,
    `Resultado: ${test.newFind(callback).toString()}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newFind = function (callback) {
    for (let index = 0; index < this.length; index++){
        const currentValue = this[index]
        if(callback(currentValue,index,this))
        return currentValue
    }
}
testNewFind(testArray)

//FINDINDEX
//--------------------------------------------------------------------------------------------------------------
const testNewFindIndex = (test)=>{
    const callback = a =>a%2===0
    const esperado = test.findIndex(callback).toString()
    console.assert(test.newFindIndex(callback).toString()===esperado,
    `Função: newFindIndex`,
    `Resultado: ${test.newFindIndex(callback).toString()}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newFindIndex = function (callback) {
    for (let index = 0; index < this.length; index++){
        const currentValue = this[index]
        if(callback(currentValue,index,this))
        return index
    }
}
testNewFindIndex(testArray)

//REDUCE
//--------------------------------------------------------------------------------------------------------------
const testNewReduce = (test,c=null)=>{
    const callback = (a,b) => a+b
    const initialValue = c
    const esperado = test.reduce(callback,initialValue)
    console.assert(test.newReduce(callback,initialValue)===esperado,
    `Função: newReduce`,
    `Resultado: ${test.newReduce(callback,initialValue)}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newReduce = function (callback,initialValue=null) {
    if(this.length===0&&initialValue===null){
        throw new TypeError('Reduce possui um array vazio sem um valor inicial')
        return null
    }
    let acc = initialValue===null?this[0]:initialValue
    let initialIndex = initialValue===null?1:0
    for (let index = initialIndex; index < this.length; index++){
        const currentValue = this[index]
        acc = callback(acc,currentValue,index,this)
    }
    return acc
}
//testNewReduce([])//Gera um TypeError, conforme reduce...
testNewReduce([],0)
testNewReduce([2,2,2],2)
testNewReduce([3,5,9])
testNewReduce(testArray)

//SOME
//--------------------------------------------------------------------------------------------------------------
const testNewSome = (test)=>{
    const callback = a =>a%2===0
    const esperado = test.some(callback).toString()
    console.assert(test.newSome(callback).toString()===esperado,
    `Função: newSome`,
    `Resultado: ${test.newSome(callback).toString()}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newSome = function (callback) {
    for (let index = 0; index < this.length; index++){
        const currentValue = this[index]
        if(callback(currentValue,index,this))
            return true
    }
    return false
}
testNewSome([1,3,5,7])
testNewSome(testArray)

//EVERY
//--------------------------------------------------------------------------------------------------------------
const testNewEvery = (test)=>{
    const callback = a =>a%2===0
    const esperado = test.every(callback).toString()
    console.assert(test.newEvery(callback).toString()===esperado,
    `Função: newEvery`,
    `Resultado: ${test.newEvery(callback).toString()}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newEvery = function (callback) {
    for (let index = 0; index < this.length; index++){
        const currentValue = this[index]
        return callback(currentValue,index,this)
    }
}
testNewEvery([2,2,2,2])
testNewEvery(testArray)

//FILL
//--------------------------------------------------------------------------------------------------------------
const testNewFill = (test,a,b,c)=>{
    const esperado = test.fill(a,b,c).toString()
    console.assert(test.newFill(a,b,c).toString()===esperado,
    `Função: newFill`,
    `Resultado: ${test.newFill(a,b,c).toString()}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newFill = function (a,b=0,c=array.length) {
    if(b<0){
        b=this.length+b    
    }
    if(c<0){
        c=this.length+c    
    }
    for (let index = b; index < c; index++){
        this[index] = a
    }
    return this
}
testNewFill(testArray,2,1,3)

//INCLUDES
//--------------------------------------------------------------------------------------------------------------
const testNewIncludes = (test,a,b)=>{
    const esperado = test.includes(a,b).toString()
    console.assert(test.newIncludes(a,b).toString()===esperado,
    `Função: newIncludes`,
    `Resultado: ${test.newIncludes(a,b).toString()}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newIncludes = function (a,b=0) {
    if(b<0){
        b = this.length+b
    }
    for (let index = b; index < this.length; index++){
        if(a===this[index])
            return true
    }
    return false
}
testNewIncludes(testArray,3,-3)

//INDEXOF
//--------------------------------------------------------------------------------------------------------------
const testNewIndexOf = (test,a,b)=>{
    const esperado = test.indexOf(a,b).toString()
    console.assert(test.newIndexOf(a,b).toString()===esperado,
    `Função: newIndexOf`,
    `Resultado: ${test.newIndexOf(a,b).toString()}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newIndexOf = function (a,b=0) {
    if(b<0){
        b = this.length+b
    }
    for (let index = b; index < this.length; index++){
        if(a===this[index])
            return index
    }
    return -1
}
testNewIndexOf(testArray,3,1)

//CONCAT
//--------------------------------------------------------------------------------------------------------------
const testNewConcat = (test,a,b)=>{
    const esperado = JSON.stringify(test.concat(a,b))
    console.assert(JSON.stringify(test.newConcat(a,b))===esperado,
    `Função: newConcat`,
    `Resultado: ${JSON.stringify(test.newConcat(a,b))}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newConcat = function (...arguments) {
    let newArray = this
    for (let i = 0; i < arguments.length; i++){
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
    console.assert(test.newJoin(a)===esperado,
    `Função: newJoin`,
    `Resultado: ${test.newJoin(a)}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newJoin = function (a=',') {
    let string = ''
    for(let i = 0; i < this.length; i++){
        string+= this[i]
        if(i!==this.length-1){
            string+= a
        }
    }
    return string
}
testNewJoin([])
testNewJoin(['olá',2,2,2])
testNewJoin(testArray,',')

//SLICE()
//--------------------------------------------------------------------------------------------------------------
const testNewSlice = (test,a,b)=>{
    const esperado = test.slice(a,b).toString()
    console.assert(test.newSlice(a,b).toString()===esperado,
    `Função: newSlice`,
    `Resultado: ${test.newSlice(a,b).toString()}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newSlice = function (a=0,b=array.length) {
    if(a<0){
        a=this.length+a    
    }
    if(b<0){
        b=this.length+b    
    }
    if(b>this.length){
        b=this.length
    }
    let newArray = []
    for (let index = a; index < b; index++){
        newArray.push(this[index])
    }
    return newArray
}
testNewSlice(testArray,2,4)

//FLAT()
//--------------------------------------------------------------------------------------------------------------
const testNewFlat = (test,a)=>{
    const esperado = JSON.stringify(test.flat(a))
    console.assert(JSON.stringify(test.newFlat(a))===esperado,
    `Função: newFlat`,
    `Resultado: ${JSON.stringify(test.newFlat(a))}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newFlat = function (a=1) {
    let newArray=[]
    let nivel = a-1
    for(let i = 0; i < this.length; i++){
        if(Array.isArray(this[i])&&nivel>=0){
            if(!nivel){
                newArray = newArray.newConcat(this[i])
            } else {
                newArray = newArray.newConcat(this[i].newFlat(nivel))
            }
        } else if(this[i]!==undefined){
            newArray.push(this[i])
        }
    }
    return newArray
}

testNewFlat([5,,2,3,[2,3],[3,5,[3,4,5,[1,2,4]]]],3)

//FLATMAP()
//--------------------------------------------------------------------------------------------------------------
const testNewFlatMap = (test,callback)=>{
    const esperado = JSON.stringify(test.flatMap(callback))
    console.assert(JSON.stringify(test.newFlatMap(callback))===esperado,
    `Função: newFlatMap`,
    `Resultado: ${JSON.stringify(test.newFlatMap(callback))}`,
    `Esperado: ${esperado}`
    )
}

Array.prototype.newFlatMap = function (callback) {
    let arrayMap = this.newMap(callback)
    let newArray=[]
    for(let i = 0; i < arrayMap.length; i++){
        if(Array.isArray(arrayMap[i])){
            newArray = newArray.newConcat(arrayMap[i])
        } else if(arrayMap[i]!==undefined){
            newArray.push(arrayMap[i])
        }
    }
    return newArray
}
testNewFlatMap([2,3,[3]],a=>a+2)
//Descomente a linha abaixo:
//console.log(newFlatMap([2,3,[3]],a=>a+2),[2,3,[3]].flatMap(a=>a+2))
testNewFlatMap(testArray,a =>a%2===0?[a*2]:a)