import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const LinkedinIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const AwsIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.73 12.82c-.87.05-1.57.24-1.95.57-.37.33-.56.76-.56 1.29 0 .42.14.77.42 1.05.28.28.66.42 1.15.42.66 0 1.21-.24 1.66-.71.45-.48.67-1.12.67-1.92v-.7c-.43 0-.96.01-1.39.08z" fill="#FF9900"/>
    <path d="M18.8 17.5c-2.3 1.7-5.6 2.6-8.5 2.6-4.1 0-7.7-1.5-10.3-4-.2-.2 0-.5.2-.3 3.1 2.7 7.4 4.3 11.9 4.3 2.9 0 6.1-.8 8.8-2.3.4-.3.9.2.5.6z" fill="#FF9900"/>
    <path d="M19.9 16.1c-.3-.4-1.9-.2-2.6 0-.2 0-.3-.2-.1-.3 1.2-1 3.2-.7 3.4-.4.3.3.1 2.3-.9 3.4-.2.2-.4.1-.3-.1.3-.7.8-2.2.5-2.6z" fill="#FF9900"/>
    <path d="M12.5 7.5h-1.8l-2.4 8h1.6l.5-1.8h2.3l.5 1.8h1.6l-2.3-8zm-1.6 5l.7-2.6.7 2.6h-1.4z" fill="#FF9900"/>
    <path d="M17.8 7.5h-1.5v8h1.5v-8z" fill="#FF9900"/>
  </svg>
);

export const AzureIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.05 2.25L4.5 14.25H9.75L13.05 2.25Z" fill="#0078D4"/>
    <path d="M10.875 14.25L7.5 19.5H19.5L14.25 14.25H10.875Z" fill="#0078D4"/>
    <path d="M14.625 3.75L10.5 9.75H13.875L18 3.75H14.625Z" fill="#50E6FF"/>
    <path d="M11.625 14.25L14.625 9.75H18L13.875 15.75L11.625 14.25Z" fill="#0078D4"/>
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.2 13.3c.3 2.8 2.6 5 5.4 5 4.5 0 8.5-2.1 10.9-5.4.3-.4.2-.9-.2-1.1-.3-.2-.8-.1-1.1.2-2.1 2.9-5.5 4.7-9.5 4.7-2.1 0-4-1.6-4.3-3.7-.1-.4-.5-.7-.9-.6-.4.1-.7.5-.6.9z" fill="#2496ED"/>
    <path d="M1.5 12c.5 0 .9-.4.9-.9V10c0-.5-.4-.9-.9-.9s-.9.4-.9.9v1.1c0 .5.4.9.9.9z" fill="#2496ED"/>
    <rect x="4" y="9" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <rect x="7.5" y="9" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <rect x="11" y="9" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <rect x="7.5" y="6" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <rect x="11" y="6" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <rect x="14.5" y="9" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <rect x="11" y="3" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <path d="M22 11.5c-.7-.5-1.6-.6-2.4-.4-.5-1.1-1.6-1.8-2.8-1.8-.3 0-.6.1-.9.2V9.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v.3c-1.3-1.2-3.1-2-5-2-4.1 0-7.5 3.4-7.5 7.5 0 .4.3.8.8.8h17.5c.8 0 1.5-.7 1.5-1.5 0-.9-.6-1.7-1.2-2.1z" fill="#2496ED"/>
  </svg>
);

export const KubernetesIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3.5 6.9v9.8L12 21.7l8.5-5v-9.8L12 2z" stroke="#326CE5" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    <path d="M12 6.5l4.5 2.6v5.2L12 16.9l-4.5-2.6V9.1L12 6.5z" fill="#326CE5"/>
    <circle cx="12" cy="12" r="2" fill="#FFFFFF"/>
  </svg>
);

export const JenkinsIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#D24939"/>
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#D24939"/>
    <circle cx="12" cy="10" r="1.5" fill="#F0D6B5"/>
  </svg>
);

export const TerraformIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 2v6.8l6 3.4V5.4L1.5 2z" fill="#844FBA"/>
    <path d="M8.5 5.4v6.8l6-3.4V2l-6 3.4z" fill="#844FBA"/>
    <path d="M8.5 13.6v6.8l6-3.4v-6.8l-6 3.4z" fill="#844FBA"/>
    <path d="M15.5 2v6.8l6-3.4V2l-6 3.4z" fill="#5C4EE5"/>
  </svg>
);

