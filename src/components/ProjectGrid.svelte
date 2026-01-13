<script lang="ts">
  export let projects: {
    slug: string;
    title: string;
    category: string;
    description: string;
  }[] = [];

  let activeCategory = "All";

  // Get unique categories
  $: categories = ["All", ...new Set(projects.map(p => p.category))];

  // Filter projects reactively
  $: filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(p => p.category === activeCategory);
</script>

<div class="flex flex-wrap gap-3 mb-8">
  {#each categories as category}
    <button
      class="px-3 py-1.5 rounded-md border text-sm transition
        {category === activeCategory
          ? 'bg-gray-900 text-white border-gray-900'
          : 'border-gray-300 hover:border-gray-500'}"
      on:click={() => (activeCategory = category)}
    >
      {category}
    </button>
  {/each}
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each filteredProjects as project}
    <a
      href={`/projects/${project.slug}`}
      class="block rounded-xl border border-gray-200 p-6 hover:border-gray-400 transition"
    >
      <h2 class="text-xl font-semibold mb-1">
        {project.title}
      </h2>
      <p class="text-sm text-gray-500 mb-3">
        {project.category}
      </p>
      <p class="text-gray-700 text-sm">
        {project.description}
      </p>
    </a>
  {/each}
</div>


<style>
  .filters {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  button {
    padding: 0.4rem 0.75rem;
    border: 1px solid #ccc;
    background: none;
    cursor: pointer;
    border-radius: 6px;
  }

  button.selected {
    background: #222;
    color: white;
    border-color: #222;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .card {
    padding: 1.25rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
  }

  .card:hover {
    border-color: #888;
  }

  .category {
    font-size: 0.85rem;
    opacity: 0.7;
  }
</style>

