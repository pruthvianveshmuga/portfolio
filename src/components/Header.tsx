"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import {
  person,
  home,
  about,
  blog,
  work,
  gallery,
} from "@/app/resources/content";

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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      console.log("handleScroll called");
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (
          window.pageYOffset >= section.offsetTop + 34 &&
          window.pageYOffset < section.offsetTop + section.offsetHeight + 34
        ) {
          console.log("window.pageYOffset", window.pageYOffset);
          console.log("section.offsetTop", section.offsetTop);
          let current = section.getAttribute("id");
          setActiveSection(current);
        }
      });
    };
    // Add event listeners
    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollTo = (id: string, offset: number = 80) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop + 34,
        behavior: "smooth",
      });
    }
  };
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
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href="/"
                  selected={pathname === "/"}
                />
              )}
              <Line vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    label={about.label}
                    onClick={() => scrollTo("about")}
                    selected={activeSection === "about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    onClick={() => scrollTo("about")}
                    selected={activeSection === "about"}
                  />
                </>
              )}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    label={work.label}
                    onClick={() => scrollTo("work")}
                    selected={activeSection === "work"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    onClick={() => scrollTo("work")}
                    selected={activeSection === "work"}
                  />
                </>
              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    label={"Studies"}
                    onClick={() => scrollTo("studies")}
                    selected={activeSection === "studies"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    onClick={() => scrollTo("studies")}
                    selected={activeSection === "studies"}
                  />
                </>
              )}
              {routes["/gallery"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="gallery"
                    label={"Tech"}
                    onClick={() => scrollTo("tech")}
                    selected={activeSection === "tech"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="gallery"
                    onClick={() => scrollTo("tech")}
                    selected={activeSection === "tech"}
                  />
                </>
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
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
