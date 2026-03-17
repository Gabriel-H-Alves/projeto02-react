function App() {
  //Ex 01 e 02
   const frutas = ["Maça", "Banana", "Uva"]
  //Ex 03
  const numeros = [10, 20, 30]
  //Ex 04
  const numeros01 = [5, 10, 15]
  //Ex 05
  const alunos = ["Ana", "Carlos", "João"]
  //Ex 06
  const cidades = ["São Paulo", "Rio", "Curitiba"]
  //Ex 07
  const precos = [10, 25, 40]
  //Ex 08
  const cores = ["Azul", "Vermelho", "Verde"]

  //Ex 09
  const idades = [18,21,30]

  //Ex 10
  const jogos = ["Minecraft", "GTA", "Fifa"]

  //Ex 11
  const comidas = ["Pizza", "Hambúrguer", "Sushi"]

  //Ex 12
  const filmes = ["Matrix", "Batman", "Avatar", "Interestelar"]

  //Ex 13
  const linguagens = ["JavaScript", "Python", "Java", "C#"]

  //Ex 14
  const valores = [2, 4, 6]

  // Ex 15
  const tarefas = ["Estudar React", "Fazer exercícios", "Praticar código"]

  return (
    <>
      <h2>Primeira fruta: {frutas[0]}</h2>
      <hr />

      <h2>Eu gosto de {frutas [1]} e {frutas[2]}</h2>
      <hr />
      
      <h2>Primeiro número: {numeros[0]}</h2>
      <h2>Segundo número: {numeros[1]}</h2>
      <hr />

      <h2>Resultado da soma: {numeros01[0] + numeros01[1] + numeros01[2]}</h2>
      <hr />

      <h2>Aluno01: {alunos[0]}</h2>
      <h2>Aluno02: {alunos[1]}</h2>
      <h2>Aluno03: {alunos[2]}</h2>
       <hr />

      <h2>Minha cidade favorita é {cidades[0]}</h2>
      <hr />

      <h2>Preços do produto 1: R${precos[0]}</h2>
      <h2>Preços do produto 2: R${precos[1]}</h2>
      <hr />

      <h2>minhas cores favoritas são: {cores[0]}, {cores[1]}, {cores[2]}</h2>
      <hr />
      
      <h2>A Soma das duas primeiras idades são: {idades[0] + idades[1]}</h2>
      <hr />
      
      <h2>Meu jogo favorito é o {jogos[1]}</h2>
      <hr />

      <h2>hoje eu quero comer {comidas[0]}</h2>
      <hr />

      <h2> Quantidade de filmes: {filmes.length} </h2>
      <hr />
        
      <h2>Primeira linguagem: {linguagens[0]}</h2>
      <h2>Segunda linguagem: {linguagens[3]}</h2>
      <hr />

      <h2>Resultado: {valores[0] + valores[1] + valores[2]}</h2>
      <hr />
      
      <h2>1- {tarefas[0]}</h2>
      <h2>2- {tarefas[1]}</h2>
      <h2>3- {tarefas[2]}</h2>
  
    </>
  )
}

export default App
