import expressoSvg from '@/assets/coffees/expresso.svg'
import expressoAmericanoSvg from '@/assets/coffees/expresso-americano.svg'
import expressoCremosoSvg from '@/assets/coffees/expresso-cremoso.svg'
import expressoGeladoSvg from '@/assets/coffees/expresso-gelado.svg'
import cafeComLeiteSvg from '@/assets/coffees/cafe-com-leite.svg'
import latteSvg from '@/assets/coffees/latte.svg'
import capuccinoSvg from '@/assets/coffees/capuccino.svg'
import macchiatoSvg from '@/assets/coffees/macchiato.svg'
import mocaccinoSvg from '@/assets/coffees/mocaccino.svg'
import chocolateQuenteSvg from '@/assets/coffees/chocolate-quente.svg'
import cubanoSvg from '@/assets/coffees/cubano.svg'
import havaianoSvg from '@/assets/coffees/havaiano.svg'
import arabeSvg from '@/assets/coffees/arabe.svg'
import irlandesSvg from '@/assets/coffees/irlandes.svg'

interface CoffeeProps {
  id: number
  name: string
  description: string
  price: string
  image: string
  type: string[]
}

export const coffeeItens: CoffeeProps[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    image: expressoSvg,
    type: ['tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    image: expressoAmericanoSvg,
    type: ['tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    image: expressoCremosoSvg,
    type: ['tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    image: expressoGeladoSvg,
    type: ['tradicional', 'gelado'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    image: cafeComLeiteSvg,
    type: ['tradicional', 'com leite'],
  },
  {
    id: 6,
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    image: latteSvg,
    type: ['tradicional', ' com leite'],
  },
  {
    id: 7,
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    image: capuccinoSvg,
    type: ['tradicional', 'com leite'],
  },
  {
    id: 8,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    image: macchiatoSvg,
    type: ['tradicional', 'com leite'],
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    image: mocaccinoSvg,
    type: ['tradicional', 'com leite'],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    image: chocolateQuenteSvg,
    type: ['especial', 'com leite'],
  },
  {
    id: 11,
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    image: cubanoSvg,
    type: ['tradicional', 'alcoólico, gelado'],
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    image: havaianoSvg,
    type: ['especial'],
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    image: arabeSvg,
    type: ['especial'],
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    image: irlandesSvg,
    type: ['especial', 'alcoólico'],
  },
]
