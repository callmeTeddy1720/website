const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-8 section-animate">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold tracking-wide">&copy; 2025 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors font-bold">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors font-bold">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors font-bold">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
