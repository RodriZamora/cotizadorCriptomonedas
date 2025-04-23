import { z } from 'zod'
import { CurrencySchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>