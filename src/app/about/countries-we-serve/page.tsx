import { redirect } from "next/navigation";

export default function CountriesWeServeRedirect() {
  redirect("/about/why-us");
}
