import { useState, useEffect } from "react";
import axios from "axios";
import TableClient from "../../components/dashboard/tables/TableClient";
const LINK = "http://localhost:8000/api/admin";

function ClientsPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get(LINK + "/clients").then((res) => setClients(res.data));
  }, []);
  return (
    <div>
      <TableClient clients={clients} />
    </div>
  );
}

export default ClientsPage;
