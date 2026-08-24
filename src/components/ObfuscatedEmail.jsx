import { useEffect, useRef } from 'react';

// react-obfuscate's build has broken CJS/ESM interop under Astro's SSR
// (its default export resolves to the module object, not the component).
// This is a minimal drop-in replacement with the same anti-scraper intent:
// the plain text renders on the server, but the mailto: link is only
// built client-side so static scrapers can't harvest it from the HTML.
const ObfuscatedEmail = ({ email }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.href = `mailto:${email}`;
    }
  }, [email]);

  return <a ref={ref} href="#">{email}</a>;
};

export default ObfuscatedEmail;
