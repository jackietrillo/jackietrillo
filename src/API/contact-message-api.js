const getBaseUrl = function () {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    return "http://localhost:7013";
  else return "https://static1func-test.azurewebsites.net";
};

export const createMessage = async function (data) {
  let url = getBaseUrl() + "/api/message/create";
  console.log(data);
  let response = await fetch(url, {
    method: "POST",
    accept: "application/json",
    body: JSON.stringify(data)
  });
  let result = await response.json();
};

export const getMessages = async function (data) {
  let url = getBaseUrl() + "/api/messages";
  let response = await fetch(url, {
    method: "GET",
    accept: "application/json"
  });
  let result = await response.json();
  return result;
};


