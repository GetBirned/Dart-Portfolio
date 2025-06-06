const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 flex items-center justify-center">
          <span className="text-black">Built by&nbsp;</span>
          <span
            className="bg-clip-text text-transparent
                       bg-gradient-to-r from-teal-500 to-blue-600
                       font-bold"
          >
            Dartagnan Birnie
          </span>
        </p>
        <p className="text-black text-sm">
          &copy; {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
