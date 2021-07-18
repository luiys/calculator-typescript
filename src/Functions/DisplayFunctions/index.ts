export const write = (currentValue: string, newValue: string) => {

    const sinais = ["+", "-", "/", "X"]
    const ultimoItem = currentValue[currentValue.length - 1]

    if(currentValue.length === 0 && sinais.includes(newValue)){
        alert("O primeiro valor deve ser um numero")
        return currentValue
    }

    if(sinais.includes(ultimoItem) && sinais.includes(newValue)){
        alert("O ultimo valor ja foi um sinal, agora deve ser um numero")
        return currentValue
    }

    return currentValue + newValue

}