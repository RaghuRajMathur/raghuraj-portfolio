import ParticlesBackground from '../components/ParticlesBackground';
import './globals.css';

export const metadata = {
  title: 'RaghuRaj Mathur - Frontend Developer',
  description: 'Aspiring Frontend Developer specializing in React, Next.js, and modern web technologies',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ParticlesBackground id="global-particles" />
        {children}
      </body>
    </html>
  );
}
