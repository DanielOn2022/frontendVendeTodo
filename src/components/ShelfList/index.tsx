import { useLazyQuery, useMutation } from "@apollo/client";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { beginSortingProcess } from "./queries";

export function ShelfList(props: any) {
  const [shelfs, setShelfs] = useState([]);
  const [beginSort, { data, loading }] = useLazyQuery(beginSortingProcess);

  useEffect(() => {
    console.log("SHELFDATA EN LIST ->->->",data)
    if (data) setShelfs(data.beginSortingProcess);
  }, data);

  const handleOnBeginSort = async () => {
    const shelfs = await beginSort({
      variables: { role: localStorage.getItem("role") },
    });
    setShelfs(data.beginSortingProcess);
  };

  console.log("SHELFS ",shelfs)
  return (
    <Container>
      <p>shelf</p>
      <Button onClick={handleOnBeginSort}>Sort Shelfs</Button>
    </Container>
  );
}
