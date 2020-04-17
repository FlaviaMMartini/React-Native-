
const BASE_PATH = "https://www.ahgora.com.br";

export default endpoints = {
  SESSION_PATH: BASE_PATH + "/login/jwt",
  EMPLOYEES_PATH: BASE_PATH + "/api/funcionarios",
  GET_IMAGE: BASE_PATH + '/funcionarios/get_image/',
  PENDENCIES_PATH: BASE_PATH + "/justificativa/getAll?c=leader",
  CONFIRMS_PENDENCY_PATH: BASE_PATH + "/justificativa/confirm?c=leader",
}