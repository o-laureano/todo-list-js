// # O que você quer fazer?
// 0 - Sair
// 1 - Adicionar (sugerimos colocar o horário, caso compromisso em momento específico)
// 2 - Editar
// 3 - Remover
// 4 - Listar
// 5 - Obter (buscar id)

// # Lista de tarefas

const sundayChores = [{ "id": 0, "chore": "Arrumar o quarto" }, { "id": 1, "chore": "Lavar o carro" }];
const mondayChores = [{ "id": 0, "chore": "Aula Ada" }];
const tuesdayChores = [{ "id": 0, "chore": "Mentoria" }, { "id": 1, "chore": "Limpar a casa" }, { "id": 2, "chore": "Estudar para a prova" }];
const wednesdayChores = [{ "id": 0, "chore": "Palestra Inteligência Emocional" }];
const thursdayChores = [];
const fridayChores = [];
const saturdayChores = [];
const allChores = [sundayChores, mondayChores, tuesdayChores, wednesdayChores, thursdayChores, fridayChores, saturdayChores];

const optionOne = "1 - Adicionar tarefa";
const optionTwo = "2 - Editar tarefa existente";
const optionThree = "3 - Remover tarefa";
const optionFour = "4 - Listar tarefas";
const optionFive = "5 - Obter (buscar) tarefa";
const optionZero = "0 - Sair do sistema";

const createChore = (day, task) => {
  let chore = {};
  chore.id = allChores[day - 1].length;
  chore.chore = task;
  console.log("Tarefa criada com sucesso!!!");
  return chore;
}

const editChore = (weekDay) => {
  console.log("-----------------------");
  listSpecificDayChores(weekDay);

  let idToEdit = prompt("Digite o ID da tarefa que deseja editar. Caso deseje sair, digite 's': ");
  if (idToEdit.toLowerCase() === 's') { return console.log("Operação cancelada") }
  else if (parseInt(idToEdit) < 0 || parseInt(idToEdit) > allChores[weekDay - 1].length - 1 || !Number.isInteger(parseInt(idToEdit))) {
    return console.log("ID inválido!");
  };

  console.log("Edite a tarefa abaixo: \n -----------------------");
  let editionText = prompt(allChores[weekDay - 1].chore);
  let editedChore = {};
  editedChore.id = parseInt(idToEdit);
  editedChore.chore = editionText;
  allChores[weekDay - 1].splice(idToEdit, 1, editedChore);
  console.log(`A tarefa foi alterada com sucesso!`);
}

const listAllChores = () => {
  console.log(`Tarefas de Domingo ---> ${JSON.stringify(sundayChores)}`);
  console.log(`Tarefas de Segunda-Feira ---> ${JSON.stringify(mondayChores)}`);
  console.log(`Tarefas de Terça-feira ---> ${JSON.stringify(tuesdayChores)}`);
  console.log(`Tarefas de Quarta-feira ---> ${JSON.stringify(wednesdayChores)}`);
  console.log(`Tarefas de Quinta-feira ---> ${JSON.stringify(thursdayChores)}`);
  console.log(`Tarefas de Sexta-feira ---> ${JSON.stringify(fridayChores)}`);
  console.log(`Tarefas de Sábado ---> ${JSON.stringify(saturdayChores)}`)
}

const listSpecificDayChores = (weekDay) => {
  switch (weekDay) {
    case "1":
      console.log(`Tarefas de Domingo ---> ${JSON.stringify(sundayChores)}`);
      break;
    case "2":
      console.log(`Tarefas de Segunda-Feira ---> ${JSON.stringify(mondayChores)}`);
      break;
    case "3":
      console.log(`Tarefas de Terça-feira ---> ${JSON.stringify(tuesdayChores)}`);
      break;
    case "4":
      console.log(`Tarefas de Quarta-feira ---> ${JSON.stringify(wednesdayChores)}`);
      break;
    case "5":
      console.log(`Tarefas de Quinta-feira ---> ${JSON.stringify(thursdayChores)}`);
      break;
    case "6":
      console.log(`Tarefas de Sexta-feira ---> ${JSON.stringify(fridayChores)}`);
      break;
    case "7":
      console.log(`Tarefas de Sábado ---> ${JSON.stringify(saturdayChores)}`)
      break;
    default:
      console.log("Opção inválida!");
  }
}

const removeChore = (weekDay) => {
  listSpecificDayChores(weekDay);
  let idToRemove = prompt("Digite o ID da tarefa acima que você deseja remover: ");
  console.log("Você tem certeza que deseja remover o item de ID " + idToRemove + "? Essa operação não poderá ser desfeita.");
  let confirmRemove = prompt("Digite '1' para continuar ou '0' para cancelar: ");
  while (confirmRemove !== "0" && confirmRemove !== "1") {
    confirmRemove = prompt("Opção inválida. Digite '1' para continuar ou '0' para cancelar: ");
  }
  if (confirmRemove === '0') return console.log("Operação cancelada");
  if (confirmRemove === '1') {
    let newChoresArray = allChores[weekDay - 1];
    newChoresArray.splice(idToRemove, 1);
    let id = 0;
    newChoresArray.map(el => {
      el.id = id++;
    })
  }
  return console.log("Item removido com sucesso!!!");
}

const prompt = require("prompt-sync")();
let option;

while (option !== "0") {
  console.info("O que você quer fazer? ");
  console.log("-----------------------");
  console.info(optionOne + "\n" + optionTwo + "\n" + optionThree + "\n" + optionFour + "\n" + optionFive + "\n" + optionZero);
  console.log("-----------------------");

  option = prompt("Digite a opção desejada: ");
  switch (option) {
    case "0":
      console.log("-----------------------");
      console.log("Sistema encerrado!");
      break;

    case "1":
      let weekDay = prompt("Digite o número do dia da semana no qual você quer adicionar a tarefa (de 1 a 7, a começar por domingo): ");
      let chore = prompt("Digite a tarefa a ser acrescentada: ");
      let newChore = createChore(weekDay, chore);
      allChores[weekDay - 1].push(newChore);
      break;

    case "2":
      let dayToEdit = prompt("Digite o dia no qual você quer editar uma tarefa: ");
      editChore(dayToEdit);
      break;

    case "3":
      let list = prompt("Você deseja listar as tarefas existentes para decidir qual remover? 's' para sim e 'n' para não");;
      while (list.toLowerCase() !== "n" && list.toLowerCase() !== "s") {
        list = prompt("Opção digitada inválida! Apenas 's' ou 'n'. Tente novamente: ");
      }
      if (list.toLowerCase() === "s") listAllChores();
      let dayWhereToRemove = prompt("Digite o dia da semana no qual o ID da tarefa que você deseja remover se encontra: ");
      removeChore(dayWhereToRemove);
      break;

    case "4":
      listAllChores();
      break;
  }
}
