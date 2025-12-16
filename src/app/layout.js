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
        {<Navbar />}
        {children}
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
