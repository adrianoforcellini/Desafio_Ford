//Capitais = [“Porto Velho”,”Manaus”,”Rio Branco”,”Campo Grande”,”Macapá”,”Brasília”,”Boa Vista”,”Cuiabá”,”Palmas”,”São Paulo”,”Teresina”,”Rio de Janeiro”,”Belém”,”Goiânia”,”Salvador”,”Florianópolis”,”São Luís”,”Maceió”,”Porto Alegre”,”Curitiba”,”Belo Horizonte”,”Fortaleza”,”Recife”,”João Pessoa”,”Aracaju”,”Natal “,”Vitória”]

// N
// [Manaus, Belém, Rio Branco, Porto Velho, Boa Vista, Macapá, Palmas]

//NE:
// [São Luís, Teresina, Fortaleza, Natal, Jão Pessoa, Recife, Maceió, Aracaju.]

// CO:
// [Cuiabá, Campo Grande, Goiânia, Brasília.]

// SE:
// [São Paulo, Belo Horizonte, Rio de Janeiro, Espírito Santo	]

// S:
// [Curitiba, Porto Alegre, Florianópolis ]

// Fronteiras:
// N -> NE, CO
// NE -> SE, CO, N

// CO -> N, NO, SE, S -> Nosso coringa. se não houver rota direta, serão duas.
// Uma que vai pro Coentro Oeste, e outra pro destino final.

// SE -> CO, S, NE
// S -> SE, CO

const findRegion = (capital) => {
  const N = [
    "Manaus",
    "Belém",
    "Rio Branco",
    "Porto Velho",
    "Boa Vista",
    "Macapá",
    "Palmas",
  ];
  const NE = [
    "São Luís",
    "Teresina",
    "Fortaleza",
    "Natal",
    "Salvador",
    "João Pessoa",
    "Recife",
    "Maceió",
    "Aracaju",
  ];
  const CO = ["Cuiabá", "Campo Grande", "Goiânia", "Brasília"];
  const SE = [
    "São Paulo",
    "Belo Horizonte",
    "Rio de Janeiro",
    "Espírito Santo",
  ];
  const S = ["Curitiba", "Porto Alegre", "Florianópolis"];

  if (N.includes(capital)) {
    return "N";
  }
  if (NE.includes(capital)) {
    return "NE";
  }
  if (CO.includes(capital)) {
    return "CO";
  }
  if (SE.includes(capital)) {
    return "SE";
  }
  if (S.includes(capital)) {
    return "S";
  }
};

const findRoute = (origin, destination) => {
  const originRegion = findRegion(origin);
  const destinationRegion = findRegion(destination);

  if (originRegion === destinationRegion) {
    return `Origem e destino se interligam diretamente (Mesma Região,${originRegion}): ${origin} >> ${destination}`;
  }

  const directRoutes = [
    ["N", "NE", "CO"],
    ["NE", "SE", "CO", "N"],
    ["CO", "N", "NO", "SE", "S"],
    ["SE", "CO", "S", "NE"],
    ["S", "SE", "CO"],
  ];

  for (let i in directRoutes) {
    if (
      directRoutes[i].includes(originRegion) &&
      directRoutes[i].includes(destinationRegion)
    ) {
      return `As regiões de origem e destino fazem fronteira.${originRegion} >> ${destinationRegion}`;
    }
  }
  return `As regiões de origem e destino não fazem fronteira.
  ${originRegion} >> CO >> ${destinationRegion} `;
};

export default findRoute