export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      <img 
        src="/nomada-logo.png"
        alt="NÓMADA"
        className="h-8 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold font-grotesk text-white">NÓMADA</span>';
        }}
      />
    </a>
  )
}