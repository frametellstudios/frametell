import { useState, useEffect } from 'react';

interface ServiceBlock {
  title: string;
  description: string;
  icon: string;
  link: string;
  bullets: string[];
}

interface HomepageData {
  hero_title: string;
  hero_subtitle: string;
  showreel_url: string;
  cta1_text: string;
  cta1_link: string;
  cta2_text: string;
  cta2_link: string;
  services: ServiceBlock[];
}

const defaultHomepage: HomepageData = {
  hero_title: 'Stories Worth Telling',
  hero_subtitle: 'Professional videography, photography, and post-production services that capture your moments and elevate your brand.',
  showreel_url: '',
  cta1_text: 'View Our Work',
  cta1_link: '/portfolio',
  cta2_text: 'Start Your Project',
  cta2_link: '/contact',
  services: [],
};

export function useHomepage() {
  const [homepage, setHomepage] = useState<HomepageData>(defaultHomepage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content/pages/homepage.json')
      .then((response) => {
        if (!response.ok) throw new Error('Homepage file not found');
        return response.json();
      })
      .then((data) => {
        setHomepage({ ...defaultHomepage, ...data });
        setLoading(false);
      })
      .catch((error) => {
        console.warn('Failed to load homepage data, using defaults:', error);
        setHomepage(defaultHomepage);
        setLoading(false);
      });
  }, []);

  return { homepage, loading };
}
