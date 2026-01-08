export default function Footer() {
  return (
    <footer className="bg-gray-50 py-4 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-xs text-gray-400">
            © 2026 L'art de la déco. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-400">
            Site développé par{" "}
            <a
              href="https://eliazbm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              eliazbm.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
