import { useState, useEffect } from "react";
import axios from "axios";
import TableAppartement from "../../components/dashboard/tables/TableAppartement";
const LINK = "http://localhost:8000/api/admin";

function AppartementsPage() {
  const [apartments, setApartments] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios.get(LINK + "/appartements").then((res) => setApartments(res.data));
  }, [deleted]);

  return (
    <div>
      <TableAppartement apartments={apartments} setDeleted={setDeleted} />
    </div>
  );
}

export default AppartementsPage;
