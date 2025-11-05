import { useState, useEffect } from 'react';

export interface PortfolioItem {
  title: string;
  category: string[];
  type: string[];
  thumbnail?: string;
  description?: string;
  gallery?: string[];
  videoUrl?: string;
  date: string;
  featured: boolean;
  slug: string;
}

export function usePortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const response = await fetch('/content/portfolio-index.json');
        if (!response.ok) {
          throw new Error('Failed to load portfolio');
        }
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (err) {
        console.error('Error loading portfolio:', err);
        setError(err instanceof Error ? err.message : 'Failed to load portfolio');
        setLoading(false);
      }
    }

    loadPortfolio();
  }, []);

  return { items, loading, error };
}
