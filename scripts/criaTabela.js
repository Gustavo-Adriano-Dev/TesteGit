const btnTabelaPessoais = document.getElementById("btnTabelaPessoais")
const btnTabelaEstudantis = document.getElementById("btnTabelaEstudantis")
const btnTabelaPostais = document.getElementById("btnTabelaPostais")

const tabela = document.getElementById("tabela")
const cabecalho = document.getElementById("cabecalho")
const corpoTabela = document.getElementById("corpoTabela")
let pessoal_carregar = false 
let estudantis_carregar = false 
let postal_carregar = false 

btnTabelaPessoais.addEventListener("click", () => {

    if (pessoal_carregar == false) {
        cabecalho.innerHTML = ""
        corpoTabela.innerHTML = ""
        postal_carregar = false 
        estudantis_carregar = false 
        cabecalho.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nome Completo</th>
            <th>Sexo</th>
            <th>Estado Civil</th>
            <th>Data de Nascimento</th>
            <th>Naturalidade</th>
            <th>CPF</th>
            <th>RG</th>
            <th>Data Emissão | RG</th>
            <th>Orgao emissor | RG</th>
            <th>Celular</th>
            <th>Email</th>
            <th>Profissão</th>
        </tr>
        `
        fetch("../../dados/dadosPessoais.json")
        .then(response => response.json())
        .then(dados => {
            dados.forEach(pessoa => 
                corpoTabela.innerHTML += `
                <tr>
                    <td>${pessoa.id_pessoa}</td>
                    <td>${pessoa.nome}</td>
                    <td>${pessoa.sexo}</td>
                    <td>${pessoa.estado_civil}</td>
                    <td>${pessoa.data_nascimento}</td>
                    <td>${pessoa.naturalidade}</td>
                    <td>${pessoa.cpf}</td>
                    <td>${pessoa.rg}</td>
                    <td>${pessoa.data_emissao_rg}</td>
                    <td>${pessoa.orgao_emissor}</td>
                    <td>${pessoa.celular}</td>
                    <td>${pessoa.email}</td>
                    <td>${pessoa.profissao}</td>
                </tr>`
            )
        })
        pessoal_carregar = true
    }
})

btnTabelaEstudantis.addEventListener("click", () => {

    if (estudantis_carregar == false){
        cabecalho.innerHTML = ""
        corpoTabela.innerHTML = ""
        pessoal_carregar = false
        postal_carregar = false 

        cabecalho.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Instituição de Ensino</th>
            <th>Tipo de Instituição</th>
            <th>Curso</th>
            <th>Modalidade</th>
            <th>Nivel Ensino</th>
            <th>Matricula</th>
            <th>Periodo</th>
            <th>Turno</th>
            <th>Situacao Academica</th>
            <th>Data Inicio</th>
            <th>Previsão conclusão</th>
        </tr>
        `
        fetch("../../dados/dadosEstudantil.json")
        .then(response => response.json())
        .then(dados => {
            dados.forEach(estudante =>
                corpoTabela.innerHTML += `
                <tr>
                    <td>${estudante.id_pessoa}</td>
                    <td>${estudante.instituicao}</td>
                    <td>${estudante.tipo_instituicao}</td>
                    <td>${estudante.curso}</td>
                    <td>${estudante.modalidade}</td>
                    <td>${estudante.nivel_ensino}</td>
                    <td>${estudante.matricula}</td>
                    <td>${estudante.periodo}</td>
                    <td>${estudante.turno}</td>
                    <td>${estudante.situacao}</td>
                    <td>${estudante.data_inicio}</td>
                    <td>${estudante.previsao_conclusao}</td>
                </tr>`
            )
        
        })
        estudantis_carregar = true
    }
})

btnTabelaPostais.addEventListener("click", () => {
    if (postal_carregar == false){
        estudantis_carregar = false
        pessoal_carregar = false

        cabecalho.innerHTML = ""
        corpoTabela.innerHTML = ""

        cabecalho.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>CEP</th>
            <th>Bairro</th>
            <th>Logradouro</th>
            <th>Numero</th>
            <th>Complemento</th>
        </tr>
        `

        fetch("../../dados/dadosPostal.json")
        .then(resposta => resposta.json())
        .then(dados => {
            dados.forEach(postal =>
                corpoTabela.innerHTML += `
                <tr>
                    <td>${postal.id_pessoa}</td>
                    <td>${postal.estado}</td>
                    <td>${postal.cidade}</td>
                    <td>${postal.cep}</td>
                    <td>${postal.bairro}</td>
                    <td>${postal.logradouro}</td>
                    <td>${postal.numero}</td>
                    <td>${postal.complemento}</td>
                </tr>
                `
            )
            
        })
        
        postal_carregar = true
    }
})
