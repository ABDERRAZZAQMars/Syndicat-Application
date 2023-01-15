import { useState, useEffect } from "react";
import axios from "axios";
import TableAppartement from "../../components/dashboard/tables/TableAppartement";
const LINK = "http://localhost:8000/api/admin";

function AppartementsPage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios.get(LINK + "/appartements").then((res) => setApartments(res.data));
  }, []);

  return (
    <div>
      <TableAppartement apartments={apartments} />
    </div>
  );
}

export default AppartementsPage;
