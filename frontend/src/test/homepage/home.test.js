import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../LandingPage/HomePage/hero";
import CircleLayout from "../../LandingPage/HomePage/CircleLayout"

jest.mock("react-router-dom");

describe("Home Component", () => {
  test("renders welcome message", () => {
    render(<Home />);
    expect(
      screen.getByText(/Welcome to CodeChronicles/i)
    ).toBeInTheDocument();
  });

  test("renders tagline", () => {
    render(<Home />);
    expect(
      screen.getByText(/Where Every Line Has a Story/i)
    ).toBeInTheDocument();
  });

  test("renders explore button", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: /Explore Blogs/i })
    ).toBeInTheDocument();
  });
  
  test("explore button calls navigate on click", () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require("react-router-dom"), "useNavigate").mockReturnValue(mockNavigate);

    render(<Home />);
    const button = screen.getByRole("button", { name: /Explore Blogs/i });
    button.click();

    expect(mockNavigate).toHaveBeenCalledWith("/categories");
  });

  test("Explore Our Blog Universe", () => {
   render(<CircleLayout />);
    expect(
      screen.getByText(/Explore Our Blog Universe/i)
    ).toBeInTheDocument();
  });

  test("renders circle layout", () => {
    const { container } = render(<CircleLayout />);
    expect(container.getElementsByClassName("circle-wrapper").length).toBe(1);
  });   

  test("circle layout left side paragraph", () => {
    render(<CircleLayout />);
    expect(
      screen.getByText(/Dive into a wide range of tech topics/i)
    ).toBeInTheDocument();
  });

  test("Start Exploring" ,()=>{
    render(<CircleLayout />);
    expect(
      screen.getByRole("button", { name: /Start Exploring/i })
    ).toBeInTheDocument();
  });
//    test("explore button calls navigate on click", () => {
//     const mockNavigate = jest.fn();
//     jest.spyOn(require("react-router-dom"), "useNavigate").mockReturnValue(mockNavigate);

//     render(<CircleLayout />);
//     const button = screen.getByRole("button", { name: /Start Exploring/i });
//     button.click();

//     expect(mockNavigate).toHaveBeenCalledWith("/categories");
//   });
});
