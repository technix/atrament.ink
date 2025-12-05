import React from 'react';
import Links from '@theme-original/Footer/Links';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const LINKS = {
  en: [
    {
      label: "Discord",
      href: 'https://discord.gg/VgvHvDMbCx'
    },
    {
      html: 'Made with the support of the <a href="https://iftechfoundation.org/" target="_blank" rel="noreferrer noopener">Interactive Fiction Technology Foundation</a>'
    },
    {
      html: 'Icons by <a href="https://icons8.com/" target="_blank" rel="noreferrer noopener">Icons8</a>'
    }
  ],
  uk: [
    {
      label: "Discord",
      href: 'https://discord.gg/TEcfFARerE'
    },
    {
      html: 'Створено за підтримки <a href="https://iftechfoundation.org/" target="_blank" rel="noreferrer noopener">Фонду технологій інтерактивної літератури</a>'
    },
    {
      html: 'Іконки від <a href="https://icons8.com/" target="_blank" rel="noreferrer noopener">Icons8</a>'
    }
  ]
};

export default function LinksWrapper(props) {
const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  return (
    <>
      <Links {...props} links={LINKS[locale]}/>
    </>
  );
}
