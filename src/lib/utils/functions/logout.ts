import Cookies from "js-cookie";

export function logout() {
  Cookies.remove(process.env.TOKEN!);
}
