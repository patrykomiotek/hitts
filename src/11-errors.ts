class HttpError extends Error {
  code = 0;
}
class ValidationError extends Error {}

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    // make some operations
    if (state === "fail") {
      throw new Error("Failure!!!");
    }
    // API communication
    throw new HttpError("");
  } catch (e) {
    //
    if (e instanceof HttpError) {
      // notify logger
      return e.code;
    } else if (e instanceof ValidationError) {
      // notify UI
      return e.message;
    } else if (e instanceof Error) {
      return e.message;
    }
  }
};
