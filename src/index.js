const dbJSON = require('./database/db.json');

function listarSalasDisponiveis(){

    console.log('*************************************************************************');
    console.log('*************************************************************************');
    console.log('***********************AGENDA DE SALA DE REUNIÃO*************************');
    console.log('*************************************************************************');

    dbJSON.forEach(dbJSON => {

        console.log('*************************************************************************');
        console.log(`Sala: ${dbJSON.nome}`);
        console.log(`Capacidade de Pessoas: ${dbJSON.capacidadePessoas}`);
        console.log(`Comodidades: ${dbJSON.comodidades.join(", ")}`);
        console.log('Horários disponíveis: ');
        dbJSON.horarios.forEach(horario => {
            console.log(`-> ${horario}`);
        }) 
    });
    console.log('********************************************************************************');
}

function verificarDisponibilidadeDeSala(salaNome, horario){
    const sala = dbJSON.find(sala => sala.nome === salaNome); 
    if(sala.horarios.includes(horario)){
        console.log(`A ${salaNome} está disponível às ${horario}.`);
        console.log('********************************************************************************');
    }else{
        console.log(`Desculpe, a ${salaNome} não está disponível às ${horario}. Por favor, verifique outra sala e/ou horário.`)
        console.log('***********************************************************************************');
    }
}

function realizarReservaDeSala(salaNome, horario) {
    const sala = dbJSON.find(sala => sala.nome === salaNome);
    if (sala) {
        const horarioIndex = sala.horarios.indexOf(horario);
        if (horarioIndex !== -1) {
            sala.horarios.splice(horarioIndex, 1);
            console.log(`A reserva da ${salaNome} foi realizada com sucesso para às ${horario}.`);
            return true;
        } else {
            console.log(`Não foi possível realizar sua reserva para às ${horario}. Escolha outro horário ou sala.`);
        }
    } else {
        console.log(`A ${salaNome} não foi encontrada.`);
    }
    console.log('********************************************************************************');
    return false;
}

listarSalasDisponiveis();

verificarDisponibilidadeDeSala('Sala Boa Viagem', '8:00');

realizarReservaDeSala('Sala Boa Viagem', '7:00'); 