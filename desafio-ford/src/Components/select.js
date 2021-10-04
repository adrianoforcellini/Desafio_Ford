const Capitais = [
  "Aracaju",
  "Belo Horizonte",
  "Belém",
  "Boa Vista",
  "Brasília",
  "Campo Grande",
  "Cuiabá",
  "Curitiba",
  "Florianópolis",
  "Fortaleza",
  "Goiânia",
  "João Pessoa",
  "Macapá",
  "Maceió",
  "Manaus",
  "Natal",
  "Palmas",
  "Porto Alegre",
  "Porto Velho",
  "Recife",
  "Rio Branco",
  "Rio de Janeiro",
  "Salvador",
  "São Luís",
  "São Paulo",
  "Teresina",
  "Vitória"
]

const Select = ({name, change}) => {
  return (
  <select 
  name={name}
  onChange={change}
  >
    {Capitais.map(capital => (
      <option value={capital}>{capital}</option>
    ))}
</select>
)
    }

export default Select 