import { APP_NAME } from '@/lib/constants';
import SubscribeToNewsletters from './ui/shared/footer/subscribe-to-newsletter';
import QuickLink from './ui/shared/footer/quick-link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="border-t footer-bg md:px-9 sm:px-4 pt-9 pb-1">
        <div className="grid gap-4 md:grid-cols-3 p-4 mb-6">
          <div className="grid gap-2 md:grid-cols-2 sm:grid-cols-2 ">
            <div className="">
              <h2 className="text-gray-300 mb-6">Legal</h2>
              <p className="mb-3">
                <QuickLink linkText="Privacy Policy" url="/privacy-policy" />
              </p>
              <p className="mb-3">
                <QuickLink
                  linkText="Terms of Service"
                  url="/terms-of-service"
                />
              </p>
              <p className="mb-3">
                <QuickLink linkText="License" url="/license" />
              </p>
            </div>

            <div className="">
              <h2 className="text-gray-300 mb-6">Company</h2>
              <p className="mb-3">
                <QuickLink linkText="About Us" url="/about-us" />
              </p>
              <p className="mb-3">
                <QuickLink linkText="Contact Us" url="/contact-us" />
              </p>
              <p className="mb-3">
                <QuickLink linkText="Blog" url="/blog" />
              </p>
            </div>
          </div>

          <div className="grid gap-1 md:grid-cols-2 ">
            <div className="">
              <h2 className="text-gray-300 mb-6">Support</h2>
              <p className="mb-3">
                <QuickLink linkText="Order Tracking" url="/order-tracking" />
              </p>
              <p className="mb-3">
                <QuickLink linkText="24/7" />
              </p>
            </div>
            <div className=""></div>
          </div>
          <div className="">
            <SubscribeToNewsletters />
          </div>
        </div>

        <div className="border-t grid gap-4 md:grid-cols-2 p-4 text-sm text-gray-500">
          <div className="text-center">
            {currentYear} {APP_NAME}. All Rights reserved.
          </div>
          <div className="text-center">
            <span className="mr-1 text-gray-500 text-sm">Developed by: </span>
            <span className="text-sm underline">
              <a className="text-indigo-500" href="https://doiv.vercel.app/">
                Dan-Obu Isoboye Vincent
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
