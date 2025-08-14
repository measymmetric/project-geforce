import { Sora } from 'next/font/google';
import Nav from './Nav';
import Header from './Header';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-gradient-to-br from-primary via-background to-accent/20 text-dark ${sora.variable} font-sora relative pb-16 xl:pb-0`}
    >
      <Nav />
      <Header />
      <div className="xl:mr-16">{children}</div>
    </div>
  );
};

export default Layout;
