import { useCurrency } from 'hooks/Tokens'
import { useTradeExactIn } from 'hooks/Trades'
import { tryParseAmount } from 'state/swap/hooks'

const useGetCorisBusdLpPrice = () => {
  const corisAddress = '0x2a2cD8b1F69EB9dda5d703b3498d97080C2F194F'
  const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  const inputCurrency = useCurrency(corisAddress)
  const outputCurrency = useCurrency(busdAddress)

  const parsedAmount = tryParseAmount('1', inputCurrency ?? undefined)
  const bestTradeExactIn = useTradeExactIn(parsedAmount, outputCurrency ?? undefined)
  const price = bestTradeExactIn?.executionPrice.toSignificant(6)
  return price ? parseFloat(price) : undefined
}

export default useGetCorisBusdLpPrice
