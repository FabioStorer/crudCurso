const prompt = require('prompt-sync')();
const cursos = [];

const modelo = () => {

    const nomeCurso = prompt('Digite o nome do seu curso: ');
    const duracaoCurso = prompt('Digite a duração do seu curso: ');

    const professores = [];
    const alunos = [];
    const materias = [];

    while (true) {

        const nomeProfessor = prompt('Digite o nome do(a) professor(a) do seu curso ou digite "fim" para finalizar: ');

        if (nomeProfessor == 'fim') {
            break;
        }
        professores.push(nomeProfessor);
    }

    while (true) {

        const nomeAluno = prompt('Digite o nome do(a) aluno(a) do seu curso ou digite "fim" para finalizar: ');

        if (nomeAluno == 'fim') {
            break;
        }
        alunos.push(nomeAluno);
    }

    while (true) {

        const nomeMateria = prompt('Digite o nome da matéria do seu curso ou digite "fim" para finalizar: ');

        if (nomeMateria == 'fim') {
            break;
        }
        materias.push(nomeMateria);
    }

    if (nomeCurso != '' && duracaoCurso > 0 && professores.length > 0 && alunos.length > 0 && materias.length > 0) {
        return {
            nomeCurso,
            duracaoCurso,
            professores,
            alunos,
            materias
        };
    }

    console.log('Dados inválidos!');
};

const criar = () => {

    const novo = modelo();

    if (novo) {
        cursos.push(novo);
        console.log('Curso cadastrado com sucesso!');
    }
};

const listar = () => {

    if (cursos.length == 0) {
        console.log('Nenhum curso cadastrado.');
    }

    cursos.forEach((el, i) => {
        console.log(`${i + 1}.
        Nome do Curso: ${el.nomeCurso}
        Duração: ${el.duracaoCurso}
        Professores: ${el.professores}
        Alunos: ${el.alunos}
        Matérias: ${el.materias}`);
    });
};

const atualizar = () => {

    listar();

    const index = prompt('Escolha pelo índice qual curso deseja atualizar: ') - 1;
    const novo = modelo();

    if (novo && index >= 0 && index < cursos.length) {
        cursos[index] = novo;
        console.log('Curso atualizado com sucesso!');
    } else {
        console.log('Índice inválido!');
    }
};

const remover = () => {

    listar();

    const index = prompt('Escolha pelo índice qual curso deseja remover: ') - 1;

    if (index >= 0 && index < cursos.length) {
        cursos.splice(index, 1);
        console.log('Curso removido com sucesso!');
    } else {
        console.log('Índice inválido!');
    }
};

module.exports = {
    criar,
    listar,
    atualizar,
    remover
};