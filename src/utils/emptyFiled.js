/* eslint-disable */
const fieldValidator = (type, args) => {
  const inputFieldCount = [];
  const empty = [];
  const response = {};
  if (type == "register") {
    const expectedInput = [
      "firstname",
      "lastname",
      "email",
      "mobile",
      "country",
      "prefference",
    ];
    for (const input in args) {
      inputFieldCount.push(input);
      if (typeof inputField === "string") {
        if (args[input].trim() === "") {
          empty.push(input);
          response.status = 400;
          response.error = `${empty} field/s cannot be empty`;
        }
      }
      if (!expectedInput.includes(input)) {
        empty.push(input);
        response.status = 400;
        response.error = `${empty} are not expected in Registraion`;
      }
    }
    if (inputFieldCount.length < expectedInput.length) {
      response.status = 400;
      response.error =
        "some of the required field/s are not provided please check and provide them";
    }
    return response;
  }

  if (type == "session") {
    const expectedInput = ["name", "email", "mobile", "country"];
    for (const input in args) {
      inputFieldCount.push(input);
      if (typeof inputField === "string") {
        if (args[input].trim() === "") {
          empty.push(input);
          response.status = 400;
          response.error = `${empty} field/s cannot be empty`;
        }
      }
      if (!expectedInput.includes(input)) {
        empty.push(input);
        response.status = 400;
        response.error = `${empty} are not expected in session`;
      }
    }
    if (inputFieldCount.length < expectedInput.length) {
      response.status = 400;
      response.error =
        "some of the required field/s are not provided please check and provide them";
    }
    return response;
  }
};

export default fieldValidator;
