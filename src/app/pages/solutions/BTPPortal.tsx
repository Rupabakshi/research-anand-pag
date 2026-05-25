import { BTPPortalHero } from '../../components/BTPPortalHero';
import { BTPPortalMetrics } from '../../components/BTPPortalMetrics';
import { BTPPortalBenefits } from '../../components/BTPPortalBenefits';
import { BTPPortalShowcase } from '../../components/BTPPortalShowcase';
import { BTPPortalCapabilities } from '../../components/BTPPortalCapabilities';
import { BTPPortalCTA } from '../../components/BTPPortalCTA';
import { useTheme } from '../../contexts/ThemeContext';

export default function BTPPortal() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: theme.background.light }}>
      <BTPPortalHero />
      <BTPPortalMetrics />
      <BTPPortalBenefits />
      <BTPPortalShowcase />
      <BTPPortalCapabilities />
      <BTPPortalCTA />
    </div>
  );
}

