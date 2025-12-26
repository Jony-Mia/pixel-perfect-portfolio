import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm transition-all duration-300 hover:scale-110 group"
      style={{ background: 'var(--gradient-primary)' }}
      aria-label="Toggle Language"
    >
      <div className="flex flex-col items-center">
        <Languages size={20} className="mb-0.5" />
        <span className="text-[10px] font-bold uppercase">{language === 'en' ? 'বাং' : 'EN'}</span>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: 'var(--shadow-glow-strong)' }} />
    </button>
  );
};

export default LanguageToggle;
