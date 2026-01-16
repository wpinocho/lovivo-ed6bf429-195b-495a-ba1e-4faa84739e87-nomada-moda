export const TickerBar = () => {
  const items = [
    'DISEÑADO EN CDMX',
    'ENVÍOS A TODO EL MUNDO',
    'STOCK LIMITADO',
    'GARANTÍA DE POR VIDA',
  ];

  const tickerContent = [...items, ...items, ...items].join(' /// ');

  return (
    <div className="border-y border-border bg-background/50 backdrop-blur-sm py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-ticker">
        <span className="text-sm font-jetbrains text-accent pr-8">
          {tickerContent} /// {tickerContent}
        </span>
      </div>
    </div>
  );
};