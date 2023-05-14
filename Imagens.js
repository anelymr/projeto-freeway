//Variáveis visuais
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//Função para carregar Imagens
function preload()
{
  imagemEstrada = loadImage("Imagens/estrada.png");
  imagemAtor    = loadImage("Imagens/ator-1.png");
  imagemCarro   = loadImage("Imagens/carro-1.png");
  imagemCarro2  = loadImage("Imagens/carro-2.png");
  imagemCarro3  = loadImage("Imagens/carro-3.png");
  imagemCarros  = [imagemCarro,
                   imagemCarro2,
                   imagemCarro3,
                   imagemCarro,
                   imagemCarro2,
                   imagemCarro3
                  ]
}