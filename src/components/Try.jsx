import { useState } from "react";
import { Nav } from "react-bootstrap";
import { FaHome, FaCopy, FaArrowsAltH } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "../assets/css/SideNav.css";

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMouseEnter = () => {
    if (isCollapsed) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isCollapsed) setIsHovered(false);
  };

  const isExpanded = !isCollapsed || isHovered;

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: isExpanded ? "300px" : "80px",
          backgroundColor: "#f3f4f6",
          color: "#111827",
          transition: "width 0.3s",
          zIndex: 1000,
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Sidebar Header */}
        <div
          className="d-flex align-items-center justify-content-between px-3 py-3"
          style={{
            backgroundColor: "#e5e7eb",
            borderBottom: "1px solid #d1d5db",
          }}
        >
          {/* Logo and Title */}
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                marginRight: isExpanded ? "10px" : "0",
               
              }}
            />
            {isExpanded && (
              <div>
                <div className="textColor fw-bold">Feedback App</div>
                <div className="textColor small">SRM Technologies</div>
              </div>
            )}
          </div>

          {/* Toggle Icon - Visible only when expanded */}
          {isExpanded && (
            <div
              onClick={toggleSidebar}
              style={{
                fontSize: "18px",
                color: "#111827",
                cursor: "pointer",
              }}
            >
              <FaArrowsAltH />
            </div>
          )}
        </div>

        {/* Navigation */}
        <Nav className="flex-column mt-3 px-2">
          {/* Main Item */}
          <Nav.Link href="#" className="textColor d-flex align-items-center">
            <FaHome
              style={{
                marginRight: isExpanded ? "10px" : "0",
              }}
            />
            {isExpanded && <span>Dashboard</span>}
          </Nav.Link>

          {/* Submenu */}
          <div>
            <Nav.Link
              href="#"
              className="textColor d-flex align-items-center"
            >
              <FaCopy
                style={{
                  marginRight: isExpanded ? "10px" : "0",
                }}
              />
              {isExpanded && <span>Super Admin</span>}
            </Nav.Link>
            {isExpanded && (
              <div style={{ paddingLeft: "20px" }}>
                <Nav.Link href="#" className="textColor">
                  Invite
                </Nav.Link>
                <Nav.Link href="#" className="textColor">
                  Admin
                </Nav.Link>
              </div>
            )}
          </div>
        </Nav>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          transition: "margin-left 0.3s",
        }}
      >
       
      </div>
    </div>
  );
};

export default SideNav;
