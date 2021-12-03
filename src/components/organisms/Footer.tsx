import { Link } from 'gatsby';
import React from 'react';
import GitHubIcon from '../../images/github-5.svg';
import LinkedInIcon from '../../images/linkedin-5.svg';
import TwitterIcon from '../../images/twitter-5.svg';

const SocialIcons = () => {
  const links = {
    twitter: {
      label: '@Dot_Coyote',
      link: 'https://twitter.com/Dot_Coyote',
    },
    linkedin: {
      label: 'Lars Eichler LinkedIn',
      link: 'https://www.linkedin.com/in/lars-eichler-645b35125/',
    },
    github: {
      label: 'DotCoyote',
      link: 'https://github.com/DotCoyote',
    },
  };

  return (
    <div className="flex flex-row text-white">
      <a href={links.github.link} title={links.github.label}>
        <svg viewBox={GitHubIcon.viewBox} className="w-6 h-6">
          <use xlinkHref={GitHubIcon.url} />
        </svg>
      </a>
      <a href={links.twitter.link} title={links.twitter.label} className="ml-4">
        <svg viewBox={TwitterIcon.viewBox} className="w-6 h-6">
          <use xlinkHref={TwitterIcon.url} />
        </svg>
      </a>
      <a
        href={links.linkedin.link}
        title={links.linkedin.label}
        className="ml-4"
      >
        <svg viewBox={LinkedInIcon.viewBox} className="w-6 h-6">
          <use xlinkHref={LinkedInIcon.url} />
        </svg>
      </a>
    </div>
  );
};

const Footer = ({ isSimple = false }) => (
  <footer className="text-center mt-20">
    {!isSimple && (
      <div className="pb-32">
        <div className="text-4xl font-bold">Lars Eichler</div>
        <div className="mt-8">
          <a href="mailto:info@larseichler.de">info@larseichler.de</a>
        </div>
      </div>
    )}
    <div className="flex flex-row px-6 py-3 text-sm justify-between">
      <Link to="/legal-notice">Legal Notice</Link>

      <SocialIcons />
    </div>
  </footer>
);

export default Footer;
