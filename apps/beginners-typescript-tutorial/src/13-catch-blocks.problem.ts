import { expect, it } from "vitest";

const getErrorMessage = (error: unknown) =>{
  if (error instanceof Error) return error.message
  return String(error)
}
const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    return getErrorMessage(e);
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
