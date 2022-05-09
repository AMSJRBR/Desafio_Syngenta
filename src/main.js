function getCheapestHotel (input) { //DO NOT change the function's name.
    const lakewood = {
        classificacao: 3,
        tarifaRegular: {
            diaSemana: 110,
            finalSemana: 90
        },
        tarifaReward: {
            diaSemana: 80,
            finalSemana: 80
        }
    }
    
    const bridgewood = {
        classificacao: 4,
        tarifaRegular: {
            diaSemana: 160,
            finalSemana: 60
        },
        tarifaReward: {
            diaSemana: 110,
            finalSemana: 50
        }
    }
    
    const ridgewood = {
        classificacao: 5,
        tarifaRegular: {
            diaSemana: 220,
            finalSemana: 150
        },
        tarifaReward: {
            diaSemana: 100,
            finalSemana: 40
        }
    }    

    const programaDeFidelidade = input.split(":")[0] 
    const strDatas = input.split(":")[1]             
    const dias = strDatas.split(",")

    let totalDiasDaSemana = 0
    let totalDiasFinalSemana = 0
    for (let index = 0; index < dias.length; index++) {
        const diaDaSemana = dias[index].split("(")[1]
        const nomeDiaSemana = diaDaSemana.substr(0,diaDaSemana.length-1)
        if (nomeDiaSemana === "sun" || nomeDiaSemana === "sat") {
            totalDiasFinalSemana++
        } else {
            totalDiasDaSemana++
        }
    } 

    let totalTarifaLakewood = 0
    let totalTarifaBridgewood = 0
    let totalTarifaRidgewood = 0
    if (programaDeFidelidade === "Regular") {
        totalTarifaLakewood = lakewood.tarifaRegular.diaSemana * totalDiasDaSemana + lakewood.tarifaRegular.finalSemana * totalDiasFinalSemana
        totalTarifaBridgewood = bridgewood.tarifaRegular.diaSemana * totalDiasDaSemana + bridgewood.tarifaRegular.finalSemana * totalDiasFinalSemana
        totalTarifaRidgewood = ridgewood.tarifaRegular.diaSemana * totalDiasDaSemana + ridgewood.tarifaRegular.finalSemana * totalDiasFinalSemana
    } else {
        totalTarifaLakewood = lakewood.tarifaReward.diaSemana * totalDiasDaSemana + lakewood.tarifaReward.finalSemana * totalDiasFinalSemana
        totalTarifaBridgewood = bridgewood.tarifaReward.diaSemana * totalDiasDaSemana + bridgewood.tarifaReward.finalSemana * totalDiasFinalSemana
        totalTarifaRidgewood = ridgewood.tarifaReward.diaSemana * totalDiasDaSemana + ridgewood.tarifaReward.finalSemana * totalDiasFinalSemana
    }

    totalTarifaLakewood = totalTarifaLakewood * 10 + (10 - lakewood.classificacao)
    totalTarifaBridgewood = totalTarifaBridgewood * 10 + (10 - bridgewood.classificacao) 
    totalTarifaRidgewood = totalTarifaRidgewood * 10 + (10 - ridgewood.classificacao) 

    let menorTarifa = totalTarifaLakewood
    let nomeMenorTarifa = "Lakewood"

    if (totalTarifaBridgewood < menorTarifa) {
        menorTarifa = totalTarifaBridgewood
        nomeMenorTarifa = "Bridgewood"
    }

    if (totalTarifaRidgewood < menorTarifa) {
        menorTarifa = totalTarifaRidgewood
        nomeMenorTarifa = "Ridgewood"
    }
    console.log(nomeMenorTarifa)
    return nomeMenorTarifa
}

exports.getCheapestHotel = getCheapestHotel