$(document).ready(function() {
    //Recuperação carrinho de localStorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    //atribuir a uma variavel a lista html
    const listaElement = $("#lista")
    //atribuir o total a variavel total do id do html
    const totalElement = $("#total")

    function exibirCarrinho(){
        listaElement.empty()
        let totalPreco = 0

        $.each(carrinho, function(index, item){
            //criando um elemento de linha de lista para cada item com descrição e preco
            const listaItem = $("<li>").text(`${item.desc} - Preco: $${item.preco.toFixed(2)}`)

            //criar um botão de remover o item
            const removeButton = $("<button>").text("❌").css("margin-left", "10px").click(function(){
                removerItem(index)
            })
            listaItem.append(removeButton)
            listaElement.append(listaItem)

            totalPreco += item.preco
        })
        totalElement.text(`Total: $${totalPreco.toFixed(2)}`)
    }
    function removerItem(index){
        carrinho.splice(index, 1)
        localStorage.setItem("carrinho", JSON. stringify(carrinho))
        exibirCarrinho()
    }

    exibirCarrinho()
})