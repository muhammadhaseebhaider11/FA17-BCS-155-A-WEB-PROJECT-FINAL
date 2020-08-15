import React from "react";
import { Button,Form,Nav,Navbar} from "react-bootstrap";
import { useHistory } from "react-router-dom";
function  Adminnav() {
    let history = useHistory();
    function handleClick() {
      localStorage.setItem("foodie_token","");
    history.push("/");
    }
    return  (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Captain Cook's</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Adddeal"  >Add Deal</Nav.Link>
      <Nav.Link href="/Adminview">View Deal</Nav.Link>
      <Nav.Link href="/Admindel">Delete  Deal</Nav.Link>
      <Nav.Link href="/Adminrecord">View Record</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="warning" onClick={handleClick} > Sign out </Button>
    </Form>
  </Navbar>

        </div>
    )
  };
  export default Adminnav;