export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      <img 
        src="/logo.png"
        alt="NÓMADA"
        className="h-8 w-auto object-contain brightness-0 invert" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold font-grotesk text-white">NÓMADA</span>';
        }}
      />
    </a>
  )
}