import { MenuEntry } from 'corgiswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://corgiswap.org/',
  },
  {
    label: 'Pancake',
    icon: 'TradeIcon',
    href: '/',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://corgiswap.org/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://corgiswap.org/pools',
  },
  {
    label: 'Listing',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Hobit',
        href: 'https://www.hotbit.io/exchange?symbol=CORGI_USDT',
      },
      {
        label: 'Lbank',
        href: 'https://www.lbank.info/exchange/corgi/usdt',
      },
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/0x802c68730212295149f2bea78c25e2cf5a05b8a0',
      },
      {
        label: 'Latoken',
        href: 'https://latoken.com/exchange/CORGI_USDT',
      },
      {
        label: 'Coingecko',
        href: 'https://www.coingecko.com/en/coins/corgidoge',
      },
      {
        label: 'Coinmarketcap',
        href: 'https://coinmarketcap.com/en/currencies/corgidoge-real-estate-payment/',
      },
    ]
  },
  {
    label: 'Partnership',
    icon: 'GroupsIcon',
    href: 'https://corgiswap.org/partners',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/corgidoge-official',
      },
      {
        label: 'Blog',
        href: 'https://corgidoge.medium.com/',
      },
    ]
  }
]

export default config
