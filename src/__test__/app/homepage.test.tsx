import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Page Home Test", () => {
  it("Display template button", () => {
    render(<Home />);
    expect(screen.getByText("Templates")).toBeInTheDocument();
  });
  it("Display Docu-button description", () => {
    render(<Home />);
    expect(screen.getByText("Find in-depth information about Next.js features and API.")).toBeInTheDocument();
  });

  it("should display only Deploy text", ()=>{
    render(<Home />)
    expect(screen.getByRole("heading", {
      name: /Deploy/i
    })).toBeInTheDocument();
  })
});
