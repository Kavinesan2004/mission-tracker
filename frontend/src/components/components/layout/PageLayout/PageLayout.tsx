import type { ReactNode } from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';
import { Container } from '../../ui/Container';

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

<main className="py-10">
  <Container>
    {children}
  </Container>
</main>

      <Footer />
    </div>
  );
}

export default PageLayout;