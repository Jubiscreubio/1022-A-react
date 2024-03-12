//faça um componente que faça um retangulo da largura da tela
//por 200px

//crie uma variavel com LET no js que contenha o valor "Meu Componente"

//crie uma div no componente que dentro dela mostre um <p> 
//contendo o valor da variavel.

function MeuComp(){
    let variavel = "MeuComp"
    return(
        <div className = "minha-div">
            <p>{variavel}</p>
            </div>
    )
}
export default MeuComp;

