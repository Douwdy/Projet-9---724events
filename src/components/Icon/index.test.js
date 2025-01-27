import { render, screen } from "@testing-library/react";
import md5 from "md5";
import Icon from ".";

describe("Icon component", () => {
    describe("When a icon is created with name twitch", () => {
        it("the icon contain this path hash value 327fbc38c8e878259c3ec35ef231517a", () => {
            render(<Icon name="twitch" />)
            expect(md5(screen.getByTestId("icon").getAttribute('d'))).toEqual('327fbc38c8e878259c3ec35ef231517a')
        });
    });
    describe("When a icon is created with name facebook", () => {
        it("the icon contain this path hash value bbea4c9e40773b969fdb6e406059f853", () => {
            render(<Icon name="facebook" />)
            expect(md5(screen.getByTestId("icon").getAttribute('d'))).toEqual('bbea4c9e40773b969fdb6e406059f853')
        });
    });
    describe("When a icon is created with name twitter", () => {
        it("the icon contain this path hash value 8e7d2c8e8e8e8e8e8e8e8e8e8e8e8e8e", () => {
            render(<Icon name="twitter" />)
            expect(md5(screen.getByTestId("icon").getAttribute('d'))).toEqual('82f5be4a5c07199cb75dacec50b90b2a')
        });
    });
    describe("When a icon is created with name youtube", () => {
        it("the icon contain this path hash value 9f8e7d6c5b4a3a2b1c0d9e8f7d6c5b4a", () => {
            render(<Icon name="youtube" />)
            expect(md5(screen.getByTestId("icon").getAttribute('d'))).toEqual('43342876c2fc40e5b2afe621443ff95b')
        });
    });
    describe("When a icon is created with name close", () => {
        it("the icon contain this path hash value 0a1b2c3d4e5f6g7h8i9j0a1b2c3d4e5f", () => {
            render(<Icon name="close" />)
            expect(md5(screen.getByTestId("icon").getAttribute('d'))).toEqual('fe53fa5bf815b6d5983fcadf9a15d3d1')
        });
    });
});