import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #eaeaea",
      borderRadius: "5px",
      backgroundColor: "#f8f9fa",
    }}
  >
    <h1 style={{ color: "#333", marginBottom: "20px" }}>
      New Portfolio Contact
    </h1>

    <div style={{ marginBottom: "20px" }}>
      <p style={{ margin: "5px 0", fontWeight: "bold" }}>From: {name}</p>
      <p style={{ margin: "5px 0", color: "#555" }}>Email: {email}</p>
    </div>

    <div
      style={{
        padding: "15px",
        backgroundColor: "#ffffff",
        borderRadius: "4px",
        border: "1px solid #eaeaea",
      }}
    >
      <h2 style={{ fontSize: "18px", marginBottom: "10px", color: "#444" }}>
        Message:
      </h2>
      <p style={{ lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{message}</p>
    </div>

    <div
      style={{
        marginTop: "25px",
        fontSize: "14px",
        color: "#777",
        borderTop: "1px solid #eaeaea",
        paddingTop: "15px",
      }}
    >
      <p>This email was sent from your portfolio website contact form.</p>
    </div>
  </div>
);
