"use client";

import { usePathname } from "next/navigation";
import React, { RefObject, useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import {
  person,
  home,
  info,
  blog,
  work,
  gallery,
} from "@/app/resources/content";
import { useSectionRefs } from "@/context/SectionContext";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = useSectionRefs();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 34;

      Object.entries(sectionRefs).forEach(([id, ref]) => {
        if (!ref.current) return;

        const element = ref.current;
        const sectionTop = element.offsetTop;
        const sectionBottom = sectionTop + element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  const scrollTo = (sectionRef: RefObject<HTMLElement>) => {
    // const sectionRef = sectionRefs[id as keyof typeof sectionRefs];
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop + 34,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    {
      section: "about",
      icon: "person",
    },
    {
      section: "work",
      icon: "grid",
    },
    {
      section: "education",
      icon: "book",
    },
    {
      section: "skills",
      icon: "tools",
    },
  ];

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        show="s"
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex
          paddingLeft="12"
          fillWidth
          vertical="center"
          textVariant="body-default-s"
        >
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {navLinks.map(
                ({ section, icon }) =>
                  routes[`#${section}`] && (
                    <React.Fragment key={section}>
                      <ToggleButton
                        className="s-flex-hide"
                        prefixIcon={icon}
                        label={info[section].label}
                        onClick={() => scrollTo(sectionRefs[section])}
                        selected={activeSection === section}
                      />
                      <ToggleButton
                        className="s-flex-show"
                        prefixIcon={icon}
                        onClick={() => scrollTo(sectionRefs[section])}
                        selected={activeSection === section}
                      />
                    </React.Fragment>
                  )
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">
              {display.toolbar && <TimeDisplay timeZone={person.location} />}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
