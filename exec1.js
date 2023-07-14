

function gradeTransform(grade) {
    let notaA = grade >= 90
    let notaB = grade >= 80 && grade < 90
    let notaC = grade >= 70 && grade < 80
    let notaD = grade >= 60 && grade < 70
    let notaF = grade < 60

    switch (grade) {
        case notaA:
            return `A`
            break
        case notaB:
            return `B`
            break
        case notaC:
            return `C`
            break
        case notaD:
            return `D`
            break
        case notaF:
            score = `F`
            break
    }
}

console.log(gradeTransform())
