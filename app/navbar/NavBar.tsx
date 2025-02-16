"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const NavBar = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(true);
    const navRef = useRef(null);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        const handleScroll = () => {
            setIsVisible(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => setIsVisible(false), 3000); // Cache après 3 secondes d'inactivité
        };

        const handleClickOutside = (event: MouseEvent) => {
            // @ts-ignore
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        if (window.innerWidth <= 1023) {
            setIsVisible(false);
            window.addEventListener("scroll", handleScroll);
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleClickOutside);
            clearTimeout(timeout);
        };
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            ref={navRef}
            className={`fixed bottom-10 left-0 right-0 z-50 mx-auto flex w-[306px] items-center justify-center gap-1 rounded-lg bg-[#07070a]/90 px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:w-[383.3px] md:p-2 lg:w-[391.3px] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <Link href="#home" onClick={handleLinkClick} aria-label="Scroll to Home Section">
                <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">{t("navbar.home")}</h4>
            </Link>
            <Link href="#work" onClick={handleLinkClick} aria-label="Scroll to Work Section">
                <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">{t("navbar.work")}</h4>
            </Link>
            <Link href="#about" onClick={handleLinkClick} aria-label="Scroll to About Section">
                <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">{t("navbar.about")}</h4>
            </Link>
            <Link href="#contact" onClick={handleLinkClick} aria-label="Scroll to Contact Section">
                <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">{t("navbar.contact")}</h4>
            </Link>
        </nav>
    );
};

export default NavBar;