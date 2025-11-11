// Image imports
import businessLaptopPro15 from "../assets/images/electronics-and-it-products-images/Business Laptop Pro 15.webp";
import gamingDesktopWorkstation from "../assets/images/electronics-and-it-products-images/Gaming Desktop Workstation.webp";
import enterpriseTablet12Pro from "../assets/images/electronics-and-it-products-images/Enterprise Tablet 12 Pro.webp";
import ultrabookSlim14 from "../assets/images/electronics-and-it-products-images/Ultrabook Slim 14.webp";
import allInOneDesktop24 from "../assets/images/electronics-and-it-products-images/All-in-One Desktop 24.webp";
import rackServer2UEnterprise from "../assets/images/electronics-and-it-products-images/Rack Server 2U Enterprise.webp";
import networkAttachedStorage8Bay from "../assets/images/electronics-and-it-products-images/Network Attached Storage 8-Bay.webp";
import upsSystem3000VA from "../assets/images/electronics-and-it-products-images/UPS System 3000VA.webp";
import sanStorageArray from "../assets/images/electronics-and-it-products-images/SAN Storage Array.webp";
import backupPowerGenerator from "../assets/images/electronics-and-it-products-images/Backup Power Generator.webp";
import enterpriseRouter48Port from "../assets/images/electronics-and-it-products-images/Enterprise Router 48-Port.webp";
import managedSwitch24PortPoE from "../assets/images/electronics-and-it-products-images/Managed Switch 24-Port PoE+.webp";
import wirelessAccessPointWiFi6E from "../assets/images/electronics-and-it-products-images/Wireless Access Point Wi-Fi 6E.webp";
import firewallSecurityAppliance from "../assets/images/electronics-and-it-products-images/Firewall Security Appliance.webp";
import loadBalancerAppliance from "../assets/images/electronics-and-it-products-images/Load Balancer Appliance.webp";
import ipSecurityCamera4K from "../assets/images/electronics-and-it-products-images/4K IP Security Camera.webp";
import nvr32ChannelSystem from "../assets/images/electronics-and-it-products-images/NVR 32-Channel System.webp";
import ptzDomeCamera from "../assets/images/electronics-and-it-products-images/PTZ Dome Camera.webp";
import videoManagementSoftware from "../assets/images/electronics-and-it-products-images/Video Management Software.webp";
import accessControlSystem from "../assets/images/electronics-and-it-products-images/Access Control System.webp";
import ledVideoWall55Inch from "../assets/images/electronics-and-it-products-images/LED Video Wall 55-inch.webp";
import outdoorLEDBillboard from "../assets/images/electronics-and-it-products-images/Outdoor LED Billboard.webp";
import interactiveTouchDisplay75 from "../assets/images/electronics-and-it-products-images/Interactive Touch Display 75.webp";
import digitalSignageMediaPlayer from "../assets/images/electronics-and-it-products-images/Digital Signage Media Player.webp";
import transparentLEDDisplay from "../assets/images/electronics-and-it-products-images/Transparent LED Display.webp";
import smartHomeHubController from "../assets/images/electronics-and-it-products-images/Smart Home Hub Controller.webp";
import iotEnvironmentalSensors from "../assets/images/electronics-and-it-products-images/IoT Environmental Sensors.webp";
import smartLightingSystem from "../assets/images/electronics-and-it-products-images/Smart Lighting System.webp";
import smartThermostatPro from "../assets/images/electronics-and-it-products-images/Smart Thermostat Pro.webp";
import iotGatewayDevice from "../assets/images/electronics-and-it-products-images/IoT Gateway Device.webp";
import mechanicalGamingKeyboard from "../assets/images/electronics-and-it-products-images/Mechanical Gaming Keyboard.webp";
import wirelessPresentationRemote from "../assets/images/electronics-and-it-products-images/Wireless Presentation Remote.webp";
import usbCDockingStation from "../assets/images/electronics-and-it-products-images/USB-C Docking Station.webp";
import ergonomicWirelessMouse from "../assets/images/electronics-and-it-products-images/Ergonomic Wireless Mouse.webp";
import professionalWebcam4K from "../assets/images/electronics-and-it-products-images/Professional Webcam 4K.webp";
import enterpriseOperatingSystem from "../assets/images/electronics-and-it-products-images/Enterprise Operating System.webp";
import antivirusEnterpriseSuite from "../assets/images/electronics-and-it-products-images/Antivirus Enterprise Suite.webp";
import officeProductivitySuite from "../assets/images/electronics-and-it-products-images/Office Productivity Suite.webp";
import databaseManagementSystem from "../assets/images/electronics-and-it-products-images/Database Management System.webp";
import virtualizationPlatform from "../assets/images/electronics-and-it-products-images/Virtualization Platform.webp";

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const electronicsandit: Product[] = [
  // Laptops, Desktops & Tablets
  {
    id: "1",
    title: "Business Laptop Pro 15",
    description:
      "High-performance business laptop with Intel i7 processor, 16GB RAM, and 512GB SSD. Perfect for professional work.",
    category: "Laptops, Desktops & Tablets",
    image: businessLaptopPro15,
  },
  {
    id: "2",
    title: "Gaming Desktop Workstation",
    description:
      "Powerful gaming desktop with RTX 4070, AMD Ryzen 9, 32GB RAM, and 1TB NVMe SSD. Built for performance.",
    category: "Laptops, Desktops & Tablets",
    image: gamingDesktopWorkstation,
  },
  {
    id: "3",
    title: "Enterprise Tablet 12 Pro",
    description:
      "Professional tablet with 12-inch display, stylus support, and enterprise security features. Perfect for mobile work.",
    category: "Laptops, Desktops & Tablets",
    image: enterpriseTablet12Pro,
  },
  {
    id: "4",
    title: "Ultrabook Slim 14",
    description:
      "Ultra-portable laptop with 14-hour battery life, lightweight design, and premium build quality.",
    category: "Laptops, Desktops & Tablets",
    image: ultrabookSlim14,
  },
  {
    id: "5",
    title: "All-in-One Desktop 24",
    description:
      "Space-saving all-in-one desktop with 24-inch 4K display, wireless keyboard, and mouse included.",
    category: "Laptops, Desktops & Tablets",
    image: allInOneDesktop24,
  },
  // Servers, Storage & UPS Systems
  {
    id: "6",
    title: "Rack Server 2U Enterprise",
    description:
      "High-performance 2U rack server with dual Xeon processors, 128GB RAM, and redundant power supplies.",
    category: "Servers, Storage & UPS Systems",
    image: rackServer2UEnterprise,
  },
  {
    id: "7",
    title: "Network Attached Storage 8-Bay",
    description:
      "Enterprise NAS system with 8 drive bays, RAID support, and 10GbE connectivity for data storage.",
    category: "Servers, Storage & UPS Systems",
    image: networkAttachedStorage8Bay,
  },
  {
    id: "8",
    title: "UPS System 3000VA",
    description:
      "Uninterruptible power supply with 3000VA capacity, LCD display, and automatic voltage regulation.",
    category: "Servers, Storage & UPS Systems",
    image: upsSystem3000VA,
  },
  {
    id: "9",
    title: "SAN Storage Array",
    description:
      "High-performance SAN storage with 24 drive bays, fiber channel connectivity, and enterprise features.",
    category: "Servers, Storage & UPS Systems",
    image: sanStorageArray,
  },
  {
    id: "10",
    title: "Backup Power Generator",
    description:
      "Diesel backup generator with automatic transfer switch and remote monitoring capabilities.",
    category: "Servers, Storage & UPS Systems",
    image: backupPowerGenerator,
  },
  // Networking Equipment
  {
    id: "11",
    title: "Enterprise Router 48-Port",
    description:
      "High-performance enterprise router with 48 Gigabit ports, advanced security features, and QoS management.",
    category: "Networking Equipment",
    image: enterpriseRouter48Port,
  },
  {
    id: "12",
    title: "Managed Switch 24-Port PoE+",
    description:
      "Layer 3 managed switch with 24 PoE+ ports, 10G uplinks, and centralized management capabilities.",
    category: "Networking Equipment",
    image: managedSwitch24PortPoE,
  },
  {
    id: "13",
    title: "Wireless Access Point Wi-Fi 6E",
    description:
      "Enterprise Wi-Fi 6E access point with tri-band support, high-density deployment, and cloud management.",
    category: "Networking Equipment",
    image: wirelessAccessPointWiFi6E,
  },
  {
    id: "14",
    title: "Firewall Security Appliance",
    description:
      "Next-generation firewall with intrusion prevention, VPN support, and advanced threat protection.",
    category: "Networking Equipment",
    image: firewallSecurityAppliance,
  },
  {
    id: "15",
    title: "Load Balancer Appliance",
    description:
      "Application delivery controller with load balancing, SSL offloading, and traffic optimization.",
    category: "Networking Equipment",
    image: loadBalancerAppliance,
  },
  // CCTV & Surveillance Systems
  {
    id: "16",
    title: "4K IP Security Camera",
    description:
      "Ultra HD 4K IP camera with night vision, motion detection, and weatherproof housing for outdoor use.",
    category: "CCTV & Surveillance Systems",
    image: ipSecurityCamera4K,
  },
  {
    id: "17",
    title: "NVR 32-Channel System",
    description:
      "Network video recorder supporting 32 channels with 4K recording, RAID storage, and remote access.",
    category: "CCTV & Surveillance Systems",
    image: nvr32ChannelSystem,
  },
  {
    id: "18",
    title: "PTZ Dome Camera",
    description:
      "Pan-tilt-zoom dome camera with 30x optical zoom, auto-tracking, and intelligent analytics.",
    category: "CCTV & Surveillance Systems",
    image: ptzDomeCamera,
  },
  {
    id: "19",
    title: "Video Management Software",
    description:
      "Professional VMS with multi-site management, analytics integration, and mobile app support.",
    category: "CCTV & Surveillance Systems",
    image: videoManagementSoftware,
  },
  {
    id: "20",
    title: "Access Control System",
    description:
      "Biometric access control with card readers, door controllers, and centralized management platform.",
    category: "CCTV & Surveillance Systems",
    image: accessControlSystem,
  },
  // LED Displays & Digital Signage
  {
    id: "21",
    title: "LED Video Wall 55-inch",
    description:
      "Ultra-narrow bezel LED display for video walls with 4K resolution and 24/7 operation capability.",
    category: "LED Displays & Digital Signage",
    image: ledVideoWall55Inch,
  },
  {
    id: "22",
    title: "Outdoor LED Billboard",
    description:
      "High-brightness outdoor LED display with weatherproof design and remote content management.",
    category: "LED Displays & Digital Signage",
    image: outdoorLEDBillboard,
  },
  {
    id: "23",
    title: "Interactive Touch Display 75",
    description:
      "75-inch interactive touchscreen display with multi-touch support and collaboration software.",
    category: "LED Displays & Digital Signage",
    image: interactiveTouchDisplay75,
  },
  {
    id: "24",
    title: "Digital Signage Media Player",
    description:
      "4K media player with content management system, scheduling, and remote monitoring capabilities.",
    category: "LED Displays & Digital Signage",
    image: digitalSignageMediaPlayer,
  },
  {
    id: "25",
    title: "Transparent LED Display",
    description:
      "Innovative transparent LED screen for retail windows and architectural applications.",
    category: "LED Displays & Digital Signage",
    image: transparentLEDDisplay,
  },
  // Smart Home & IoT Devices
  {
    id: "26",
    title: "Smart Home Hub Controller",
    description:
      "Central hub for smart home automation with voice control, app integration, and device management.",
    category: "Smart Home & IoT Devices",
    image: smartHomeHubController,
  },
  {
    id: "27",
    title: "IoT Environmental Sensors",
    description:
      "Wireless sensors for temperature, humidity, air quality monitoring with cloud connectivity.",
    category: "Smart Home & IoT Devices",
    image: iotEnvironmentalSensors,
  },
  {
    id: "28",
    title: "Smart Lighting System",
    description:
      "LED smart bulbs with color changing, dimming, and automated scheduling via mobile app.",
    category: "Smart Home & IoT Devices",
    image: smartLightingSystem,
  },
  {
    id: "29",
    title: "Smart Thermostat Pro",
    description:
      "Intelligent thermostat with learning algorithms, energy savings, and remote control capabilities.",
    category: "Smart Home & IoT Devices",
    image: smartThermostatPro,
  },
  {
    id: "30",
    title: "IoT Gateway Device",
    description:
      "Industrial IoT gateway with multiple protocol support, edge computing, and secure connectivity.",
    category: "Smart Home & IoT Devices",
    image: iotGatewayDevice,
  },
  // Accessories & Peripherals
  {
    id: "31",
    title: "Mechanical Gaming Keyboard",
    description:
      "RGB mechanical keyboard with customizable keys, macro support, and premium switches.",
    category: "Accessories & Peripherals",
    image: mechanicalGamingKeyboard,
  },
  {
    id: "32",
    title: "Wireless Presentation Remote",
    description:
      "Professional presentation remote with laser pointer, timer, and wireless connectivity up to 100ft.",
    category: "Accessories & Peripherals",
    image: wirelessPresentationRemote,
  },
  {
    id: "33",
    title: "USB-C Docking Station",
    description:
      "Multi-port USB-C dock with 4K display support, charging, and multiple connectivity options.",
    category: "Accessories & Peripherals",
    image: usbCDockingStation,
  },
  {
    id: "34",
    title: "Ergonomic Wireless Mouse",
    description:
      "Precision wireless mouse with ergonomic design, programmable buttons, and long battery life.",
    category: "Accessories & Peripherals",
    image: ergonomicWirelessMouse,
  },
  {
    id: "35",
    title: "Professional Webcam 4K",
    description:
      "Ultra HD webcam with auto-focus, noise cancellation microphone, and privacy shutter.",
    category: "Accessories & Peripherals",
    image: professionalWebcam4K,
  },
  // Software & Licensing Support
  {
    id: "36",
    title: "Enterprise Operating System",
    description:
      "Professional OS license with enterprise features, security updates, and technical support.",
    category: "Software & Licensing Support",
    image: enterpriseOperatingSystem,
  },
  {
    id: "37",
    title: "Antivirus Enterprise Suite",
    description:
      "Comprehensive security solution with endpoint protection, centralized management, and threat intelligence.",
    category: "Software & Licensing Support",
    image: antivirusEnterpriseSuite,
  },
  {
    id: "38",
    title: "Office Productivity Suite",
    description:
      "Complete office software package with word processing, spreadsheets, presentations, and collaboration tools.",
    category: "Software & Licensing Support",
    image: officeProductivitySuite,
  },
  {
    id: "39",
    title: "Database Management System",
    description:
      "Enterprise database software with high availability, backup solutions, and performance optimization.",
    category: "Software & Licensing Support",
    image: databaseManagementSystem,
  },
  {
    id: "40",
    title: "Virtualization Platform",
    description:
      "Server virtualization software with live migration, resource management, and disaster recovery.",
    category: "Software & Licensing Support",
    image: virtualizationPlatform,
  },
];
