import { createSignal } from 'solid-js';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = createSignal('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (typeof window.handleSearch === 'function') {
      window.handleSearch(value);
    }
  };

  return (
    <div class="w-full max-w-md mx-auto mb-8">
      <div class="relative">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm()}
          onInput={handleSearch}
          class="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}