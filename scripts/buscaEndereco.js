const btnBuscaEnd = document.getElementById("buscaEndereco")
const inputCep = document.getElementById("cep")
const inputLogradouro = document.getElementById("logradouro")
const inputNumero = document.getElementById("numero")
const inputBairro = document.getElementById("bairro")
const inputCidade = document.getElementById("cidade")
const inputEstado = document.getElementById("estado")

btnBuscaEnd.addEventListener("click", () => {

    const cep = inputCep.value
    const cepLimpo = cep.replace(/\D/g, "")
    console.log(cepLimpo)

    if (cepLimpo.length == 8) {

        fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
            .then(resposta => resposta.json())
            .then(endereco => {
                inputLogradouro.value = endereco.logradouro
                inputBairro.value = endereco.bairro
                inputCidade.value = endereco.localidade
                inputEstado.value = endereco.uf
                
            })
    }
})