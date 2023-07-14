

let family = {
    incomes: [285, 3200, 256, 485],
    expenses: [20, 200, 500]
}

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
     const calculateIncomes = sum(family.incomes)
     const calculateExpenses = sum(family.expenses)

     const total = calculateIncomes - calculateExpenses

     const itsOk = total >= 0

     let balanceText = `Negativo`

     if (itsOk) {
        balanceText = `Positivo`
     }

     console.log(`Seu saldo é ${balanceText}`)
}

calculateBalance()