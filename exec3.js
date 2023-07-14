



function temperatureConvert (degree) {
    const celsiusExist = degree.toUpperCase().includes(`C`)
    const fahrenheitExist = degree.toUpperCase().includes(`F`)

    if (!celsiusExist && !fahrenheitExist) {
        throw new Error(`Grau nao identificado`)
    }

    let updatedDegree = degree.toUpperCase().replace(`F`, ``);
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = `C`

    if (celsiusExist) {
            updatedDegree = updatedDegree.replace(`C`, ``);
            formula = celsius => celsius * 9/5 + 32
            degreeSign = `F`
        }

    return formula(updatedDegree) + degreeSign

}


try {
    console.log(temperatureConvert(`10C`))
}
catch (error) {
    console.log(error.message)
}
