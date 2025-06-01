const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 flex items-center justify-center">
          Built by Dartagnan Birnie
        </p>
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;