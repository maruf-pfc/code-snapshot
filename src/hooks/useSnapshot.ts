import { useState } from 'react';
import { toPng } from 'html-to-image';

export function useSnapshot() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async (element: HTMLElement | null, projectName: string) => {
    if (!element) {
      setError('Preview element not found');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      // Small delay to ensure any layout shifts or Shiki highlight frames have settled
      await new Promise((resolve) => setTimeout(resolve, 50));

      const dataUrl = await toPng(element, {
        pixelRatio: 2, // High-res export
        backgroundColor: 'transparent',
        style: {
          transform: 'none',
          boxShadow: 'none',
        },
      });

      const fileName = projectName.trim()
        ? `${projectName.trim()}.png`
        : 'shiki-snapshot.png';

      const link = document.createElement('a');
      link.download = fileName;
      link.href = dataUrl;
      link.click();
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to capture snapshot');
    } finally {
      setIsGenerating(false);
    }
  };

  return { generate, isGenerating, error };
}
