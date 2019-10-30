import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

function DefaultPage() {
  return (
    <Header bgClass="bg-default-image" title="404">
      <p className="sub-text">You are in the wrong place</p>
      <Button as={Link} to="/" color="grey" content="RETURN HOME" size="big" />
    </Header>
  );
}
export default DefaultPage;
