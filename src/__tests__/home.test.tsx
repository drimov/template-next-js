import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import Home from "@/app/page"

describe("app", () => {
  it("render `hello world`", () => {
    render(<Home />)
    const text = screen.getByText(/hello world/i)
    expect(text).toBeInTheDocument()
  })
})
