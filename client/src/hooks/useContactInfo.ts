import { useState, useEffect } from 'react';

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  hours: string;
}

const defaultContact: ContactInfo = {
  email: 'info@frametell.com',
  phone: '+1 (555) 123-4567',
  location: 'Serving clients worldwide',
  hours: 'Monday - Saturday, 9 AM - 6 PM',
};

export function useContactInfo() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(defaultContact);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content/pages/contact.md')
      .then((response) => {
        if (!response.ok) throw new Error('Contact file not found');
        return response.text();
      })
      .then((text) => {
        // Parse frontmatter
        const frontmatterMatch = text.match(/^---\s*\n([\s\S]*?)\n---/);
        if (frontmatterMatch) {
          const frontmatter = frontmatterMatch[1];
          const lines = frontmatter.split('\n');
          const data: Partial<ContactInfo> = {};
          
          lines.forEach((line) => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length > 0) {
              const value = valueParts.join(':').trim();
              const cleanKey = key.trim() as keyof ContactInfo;
              if (cleanKey in defaultContact) {
                data[cleanKey] = value;
              }
            }
          });
          
          setContactInfo({ ...defaultContact, ...data });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.warn('Failed to load contact info, using defaults:', error);
        setContactInfo(defaultContact);
        setLoading(false);
      });
  }, []);

  return { contactInfo, loading };
}
