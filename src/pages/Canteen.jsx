import Notification from "../components/Notification";
import SideMenu from "../components/SideMenu";
import { Container, Row, Col } from "react-bootstrap";
import { CanteenGrid } from "../data/CanteenGrid";
import Box from '@mui/material/Box';















const Canteen = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* Sidebar */}
         <SideMenu />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          transition: "margin-left 0.3s",
          overflow: 'auto',
        }}
      >
        <Notification/>
        
        <Container fluid>
      <Row>
        <Col xs={12}>
        <h2>
          Canteen</h2>
          </Col>

          <Col xs={12} >

          <Box sx={{ width: '100%' }}>
           <CanteenGrid/>
           </Box>
          
          </Col>
      </Row>
    </Container>
       
      </div>
    </div>
  );
};

export default Canteen;
