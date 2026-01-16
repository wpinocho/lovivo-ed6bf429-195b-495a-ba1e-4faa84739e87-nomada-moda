import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { FloatingOrbs } from '@/components/nomada/FloatingOrbs';
import { HeroSection } from '@/components/nomada/HeroSection';
import { TickerBar } from '@/components/nomada/TickerBar';
import { BentoSpecs } from '@/components/nomada/BentoSpecs';
import { XRaySection } from '@/components/nomada/XRaySection';
import { TerminalProof } from '@/components/nomada/TerminalProof';
import { NomadaFooter } from '@/components/nomada/NomadaFooter';

/**
 * EDITABLE UI - IndexUI
 * 
 * Landing page NÓMADA - Night Ops Theme
 * Techwear premium con animaciones Framer Motion
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  return (
    <div className="relative min-h-screen bg-background">
      <FloatingOrbs />
      
      <HeroSection />
      <TickerBar />
      <BentoSpecs />
      <XRaySection />
      <TerminalProof />
      <NomadaFooter />
    </div>
  );
};