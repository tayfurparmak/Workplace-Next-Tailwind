

export default function ContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <>
    </>
    // <Html>
    //   <Section style={main}>
    //     <Container style={container}>
    //       <Text style={heading}>Hi there!</Text>
    //       <Text style={paragraph}>
    //         You got a new message from <b> {name} </b>
    //         <br />Email: {email}
    //       </Text>
    //       <Text style={paragraph}>Message: {message}</Text>
    //       <br />
    //       <Text style={paragraph}>
    //         Best wishes,
    //       </Text>
    //     </Container>
    //   </Section>
    // </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "12px",
  maxWidth: "580px",
  with: "100%",
};

const heading = {
  fontSize: "28px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};
