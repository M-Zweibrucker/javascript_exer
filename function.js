
//funçao arrow
const saymyname = (name) => {
    console.log(name)
}

saymyname(`matheus`)

//funcao construtora
function Person(name) {
    this.name = name
    this.walk = function () {
        return `${this.name} está andando`
    }
}

const mayk = new Person("Mayk")
console.log(mayk.walk())


//condiçao de ternario
let pao = true
let queijo = false
const niceBreakFast = pao || queijo ? `café top` : `café ruim` // "entao valor 1 se não valor 2"

//funcao try and catch
function sayMyName (name = ` `) {
    if (name === ` `){
        throw `Nome é obrigatorio`
    }

    console.log(name)
}

try {
    sayMyName(` `)//tenta a funcao
} catch(e) {
    console.log(e)//recebe o throw e armazena no parametro "e"
}


//percorrer array ou string
let name = `matheus`
let names = [`matheus`, `amanda`, `pai`]
for (let char of name){
    console.log(char)
} 

//percorrer objeto
let person = {
    name: `Matheus`,
    age: 24,
    weight: 80.7
}
for (let property in person) {
    console.log(property)
}


