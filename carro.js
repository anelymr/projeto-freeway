//Variáveis dos carros
let xCarros     = [600, 600, 600, 600, 600, 600];
let yCarros     = [40, 100, 150, 210, 270, 318];
let Velocidade  = [5, 4.5, 6, 3.5, 4, 2.5];
let Comprimento = 50;
let Altura      = 40;

//Função para mostrar o Carro em looping
function mostraCarro()
{
  for (
    let i = 0;
        i < imagemCarros.length;
        i = i + 1
      )
        {
          image(
                imagemCarros[i],
                xCarros[i],
                yCarros[i],
                Comprimento,
                Altura
               );
        }
}

//Função de movimento do Carro
function movimentoCarro()
{
  for (
        let v = 0;
            v < Velocidade.length;
            v = v + 1
      )
      {
        xCarros[v] -= Velocidade[v];
      }
}

//Função fim da estrada
function fimEstrada(xCarros)
{
  return xCarros <- 50;
}

//Função reseta o carro
function resetCarro()
{
  for (
        let r = 0;
            r < imagemCarros.length;
            r = r + 1
      )
      {
        if  (fimEstrada(xCarros[r]))                       {xCarros[r] = 600;}
      }
}