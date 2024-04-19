# Negócio: Coworking

**Projeto:** Serviço agendamento de reservas de salas de reunião.

**Contexto:** O coworking tem dificuldade no controle de agendamentos de reservas de salas de reunião, o cliente solicitou um sistema onde seus próprios clientes internos possam verificar as salas e horários disponíveis para poderem agendar e reservar suas reuniões sem precisar solicitar à recepcionista do Coworking, que até então, é a pessoa responsável por essa demanda.
O sistema do cliente já existe o banco de dados com todas as informações necessárias.

## Lógicas de negócio:

- Modo de realização: Os agendamentos deverão ser realizados via internet, pelo sistema do Coworking através da área de cliente. O cliente precisa estar logado em sua conta para verificar a disponibilidade das salas e realizar o agendamento.

- Lista de agenda das salas: O sistema do Coworking deverá listar as salas de reunião com as agendas e horários disponíveis.

- Disponibilidade das salas: O sistema deverá validar se a sala solicitada está disponível para agendamento, caso não esteja, deverá sugerir outros horários ou salas semelhantes que estejam disponíveis.

- Descrição da sala e serviços oferecidos: O sistema deverá mostrar a descrição das salas de acordo com a capacidade de pessoas, foto da sala e comodidades que são oferecidas, como: TV, internet, projetor, quadro branco, serviço de água e café.

- Impedir conflitos de agenda: O sistema deverá impeder conflitos de agendamento de salas e horários, não deixando que o cliente marque sua reunião em um horário ou sala ocupada.

- Confirmação da reserva: O sistema deverá enviar uma mensagem ou email de confirmação da reserva para o cliente, após sua efetivação.

- Cancelamento e modificações: O sistema deverá permitir que o cliente cancele ou realize alguma alteração de sala e/ou horário, com antecedência prévia de 24 horas.

- Relatórios de consumo: O sistema deverá enviar um relatório de consumo das horas de reunião agendadas para que o cliente acompanhe se o seu consume excede a quantidade de horas contratadas por mês.
