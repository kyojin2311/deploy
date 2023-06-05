import { requireUserSession } from "../services/auth.server";
import { getOwnInfo } from "../services/APIAction.server";
import ExpiredTable from "../components/Dashboard/Expired";
export default function ExpiredSoon() {
  return <ExpiredTable />;
}
export async function loader({ request }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const info = await getOwnInfo(request);
  const url =
    "https://registrytotal.herokuapp.com/api/office/" +
    info.workFor._id +
    "/outdatecar";
  const dataPass_1 = {
    status: "expired",
    city: "",
    info: "0",
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataPass_1),
  });
  const resData = await response.json();
  console.log(resData);
  return resData;
}