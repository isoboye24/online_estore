import { APP_NAME } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="border-t">
        <div className="grid gap-4 md:grid-cols-2 p-4">
          <div className="text-center">
            {currentYear} {APP_NAME}. All Rights reserved.
          </div>
          <div className="text-center">
            <span className="mr-1">Developed by: </span>
            <span className="text-blue-500 underline">
              <a href="https://www.xing.com/profile/IsoboyeVincent_DanObu/web_profiles?sc_o=navigation_profile_icon&sc_o_PropActionOrigin=navigation_neffi_100&expandNeffi=true">
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
