// "use client";

// import { ReactNode, useEffect, useState } from "react";
// import { Col, Container, Row } from "reactstrap";

// interface ApiResponse {
//   name: string;
//   timestamp: Date;
// }

// export default function ClientSideRender(props:{
//   children?:ReactNode
// }) {
//   const [clienteSideData, setClientSideData] = useState<ApiResponse>();

//   const fetchData = async () => {
//     const data = await fetch("/api/data").then((res) =>
//       res.json()
//     );
//     setClientSideData(data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <Container tag="main">
//       <Row>
//         <Col>
//           <h3>Gerado no cliente: </h3>
//           <h2>{clienteSideData?.timestamp.toString()}</h2>
//         </Col>
//         <Col> {props.children}</Col>
//       </Row>
//     </Container>
//   );
// }
