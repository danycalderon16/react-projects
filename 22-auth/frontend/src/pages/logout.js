import { redirect } from "react-router-dom";
function LogoputPage() {
  return <></>;
}

export default LogoputPage;

export function action() {
  console.log("hola");
  localStorage.removeItem("token");
  return redirect("/");
}
