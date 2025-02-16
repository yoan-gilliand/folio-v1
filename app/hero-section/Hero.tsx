import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/profile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
      <motion.section
          className="relative z-10 flex h-[90vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover bg-center py-0 sm:h-[90vh] md:h-[90vh] lg:h-[100vh] 3xl:h-[100vh]"
          id="home"
          initial="initial"
          animate="animate"
      >
        <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

        <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
          <div>
            <Link href="#contact" target="_blank" aria-label="Contact Me" onClick={handleScroll}>
              <motion.button className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block md:text-[16px] lg:block" variants={bodyAnimation}>
                {t("hero.contact")}
              </motion.button>
            </Link>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <Link href="https://github.com/yoan-gilliand" target="_blank" aria-label="View GitHub Profile" className="flex items-center">
              <FontAwesomeIcon icon={faGithub as IconProp} className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-[#e4ded7]" />
            </Link>
            <Link href="https://www.linkedin.com/in/yoan-gilliand/" target="_blank" aria-label="View LinkedIn Profile" className="flex items-center">
              <FontAwesomeIcon icon={faLinkedin as IconProp} className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-[#e4ded7]" />
            </Link>
          </div>
        </div>

        <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40">
          <div className={`relative flex flex-col items-center justify-center ${monaSans.className}`}>
            <AnimatedWords title={t("hero.name")} style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4" />
            <motion.div className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]" variants={imageAnimation}>
              <Image src={profile} priority alt="Yoan's headshot" data-blobity-tooltip=" " data-blobity-invert="false" className="w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]" />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 flex items-center justify-center md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between">
          <motion.div className="max-w-[350px] md:max-w-[400px] lg:max-w-[400px]" variants={bodyAnimation}>
            <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
              {t("hero.description1")}{" "}
              <Link href="https://www.heia-fr.ch/" target="_blank" className="underline underline-offset-2 hover:no-underline" aria-label="HEIA-FR Website">
                {t("hero.heia")}
              </Link>{" "}
              {t("hero.description2")}
            </p>
          </motion.div>

          <motion.div className="hidden max-w-[500px] lg:block lg:max-w-[420px]" variants={bodyAnimation}>
            <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
              {t("hero.drivenBy")}
            </p>
          </motion.div>
        </div>
      </motion.section>
  );
};

export default Hero;