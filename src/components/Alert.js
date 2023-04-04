import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function Aalert(props) {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      props.alert && <Alert variant={props.alert.type} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{props.alert.type}</Alert.Heading>{props.alert.msg}
      </Alert>
    );
  }
  //   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
