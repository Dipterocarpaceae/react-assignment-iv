import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import useFetch from "./useFetch";
import { useEffect, useContext } from "react";
import { RootContext } from "./App";

function User(props) {
  const [data] = useFetch(props.urlEnd);
  const { countClick, setCountClick } = useContext(RootContext);
  const clickHandler = () => setCountClick(countClick + 1);
  console.log("User called");

    // Only to console log mount or unmount
    useEffect(() => {
      console.log("User MOUNTED");
      return () => {
        console.log("User UNMOUNTED");
      };
    }, []);

  return (
                <TableContainer component={Paper} sx={{ marginTop: 5 }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Username</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">Company Name</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data &&
                        data.map((item) => (
                          <TableRow
                            key={item.id}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {item.name}
                            </TableCell>
                            <TableCell>{item.username}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.address.street}</TableCell>
                            <TableCell>{item.company.name}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                  <Alert sx={{ marginY: "15px" }} severity="info">
                    Count Click: {countClick}
                  </Alert>
                  <Button variant="contained" onClick={clickHandler}>User Button</Button>
                </TableContainer>
            
          
  );
};

export default User;