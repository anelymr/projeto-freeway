//Variáveis do ator
let xAtor              = 150;
let yAtor              = 366;
let colisao            = false;


//Função para mostrar o Ator
function mostraAtor()
{
  image(imagemAtor,
        xAtor,
        yAtor,
        30,
        30);
  print(xAtor);
}

//Função de movimento do Ator
function movimentoAtor()
{
  if (keyIsDown(UP_ARROW))
        {yAtor -= 6;}

  if (keyIsDown(DOWN_ARROW))
        {
          if(limiteBorda())
            {
              yAtor += 6;
            }
        }
  
  if (keyIsDown(LEFT_ARROW))
      //  {xAtor -= 6;}
          {
          if(BordaEsquerda())
            {
              xAtor -= 6;
            }
          }
  if (keyIsDown(RIGHT_ARROW))
        //{xAtor += 6;}
          {
          if(BordaDireita())
            {
              xAtor += 6;
            }
        }
}


//Função de detectar colisão com carro
function detectColisao()
{
  for (
        let c = 0;
            c < imagemCarros.length;
            c = c + 1
      )
      {
        colisao = collideRectCircle
            (
              xCarros[c],
              yCarros[c],
              Comprimento,
              Altura,
              xAtor,
              yAtor,
              15
            )
        if (colisao)
            {
              resetAtor();
                if (detectPontos())
                  {
                    {meusPontos -= 1;}
                  }
            }   
      }
}

//Função retorna posição inicial
function resetAtor()
{
  yAtor = 366;
}

//Função verifica a linha de chegada
function FimEstrada()
{
  for (
        let c = 0;
            c < imagemCarros.length;
            c = c + 1
      )
      {
        colisao = collideRectCircle
            (
              xCarros[c],
              yCarros[c],
              Comprimento,
              Altura,
              xAtor,
              yAtor,
              15
            )
        if (colisao)
            {resetAtor();}
      }
}

//Função limita a borda
function limiteBorda()
      {return yAtor < 366;}

//Função limita a borda direita
function BordaDireita()
      {return xAtor < 474;}

//Função limita a borda direita
function BordaEsquerda()
      {return xAtor > 0;}
