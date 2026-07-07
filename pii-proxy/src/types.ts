export const PII_CATEGORIES = [
  'EMAIL',
  'PHONE',
  'ADDRESS',
  'URL_USER',
  'API_KEY',
  'CREDIT_CARD',
  'MY_NUMBER',
  'NAME',
  'ORG',
  'SCHOOL',
  'SSN',
  'IP_ADDRESS',
  'POSTAL_CODE',
] as const

export type PIICategory = (typeof PII_CATEGORIES)[number]

export type PIIMatch = {
  readonly text: string
  readonly category: PIICategory
  readonly start: number
  readonly end: number
  readonly confidence: number
}

export type DictionaryEntry = {
  readonly text: string
  readonly category: PIICategory
}

export type PIIMode = 'pseudonymize' | 'anonymize'

export type AuditLogDestination = 'stderr' | 'file'

export type AuditLogConfig = {
  readonly enabled: boolean
  readonly destination: AuditLogDestination
  readonly path?: string
  readonly reviewThreshold: number
}

export type PIIFilterConfig = {
  readonly enabled: boolean
  readonly mode: PIIMode
  readonly categories: readonly PIICategory[]
  readonly ollamaEndpoint: string
  readonly ollamaModel: string
  readonly ollamaEnabled: boolean
  readonly customPatterns: readonly { readonly name: string; readonly pattern: string }[]
  readonly dictionary: readonly DictionaryEntry[]
  readonly allowlist: readonly string[]
  readonly auditLog: AuditLogConfig
}

export const DEFAULT_CONFIG: PIIFilterConfig = {
  enabled: true,
  mode: 'pseudonymize',
  categories: [
    'EMAIL',
    'PHONE',
    'ADDRESS',
    'API_KEY',
    'CREDIT_CARD',
    'MY_NUMBER',
    'NAME',
    'ORG',
    'SCHOOL',
    'SSN',
    'IP_ADDRESS',
    'POSTAL_CODE',
  ],
  ollamaEndpoint: 'http://localhost:11434',
  ollamaModel: 'gemma3:4b',
  ollamaEnabled: true,
  customPatterns: [],
  dictionary: [],
  allowlist: [],
  auditLog: {
    enabled: false,
    destination: 'stderr',
    reviewThreshold: 0.8,
  },
}
