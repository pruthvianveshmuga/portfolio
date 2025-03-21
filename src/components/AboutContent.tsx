"use client";

import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  RevealFx,
  SmartImage,
  SmartLink,
  Tag,
  Text,
} from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import { person, info, social } from "@/app/resources/content";
import { useSectionRefs } from "@/context/SectionContext";

export function AboutContent() {
  const sectionRefs = useSectionRefs();
  const structure = [
    {
      title: info.about.title,
      display: info.about.display,
      items: [],
    },
    {
      title: info.work.title,
      display: info.work.display,
      items: info.work.experiences.map((experience) => experience.company),
    },
    {
      title: info.education.title,
      display: info.education.display,
      items: info.education.institutions.map((institution) => institution.name),
    },
    {
      title: info.skills.title,
      display: info.skills.display,
      items: info.skills.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
        <Flex fillWidth mobileDirection="column" horizontal="center">
          {info.avatar.display && (
            <Column
              className={styles.avatar}
              minWidth="160"
              paddingX="l"
              paddingBottom="xl"
              gap="m"
              flex={3}
              horizontal="center"
            >
              <Avatar src={person.avatar} size="xl" />
              <Flex gap="8" vertical="center">
                <Icon name="personality" size="m" />
                <SmartLink
                  href="https://www.16personalities.com/infj-personality"
                  className="pl-0 ml-0"
                >
                  {person.personality}
                </SmartLink>
              </Flex>
              {person.languages.length > 0 && (
                <Flex wrap gap="8">
                  {person.languages.map((language, index) => (
                    <Tag key={index} size="l">
                      {language}
                    </Tag>
                  ))}
                </Flex>
              )}
            </Column>
          )}

          <Column className={styles.blockAlign} flex={9} maxWidth={40}>
            <section ref={sectionRefs.about}>
              <Column
                id={info.about.title}
                fillWidth
                minHeight="160"
                vertical="center"
                marginBottom="32"
              >
                {info.calendar.display && (
                  <Flex
                    fitWidth
                    border="brand-alpha-medium"
                    className={styles.blockAlign}
                    style={{
                      backdropFilter: "blur(var(--static-space-1))",
                    }}
                    background="brand-alpha-weak"
                    radius="full"
                    padding="4"
                    gap="8"
                    marginBottom="m"
                    vertical="center"
                  >
                    <Icon
                      paddingLeft="12"
                      name="calendar"
                      onBackground="brand-weak"
                    />
                    <Flex paddingX="8">Schedule a call</Flex>
                    <IconButton
                      href={info.calendar.link}
                      data-border="rounded"
                      variant="secondary"
                      icon="chevronRight"
                    />
                  </Flex>
                )}
                <Heading
                  className={styles.textAlign}
                  variant="display-strong-xl"
                >
                  {person.name}
                </Heading>
                <Text
                  className={styles.textAlign}
                  variant="display-default-xs"
                  onBackground="neutral-weak"
                >
                  {person.role}
                </Text>
                {social.length > 0 && (
                  <Flex
                    className={styles.blockAlign}
                    paddingTop="20"
                    paddingBottom="8"
                    gap="8"
                    wrap
                    horizontal="center"
                    fitWidth
                  >
                    {social.map(
                      (item) =>
                        item.link && (
                          <>
                            <Button
                              className="s-flex-hide"
                              key={item.name}
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              variant="secondary"
                            />
                            <IconButton
                              className="s-flex-show"
                              size="l"
                              key={`${item.name}-icon`}
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                            />
                          </>
                        )
                    )}
                  </Flex>
                )}
              </Column>

              {info.about.display && (
                <Column
                  textVariant="body-default-l"
                  fillWidth
                  gap="m"
                  marginBottom="xl"
                >
                  {info.about.description}
                </Column>
              )}
            </section>
            <section ref={sectionRefs.work}>
              {info.work.display && (
                <>
                  <Heading
                    as="h2"
                    id={info.work.title}
                    variant="display-strong-s"
                    marginBottom="m"
                  >
                    {info.work.title}
                  </Heading>
                  <Column fillWidth gap="l" marginBottom="40">
                    {info.work.experiences.map((experience, index) => (
                      <Column
                        key={`${experience.company}-${experience.role}-${index}`}
                        fillWidth
                      >
                        <Flex
                          fillWidth
                          horizontal="space-between"
                          vertical="end"
                          marginBottom="4"
                        >
                          <Text
                            id={experience.company}
                            variant="heading-strong-l"
                          >
                            {experience.company}
                          </Text>
                          <Text
                            variant="heading-default-xs"
                            onBackground="neutral-weak"
                          >
                            {experience.timeframe}
                          </Text>
                        </Flex>
                        <Text
                          variant="body-default-s"
                          onBackground="brand-weak"
                          marginBottom="m"
                        >
                          {experience.role}
                        </Text>
                        <Column as="ul" gap="16">
                          {experience.achievements.map(
                            (achievement: JSX.Element, index: number) => (
                              <Text
                                as="li"
                                variant="body-default-m"
                                key={`${experience.company}-${index}`}
                              >
                                {achievement}
                              </Text>
                            )
                          )}
                        </Column>
                        {experience.images.length > 0 && (
                          <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                            {experience.images.map((image, index) => (
                              <Flex
                                key={index}
                                border="neutral-medium"
                                radius="m"
                                //@ts-ignore
                                minWidth={image.width}
                                //@ts-ignore
                                height={image.height}
                              >
                                <SmartImage
                                  enlarge
                                  radius="m"
                                  //@ts-ignore
                                  sizes={image.width.toString()}
                                  //@ts-ignore
                                  alt={image.alt}
                                  //@ts-ignore
                                  src={image.src}
                                />
                              </Flex>
                            ))}
                          </Flex>
                        )}
                      </Column>
                    ))}
                  </Column>
                </>
              )}
            </section>
            <section ref={sectionRefs.education}>
              {info.education.display && (
                <>
                  <Heading
                    as="h2"
                    id={info.education.title}
                    variant="display-strong-s"
                    marginBottom="m"
                  >
                    {info.education.title}
                  </Heading>
                  <Column fillWidth gap="l" marginBottom="40">
                    {info.education.institutions.map((institution, index) => (
                      <Column
                        key={`${institution.name}-${index}`}
                        fillWidth
                        gap="4"
                      >
                        <Text id={institution.name} variant="heading-strong-l">
                          {institution.name}
                        </Text>
                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak"
                        >
                          {institution.description}
                        </Text>
                      </Column>
                    ))}
                  </Column>
                </>
              )}
            </section>
            <section ref={sectionRefs.skills}>
              {info.skills.display && (
                <>
                  <Heading
                    as="h2"
                    id={info.skills.title}
                    variant="display-strong-s"
                    marginBottom="40"
                  >
                    {info.skills.title}
                  </Heading>
                  <Column fillWidth gap="l">
                    {info.skills.skills.map((skill, index) => (
                      <Column key={`${skill}-${index}`} fillWidth gap="4">
                        <Text variant="heading-strong-l">{skill.title}</Text>
                        <Text
                          variant="body-default-m"
                          onBackground="neutral-weak"
                        >
                          {skill.description}
                        </Text>
                        {skill.images && skill.images.length > 0 && (
                          <Flex fillWidth paddingTop="m" gap="12" wrap>
                            {skill.images.map((image, index) => (
                              <Flex
                                key={index}
                                border="neutral-medium"
                                radius="m"
                                //@ts-ignore
                                minWidth={image.width}
                                //@ts-ignore
                                height={image.height}
                              >
                                <SmartImage
                                  enlarge
                                  radius="m"
                                  //@ts-ignore
                                  sizes={image.width.toString()}
                                  //@ts-ignore
                                  alt={image.alt}
                                  //@ts-ignore
                                  src={image.src}
                                />
                              </Flex>
                            ))}
                          </Flex>
                        )}
                      </Column>
                    ))}
                  </Column>
                </>
              )}
            </section>
          </Column>
        </Flex>
      </RevealFx>
    </Column>
  );
}
