import { loanSimulation } from "./simulation"
import { describe, it, expect, vi } from "vitest"
import {
  PostLoanSimulationRequest,
  PostLoanSimulationResponse,
} from "./simulation"
import http from "../index"

describe("loanSimulation", () => {
  const request: PostLoanSimulationRequest = {
    loan: 20000,
    installments: 12,
    birthday: new Date("1990-01-01"),
    name: "John Doe",
    income: 3000,
  }

  const response: PostLoanSimulationResponse = {
    ...request,
    result: {
      totalPayed: 24000,
      payedRate: 10,
      monthlyPayment: 2000,
    },
  }

  it("should call http.post with the correct parameters and return data", async () => {
    http.post = vi.fn().mockResolvedValue({
      data: response,
    })

    const result = await loanSimulation(request)
    expect(http.post).toHaveBeenCalledWith("/simulation/loan", request)
    expect(result).toEqual(response)
  })

  it("should handle errors gracefully", async () => {
    http.post = vi.fn().mockRejectedValue(new Error("Request failed"))
    await expect(loanSimulation(request)).rejects.toThrow("Request failed")
  })
})
