import React, { useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CrashModal-style.css";

function CrashModal() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  return (
    <Container style={{ paddingRight: "2rem" }}>
      {showButton && (
        <Button onClick={() => setShowMessage(true)}>Детальніше</Button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          ref={nodeRef}
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>Кращ</Alert.Heading>
          <p>
            Цей товар — топ за свої гроші, адже поєднує в собі все найкраще:
            якість, бренд, характеристики та співвідношення до ціни.{" "}
          </p>
        </Alert>
      </CSSTransition>
    </Container>
  );
}

export default CrashModal;
