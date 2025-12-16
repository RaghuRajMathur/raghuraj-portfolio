import './globals.css';
import Navbar from '../components/BottomNav';

export const metadata = {
  title: 'RaghuRaj Mathur - Cybersecurity & Web Developer',
  description: 'BCA Graduate specializing in penetration testing and web development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Cyber Rain Background Effect */}
        <div className="cyber-rain">
          <span>01010011 01100101 01100011 01110101 01110010 01101001 01110100 01111001</span>
          <span>01001000 01100001 01100011 01101011 01100101 01110010 00100000</span>
          <span>01000011 01111001 01100010 01100101 01110010 00100000 01010011</span>
          <span>01010000 01100101 01101110 01010100 01100101 01110011 01110100</span>
          <span>01000110 01101001 01110010 01100101 01110111 01100001 01101100 01101100</span>
          <span>01000101 01101110 01100011 01110010 01111001 01110000 01110100</span>
          <span>01010110 01110101 01101100 01101110 00100000 01000100 01100001</span>
          <span>01001101 01100001 01101100 01110111 01100001 01110010 01100101</span>
          <span>01000010 01110010 01100101 01100001 01100011 01101000 00100000</span>
          <span>01010000 01100001 01110100 01100011 01101000 00100000 01010011</span>
        </div>
        
        {/* Bottom Navigation */}
        <Navbar />
        
        {/* Main Content */}
        {children}
        
        {/* SVG Filters */}
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <defs>
            <filter id="roughness">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
      </body>
    </html>
  );
}
