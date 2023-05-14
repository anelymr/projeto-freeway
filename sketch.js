function setup()
{
  createCanvas(500, 400);
}

//Função para executar o jogo
function draw()
{
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentoCarro();
  movimentoAtor();
  resetCarro();
  detectColisao();
  incluiPontos();
  marcaPontos();
}