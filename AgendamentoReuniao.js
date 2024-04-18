const cliente = {empresa: 'Avanade'}
const dbJSON = require('./db.json')

console.log(dbJSON)

//listar as salas de reunião com agendas e horários disponíveis
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

//listarSalasDisponiveis()

function verificarDisponibilidadeDeSala(salaNome, horario){
const sala = dbJSON.find(sala => sala.nome === salaNome); 
if(sala.horarios.includes(horario)){
    console.log(`A sala ${salaNome} está disponível às ${horario}.`);
    console.log('********************************************************************************');
    
}else{
    console.log(`Desculpe, a sala ${salaNome} não está disponível às ${horario}. Por favor, verifique outra sala e/ou horário.`)
    console.log('***********************************************************************************');
}
}
//verificarDisponibilidadeDeSala('Sala Boa Viagem', '8:00');

//realizar a reserva de sala

function realizarReservaDeSala(salaNome, horario) {
    const sala = dbJSON.find(sala => sala.nome === salaNome); 
    if (sala && sala.horarios.includes(horario)) {
        // Remove o horário reservado dos horários disponíveis
        sala.horarios = sala.horarios.filter(h => h !== horario);
        console.log(`A reserva da sala ${salaNome} foi realizada com sucesso para às ${horario}.`);
        console.log('********************************************************************************');
        return true;
    }
    console.log(`Não foi possível realizar sua reserva para às ${horario}. Escolha outro horário ou sala.`);
    console.log('************************************************************************************');
    return false;
}

 

//clienteLogadoNoSistema();

listarSalasDisponiveis();

verificarDisponibilidadeDeSala('Sala Boa Viagem', '8:00');

realizarReservaDeSala('Sala Boa Viagem', '9:00'); 