export const AnsibleIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#EE0000" strokeWidth="2" fill="none"/>
    <path d="M13.5 6L8 18h2.2l1.3-3h3.5l.6 3H18L13.5 6zm-1.3 7.2l1.3-3.4 1.2 3.4h-2.5z" fill="#EE0000"/>
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7 11.2l-8.9-8.9c-.4-.4-1-.4-1.4 0L9.1 4.7l3 3c.4-.1.8 0 1.2.3.5.5.6 1.3.3 1.9l2.9 2.9c.6-.3 1.4-.2 1.9.3.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.6-1.3-.3-1.9L13 10.8v5.5c.2.1.4.3.5.5.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.3-.3.7-.4 1.1-.4V10.2c-.4-.1-.8-.3-1.1-.6L8.4 12.3c.3.6.2 1.4-.3 1.9-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.5-.5 1.3-.6 1.9-.3l2.8-2.8-2.6-2.6L2.3 11.2c-.4.4-.4 1 0 1.4l8.9 8.9c.4.4 1 .4 1.4 0l8.9-8.9c.4-.4.4-1.1.2-1.4z" fill="#F05032"/>
  </svg>
);

export const GitLabIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.6 13l-1.9-5.9c-.1-.3-.4-.5-.7-.5s-.6.2-.7.5l-1.6 5H6.3l-1.6-5c-.1-.3-.4-.5-.7-.5s-.6.2-.7.5L1.4 13c-.1.4 0 .8.3 1.1l9.8 7.1c.3.2.7.2 1 0l9.8-7.1c.3-.3.4-.7.3-1.1z" fill="#FC6D26"/>
    <path d="M12 21.2l-4.2-13h8.4l-4.2 13z" fill="#E24329"/>
    <path d="M12 21.2l-4.2-13H1.4l10.6 13z" fill="#FCA326"/>
    <path d="M1.4 13l-1-3.1c-.1-.3 0-.7.3-.9l5.6-4.2 5.7 11.4L1.4 13z" fill="#E24329"/>
    <path d="M12 21.2l4.2-13h6.4l-10.6 13z" fill="#FCA326"/>
  </svg>
);

export const GitHubIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const PrometheusIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-4h2v4zm0-6h-2v-2h2v2z" fill="#E6522C"/>
    <path d="M12 6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2z" fill="#E6522C"/>
  </svg>
);

export const GrafanaIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#F46800" strokeWidth="2" fill="none"/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#F46800" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="9" cy="9.5" r="1.5" fill="#F46800"/>
    <circle cx="15" cy="9.5" r="1.5" fill="#F46800"/>
  </svg>
);

export const SonarQubeIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 19.5C6.5 17 9 15.5 12 15.5c3 0 5.5 1.5 7.5 4M6.5 15C8 13.5 10 12.5 12 12.5s4 1 5.5 2.5M8.5 10.5C9.5 9.5 10.7 9 12 9s2.5.5 3.5 1.5M11 6c.3-.3.6-.5 1-.5s.7.2 1 .5" stroke="#4E9BCD" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const OwaspIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-5.45 8-12V5l-8-3zm0 4a3 3 0 110 6 3 3 0 010-6zm0 14c-2.5 0-4.7-1.3-6-3.3.1-2 4-3.1 6-3.1s5.9 1.1 6 3.1c-1.3 2-3.5 3.3-6 3.3z" fill="#006699"/>
  </svg>
);

export const ZapIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h7v8l10-12h-7V2z" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

export const LinuxIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.2 2 7 4.2 7 7c0 1.8.9 3.4 2.3 4.3C7.6 12.3 6 14.5 6 17v2c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-2c0-2.5-1.6-4.7-3.3-5.7C16.1 10.4 17 8.8 17 7c0-2.8-2.2-5-5-5z" fill="#FCC624"/>
    <circle cx="10" cy="6.5" r="1" fill="#000"/>
    <circle cx="14" cy="6.5" r="1" fill="#000"/>
    <path d="M11 9h2" stroke="#E95420" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const NginxIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm4.5 13.5l-4-6v6h-2v-9h2l4 6v-6h2v9h-2z" fill="#009639"/>
  </svg>
);

export const ApacheIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#D22128"/>
  </svg>
);

export const CloudWatchIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" fill="#FF9900"/>
  </svg>
);
