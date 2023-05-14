let meusPontos  = 0;

//Função cria pontos
function incluiPontos()
{
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,255));
  text(meusPontos, width / 5, 27);
}

//Função calcula pontos
function marcaPontos()
{
  if (yAtor < 18)
      {
        meusPontos += 1;
        resetAtor();
      }
}

//Função verifica quantidade pontos
function detectPontos()
{
  return meusPontos > 0;
}