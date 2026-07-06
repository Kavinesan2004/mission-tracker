function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-center text-sm text-zinc-500">
      © {new Date().getFullYear()} Mission Tracker. Built with React & Tailwind CSS.
    </footer>
  );
}

export default Footer;