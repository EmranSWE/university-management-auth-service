export type IGeneicErrorResponse = {
  statusCode: number
  message: string
  errorMessages: {
    path: string
    message: string[]
  }[]
}
