declare global {
  interface Window {
    handleTagFilter: (tag: string) => void;
  }
}

export {};
