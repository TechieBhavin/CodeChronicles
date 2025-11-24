import React from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleblog = () => {
    navigate("/categories/cn/blog");
  };
  return (
    <>
      <div className="container text-center  hero">
        <h1 className="fw-bold">Computer Network</h1>
        {/* <p className="text-muted">Browse by subject</p> */}

        {/* <div className="col text-center d-flex justify-content-center flex-wrap gap-4"> */}
        <div className="card" onClick={handleblog}>
          <div className="card-body">
            <p class="title-text">Introduction to computer networks</p>
            <p className="text-muted card-text">
              A Computer Network is a system where two or more devices are
              linked together to share data, resources and information. These
              networks can range from simple setups, like connecting two devices
              in your home, to massive global systems, like the Internet. Below
              are some uses of computer networks
            </p>
          </div>
        </div>
        <div className="card" onClick={handleblog}>
          <div className="card-body">
            <p class="title-text">How Does a Computer Network Work</p>
            <p className="text-muted card-text">
              Any device in a network, such as a modem, router, or computer,
              that sends or receives data.The medium that connects nodes, like
              cables, wires, or wireless signals. Networks use rules called
              protocols to send and receive data between devices. Each device is
              identified by a unique IP Address.
            </p>
          </div>
        </div>
        <div className="card" onClick={handleblog}>
          <div className="card-body">
            <p class="title-text">Types of Computer Network Architecture</p>
            <p className="text-muted card-text">
              Computer Network falls under these broad Categories: Client-Server
              Architecture:Client-Server Architecture is a type of Computer
              Network Architecture in which Nodes can be Servers or Clients.
              Here, the server node can manage the Client Node Behaviour.
              Peer-to-Peer Architecture: In P2P (Peer-to-Peer) Architecture,
              there is not any concept of a Central Server. Each device is free
              for working as either client or server.
            </p>
          </div>
        </div>
        <div className="card" onClick={handleblog}>
          <div className="card-body">
            <p class="title-text">Functions of Network Devices</p>
            <p className="text-muted card-text">
              Enable communication by transmitting and receiving data between
              devices. Allow devices to connect to networks efficiently and
              securely. Improve network performance by reducing congestion and
              managing traffic. Provide security by controlling access and
              preventing unauthorized activities. Extend network coverage and
              solve signal loss or attenuation problems.
            </p>
          </div>
        </div>
        <div className="card" onClick={handleblog}>
          <div className="card-body">
            <p class="title-text">Types of Computer Networks</p>
            <p className="text-muted card-text">
              Computer networks are classified based on several factors, such as
              geographical area, ownership, architecture, topology, and
              transmission technology. The below is the classification of the
              networks:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
