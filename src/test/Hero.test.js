import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Landing_page/Home/Hero";

describe ("Hero component", () => {
    
    test("renders the Hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "heropage.svg");
});
});