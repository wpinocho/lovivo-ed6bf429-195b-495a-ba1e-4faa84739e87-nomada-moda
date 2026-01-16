import { Link } from 'react-router-dom';

export const NomadaFooter = () => {
  return (
    <footer className="relative border-t border-border bg-black">
      {/* Giant Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 overflow-hidden">
        <div className="text-[20rem] font-bold leading-none whitespace-nowrap">
          NÓMADA
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src="/logo.png" 
              alt="NÓMADA" 
              className="h-8 mb-4 brightness-0 invert"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML += '<div class="text-2xl font-bold text-white">NÓMADA</div>';
              }}
            />
            <p className="text-sm text-muted-foreground font-jetbrains">
              Ingeniería textil para el caos urbano.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-jetbrains">NAVEGACIÓN</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-muted-foreground hover:text-accent transition-colors">
                INICIO
              </Link>
              <Link to="/productos" className="block text-muted-foreground hover:text-accent transition-colors">
                PRODUCTOS
              </Link>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                MANIFIESTO
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                LOOKBOOK
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-jetbrains">SOPORTE</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                Contacto
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                Envíos
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                Garantía
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                Devoluciones
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-jetbrains">
            <p>© 2026 NÓMADA LABS. CONSTRUIDO PARA DURAR.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};