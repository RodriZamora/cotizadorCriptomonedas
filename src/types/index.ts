import { z } from 'zod'
import { CurrencySchema, CryptoCurrencyResponseSchema, PairsSchema, CryptoPriceSchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairsSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>