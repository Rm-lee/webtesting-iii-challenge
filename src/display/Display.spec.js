// Test away// Test away!
import React from "react"
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display"


test("Is open", () => {
 const {getByText} = rtl.render(<Display />);
 expect(getByText(/Unlocked/i).textContent).toBe("Unlocked")
 expect(getByText(/Open/i).textContent).toBe("Open")


});