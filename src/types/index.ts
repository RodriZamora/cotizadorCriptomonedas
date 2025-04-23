import { z } from 'zod'
import { CurrencySchema, CryptoCurrencyResponseSchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>