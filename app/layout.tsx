import type { Metadata } from "next"
import "@/app/globals.css"
import AppContainer from "@/components/Layout/AppContainer"
import { LoanSimulationProvider } from "@/features/LoanSimulation"

export const metadata: Metadata = {
  title: "Personal Loan | Empréstimos pessoais rápidos e sem burocracia",
  description: "Empréstimos pessoais rápidos e sem burocracia",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <LoanSimulationProvider>
          <AppContainer>{children}</AppContainer>
        </LoanSimulationProvider>
      </body>
    </html>
  )
}
