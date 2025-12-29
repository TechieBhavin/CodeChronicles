const data = [
  {
    id: 1,
    title: "Introduction to Computer Networks",
    slug: "introduction-to-computer-networks",
    description: "Learn what computer networks are, their types, and why they are important.",
    category: "COMPUTER NETWORKS",
    content: `
Computer Networks allow multiple devices to communicate and share resources.

A computer network is a collection of interconnected devices such as computers, servers, routers, and switches.

Networks help in data sharing, communication, resource utilization, and scalability.
`, image: "/media/demo.png"
  },
  {
    id: 2,
    title: "Types of Computer Networks: LAN, MAN, WAN",
    slug: "types-of-computer-networks-lan-man-wan",
    description: "Understand different types of networks with real-world examples.",
    category: "COMPUTER NETWORKS",
    content: `
LAN, MAN, and WAN are classified based on geographical coverage.

LAN covers small areas like offices.
MAN covers cities.
WAN covers countries and continents.
`, image: "/media/demo.png"
  },
  {
    id: 3,
    title: "OSI Model Explained Layer by Layer",
    slug: "osi-model-explained-layer-by-layer",
    description: "A detailed explanation of the 7 layers of the OSI model.",
    category: "COMPUTER NETWORKS",
    content: `
The OSI model has 7 layers.

Physical, Data Link, Network, Transport, Session, Presentation, and Application.

Each layer has a specific responsibility in data transmission.
`, image: "/media/demo.png"
  },
  {
    id: 4,
    title: "TCP/IP Model and Its Layers",
    slug: "tcp-ip-model-and-its-layers",
    description: "Understand the TCP/IP model and how it differs from OSI.",
    category: "COMPUTER NETWORKS",
    content: `
The TCP/IP model is a practical model used in real networks.

It consists of Application, Transport, Internet, and Network Access layers.
`, image: "/media/demo.png"
  },
  {
    id: 5,
    title: "Difference Between OSI Model and TCP/IP Model",
    slug: "difference-between-osi-and-tcp-ip-model",
    description: "Compare OSI and TCP/IP models based on layers and functionality.",
    category: "COMPUTER NETWORKS",
    content: `
OSI is a theoretical model with 7 layers.
TCP/IP is a practical model with 4 layers.

TCP/IP is widely used in the internet.
`, image: "/media/demo.png"
  },
  {
    id: 6,
    title: "What is an IP Address? IPv4 vs IPv6",
    slug: "what-is-an-ip-address-ipv4-vs-ipv6",
    description: "Learn IP addressing, structure, and IPv4 vs IPv6 differences.",
    category: "COMPUTER NETWORKS",
    content: `
An IP address uniquely identifies a device on a network.

IPv4 uses 32-bit addressing.
IPv6 uses 128-bit addressing and solves IP exhaustion.
`, image: "/media/demo.png"
  },
  {
    id: 7,
    title: "TCP vs UDP: Key Differences Explained",
    slug: "tcp-vs-udp-key-differences",
    description: "Understand how TCP and UDP work and when to use them.",
    category: "COMPUTER NETWORKS",
    content: `
TCP is connection-oriented and reliable.
UDP is connectionless and faster.

TCP is used for web browsing.
UDP is used for streaming and gaming.
`, image: "/media/demo.png"
  },
  {
    id: 8,
    title: "What is DNS and How It Works?",
    slug: "what-is-dns-and-how-it-works",
    description: "Learn how DNS converts domain names into IP addresses.",
    category: "COMPUTER NETWORKS",
    content: `
DNS stands for Domain Name System.

It translates human-readable domain names into IP addresses using hierarchical servers.
`, image: "/media/demo.png"
  },
  {
    id: 9,
    title: "HTTP vs HTTPS Explained",
    slug: "http-vs-https-explained",
    description: "Understand HTTP and HTTPS and how secure communication works.",
    category: "COMPUTER NETWORKS",
    content: `
HTTP is not secure.
HTTPS uses SSL/TLS encryption.

HTTPS ensures data confidentiality and integrity.
`, image: "/media/demo.png"
  },
  {
    id: 10,
    title: "What Happens When You Type a URL in a Browser?",
    slug: "what-happens-when-you-type-a-url",
    description: "A complete journey of a web request from browser to server.",
    category: "COMPUTER NETWORKS",
    content: `
Typing a URL triggers DNS lookup, TCP connection, HTTP request, and response.

The browser renders the page after receiving data from the server.
`, image: "/media/demo.png"
  },
  {
    id: 11,
    title: "Network Devices: Hub, Switch, Router",
    slug: "network-devices-hub-switch-router",
    description: "Understand working and differences between common network devices.",
    category: "COMPUTER NETWORKS",
    content: `
Hub broadcasts data to all devices.
Switch sends data to specific devices.
Router connects multiple networks.
`, image: "/media/demo.png"
  },
  {
    id: 12,
    title: "What is a Firewall?",
    slug: "what-is-a-firewall",
    description: "Learn how firewalls protect networks from unauthorized access.",
    category: "COMPUTER NETWORKS",
    content: `
A firewall monitors incoming and outgoing traffic.

It acts as a barrier between trusted and untrusted networks.
`, image: "/media/demo.png"
  },
  {
    id: 13,
    title: "What is Subnetting?",
    slug: "what-is-subnetting",
    description: "Understand subnetting and its role in IP address management.",
    category: "COMPUTER NETWORKS",
    content: `
Subnetting divides a network into smaller networks.

It improves performance and security.
`, image: "/media/demo.png"
  },
  {
    id: 14,
    title: "MAC Address Explained",
    slug: "mac-address-explained",
    description: "Learn what MAC addresses are and how they work.",
    category: "COMPUTER NETWORKS",
    content: `
MAC address is a unique identifier assigned to network interfaces.

It operates at the Data Link layer.
`, image: "/media/demo.png"
  },
  {
    id: 15,
    title: "What is ARP? Address Resolution Protocol",
    slug: "what-is-arp",
    description: "Understand how IP addresses map to MAC addresses.",
    category: "COMPUTER NETWORKS",
    content: `
ARP resolves IP addresses to MAC addresses.

It is essential for local network communication.
`, image: "/media/demo.png"
  },
  {
    id: 16,
    title: "What is NAT? Network Address Translation",
    slug: "what-is-nat",
    description: "Learn how NAT helps in IP address conservation.",
    category: "COMPUTER NETWORKS",
    content: `
NAT converts private IPs into public IPs.

It is commonly used in routers.
`, image: "/media/demo.png"
  },
  {
    id: 17,
    title: "What is DHCP?",
    slug: "what-is-dhcp",
    description: "Understand how devices get IP addresses automatically.",
    category: "COMPUTER NETWORKS",
    content: `
DHCP dynamically assigns IP addresses.

It reduces manual configuration effort.
`, image: "/media/demo.png"
  },
  {
    id: 18,
    title: "What is Bandwidth and Latency?",
    slug: "what-is-bandwidth-and-latency",
    description: "Learn the difference between bandwidth and latency.",
    category: "COMPUTER NETWORKS",
    content: `
Bandwidth is data transfer capacity.
Latency is delay in data transmission.
`, image: "/media/demo.png"
  },
  {
    id: 19,
    title: "What is Packet Switching?",
    slug: "what-is-packet-switching",
    description: "Understand how data is broken into packets.",
    category: "COMPUTER NETWORKS",
    content: `
Packet switching divides data into packets.

Each packet travels independently across the network.
`, image: "/media/demo.png"
  },
  {
    id: 20,
    title: "What is Circuit Switching?",
    slug: "what-is-circuit-switching",
    description: "Learn how circuit switching works and where it is used.",
    category: "COMPUTER NETWORKS",
    content: `
Circuit switching establishes a dedicated path.

It was used in traditional telephone networks.
`, image: "/media/demo.png"
  },
  {
    id: 21,
    title: "What is Network Topology?",
    slug: "what-is-network-topology",
    description: "Understand different types of network topologies.",
    category: "COMPUTER NETWORKS",
    content: `
Network topology defines the layout of a network.

Examples include star, bus, ring, and mesh.
`, image: "/media/demo.png"
  },
  {
    id: 22,
    title: "What is VPN?",
    slug: "what-is-vpn",
    description: "Learn how VPNs provide secure communication over the internet.",
    category: "COMPUTER NETWORKS",
    content: `
VPN creates a secure tunnel for data transmission.

It ensures privacy and anonymity.
`, image: "/media/demo.png"
  },
  {
    id: 23,
    title: "What is Load Balancing?",
    slug: "what-is-load-balancing",
    description: "Understand how load balancing improves performance.",
    category: "COMPUTER NETWORKS",
    content: `
Load balancing distributes traffic across servers.

It improves reliability and scalability.
`, image: "/media/demo.png"
  },
  {
    id: 24,
    title: "What is CDN? Content Delivery Network",
    slug: "what-is-cdn",
    description: "Learn how CDNs speed up web content delivery.",
    category: "COMPUTER NETWORKS",
    content: `
CDNs store cached content near users.

They reduce latency and server load.
`, image: "/media/demo.png"
  },
  {
    id: 25,
    title: "What is Network Security?",
    slug: "what-is-network-security",
    description: "Understand the basics of securing computer networks.",
    category: "COMPUTER NETWORKS",
    content: `
Network security protects data and systems.

It includes firewalls, encryption, and access control.
`, image: "/media/demo.png"
  }
  ,{
    id: 26,
    title: "What is ICMP? Internet Control Message Protocol",
    slug: "what-is-icmp",
    description: "Understand ICMP and how it helps in network diagnostics.",
    category: "COMPUTER NETWORKS",
    content: `
ICMP is used for error reporting and diagnostics.

Tools like ping and traceroute use ICMP messages.

It operates at the Network layer.
`,
    image: "/media/demo.png"
  },
  {
    id: 27,
    title: "What is Ping and How It Works?",
    slug: "what-is-ping-and-how-it-works",
    description: "Learn how ping checks network connectivity.",
    category: "COMPUTER NETWORKS",
    content: `
Ping sends ICMP echo requests.

It measures round-trip time and packet loss.

Used to check host availability.
`,
    image: "/media/demo.png"
  },
  {
    id: 28,
    title: "What is Traceroute?",
    slug: "what-is-traceroute",
    description: "Understand how traceroute tracks packet paths.",
    category: "COMPUTER NETWORKS",
    content: `
Traceroute shows the path taken by packets.

It identifies hops between source and destination.

Helpful for troubleshooting delays.
`,
    image: "/media/demo.png"
  },
  {
    id: 29,
    title: "What is Network Congestion?",
    slug: "what-is-network-congestion",
    description: "Learn causes and effects of network congestion.",
    category: "COMPUTER NETWORKS",
    content: `
Network congestion occurs when traffic exceeds capacity.

It leads to packet loss and delays.

Congestion control helps manage traffic.
`,
    image: "/media/demo.png"
  },
  {
    id: 30,
    title: "What is Quality of Service (QoS)?",
    slug: "what-is-quality-of-service-qos",
    description: "Understand how QoS prioritizes network traffic.",
    category: "COMPUTER NETWORKS",
    content: `
QoS prioritizes critical traffic.

Used in VoIP and video streaming.

Improves user experience.
`,
    image: "/media/demo.png"
  },
  {
    id: 31,
    title: "What is Proxy Server?",
    slug: "what-is-proxy-server",
    description: "Learn how proxy servers work and their benefits.",
    category: "COMPUTER NETWORKS",
    content: `
A proxy acts as an intermediary between client and server.

It improves security and privacy.

Used for content filtering and caching.
`,
    image: "/media/demo.png"
  },
  {
    id: 32,
    title: "What is Reverse Proxy?",
    slug: "what-is-reverse-proxy",
    description: "Understand how reverse proxies handle server requests.",
    category: "COMPUTER NETWORKS",
    content: `
Reverse proxy sits in front of servers.

It distributes client requests.

Used in load balancing and security.
`,
    image: "/media/demo.png"
  },
  {
    id: 33,
    title: "What is SMTP?",
    slug: "what-is-smtp",
    description: "Learn how emails are sent using SMTP.",
    category: "COMPUTER NETWORKS",
    content: `
SMTP stands for Simple Mail Transfer Protocol.

It is used to send emails.

Works with POP3 and IMAP.
`,
    image: "/media/demo.png"
  },
  {
    id: 34,
    title: "What is POP3 vs IMAP?",
    slug: "pop3-vs-imap",
    description: "Understand email retrieval protocols.",
    category: "COMPUTER NETWORKS",
    content: `
POP3 downloads emails locally.

IMAP syncs emails across devices.

IMAP is more flexible.
`,
    image: "/media/demo.png"
  },
  {
    id: 35,
    title: "What is FTP?",
    slug: "what-is-ftp",
    description: "Learn how FTP is used for file transfer.",
    category: "COMPUTER NETWORKS",
    content: `
FTP stands for File Transfer Protocol.

Used to upload and download files.

Operates over TCP.
`,
    image: "/media/demo.png"
  },
  {
    id: 36,
    title: "What is SFTP?",
    slug: "what-is-sftp",
    description: "Understand secure file transfer using SFTP.",
    category: "COMPUTER NETWORKS",
    content: `
SFTP is a secure version of FTP.

It uses SSH encryption.

Provides secure file transfers.
`,
    image: "/media/demo.png"
  },
  {
    id: 37,
    title: "What is Telnet?",
    slug: "what-is-telnet",
    description: "Learn how Telnet allows remote access.",
    category: "COMPUTER NETWORKS",
    content: `
Telnet allows remote command execution.

It is not secure.

Mostly replaced by SSH.
`,
    image: "/media/demo.png"
  },
  {
    id: 38,
    title: "What is SSH?",
    slug: "what-is-ssh",
    description: "Understand secure remote access using SSH.",
    category: "COMPUTER NETWORKS",
    content: `
SSH provides encrypted remote access.

Used by system administrators.

More secure than Telnet.
`,
    image: "/media/demo.png"
  },
  {
    id: 39,
    title: "What is Wireless Networking?",
    slug: "what-is-wireless-networking",
    description: "Learn basics of wireless communication.",
    category: "COMPUTER NETWORKS",
    content: `
Wireless networks use radio waves.

Wi-Fi is a common example.

Provides mobility and flexibility.
`,
    image: "/media/demo.png"
  },
  {
    id: 40,
    title: "What is Wi-Fi?",
    slug: "what-is-wifi",
    description: "Understand how Wi-Fi works and standards.",
    category: "COMPUTER NETWORKS",
    content: `
Wi-Fi allows wireless internet access.

Uses IEEE 802.11 standards.

Common in homes and offices.
`,
    image: "/media/demo.png"
  }

];

export default data;
