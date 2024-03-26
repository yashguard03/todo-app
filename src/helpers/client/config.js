let baseUrl = "";
switch (window.location.host) {
  case "localhost:3000":
    baseUrl = "http://localhost:3000";
    break;
  default:
    baseUrl = "http://localhost:3000";
    break;
}

export { baseUrl };
