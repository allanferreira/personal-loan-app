import http from ".."

export interface PostLoanSimulationRequest {
  loan: number
  installments: number
  birthday: Date
  name?: string
  income?: number
}

export interface PostLoanSimulationResponse extends PostLoanSimulationRequest {
  result: {
    totalPayed: number
    payedRate: number
    monthlyPayment: number
  }
}

export async function loanSimulation(
  props: PostLoanSimulationRequest
): Promise<PostLoanSimulationResponse> {
  const { data } = await http.post("/simulation/loan", props)
  return data
}
