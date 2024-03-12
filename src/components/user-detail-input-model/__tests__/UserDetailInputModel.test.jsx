import { render, screen } from "@testing-library/react";
import UserDetailInputModel from "../UserDetailInputModel";

test("Save and exit exists on dom", async () => {
    render(UserDetailInputModel);

    const buttonElement = await screen.findByTitle("save-button", {
        title: "save-button",
    });

    expect(buttonElement).toBeTruthy();
});
