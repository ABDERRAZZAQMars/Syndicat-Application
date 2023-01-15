import { useState, useEffect } from "react";
import axios from "axios";
import TableFacture from "../../components/dashboard/tables/TableFacture";
const LINK = "http://localhost:8000/api/admin";

function FacturesPage() {
  const [factures, setFactures] = useState([]);

  useEffect(() => {
    axios.get(LINK + "/payments").then((res) => setFactures(res.data));
  }, []);

  return (
    <div>
      <TableFacture factures={factures} />
    </div>
  );
}

export default FacturesPage;
