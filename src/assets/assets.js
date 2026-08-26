import banner from "./banner-about.webp";
import brc_logo from "./brc-logo-150.webp";
import prins_logo from "./prins-logo-card.webp";
import aeb_logo from "./aeb-logo-card.webp";
import aeb_logo_90 from "./aeb-logo-90.webp";
import prins_logo_90 from "./prins-logo-90.webp";
import MP48_OBD from "./MP48_OBD.webp";
import AEB_Autogas from "./AEB_Autogas.webp";
import PRINS_SHEMA from "./PRINS_SHEMA.webp";
import PRINS_EDDY from "./PRINS_EDDY.webp";
import Sequent_32 from "./sequent-32.webp";
import BRC_SWITCH from "./BRC_SWITCH.webp";

// Astro-то обработва image импортите като { src, width, height } обект,
// а не като string URL (за разлика от стария Vite проект) — тук разопаковаме
// на едно място, за да могат всички компоненти да ползват assets.X директно като URL.
const url = (img) => img?.src ?? img;

export const assets = {
    banner: url(banner),
    brc_logo: url(brc_logo),
    prins_logo: url(prins_logo),
    aeb_logo: url(aeb_logo),
    aeb_logo_90: url(aeb_logo_90),
    prins_logo_90: url(prins_logo_90),
    MP48_OBD: url(MP48_OBD),
    AEB_Autogas: url(AEB_Autogas),
    PRINS_SHEMA: url(PRINS_SHEMA),
    PRINS_EDDY: url(PRINS_EDDY),
    Sequent_32: url(Sequent_32),
    BRC_SWITCH: url(BRC_SWITCH),
}
