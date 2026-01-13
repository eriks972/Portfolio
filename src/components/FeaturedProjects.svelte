<script lang="ts">
  export let projects: {
    slug: string;
    title: string;
    category: string;
    description: string;
    featured: boolean;
  }[] = [];

  $: featuredProjects = projects.filter(p => p.featured);
</script>

<section class="mt-24">
  <div class="flex items-center justify-between mb-8">
    <h2 class="text-3xl font-bold">
      Featured Projects
    </h2>

    <a
      href="/projects"
      class="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
    >
      View all →
    </a>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each featuredProjects as project}
      <a
        href={`/projects/${project.slug}`}
        class="block rounded-xl border border-gray-200 p-6 hover:border-gray-400 transition"
      >
        <h3 class="text-xl font-semibold mb-1">
          {project.title}
        </h3>
        <p class="text-sm text-gray-500 mb-3">
          {project.category}
        </p>
        <p class="text-gray-700 text-sm">
          {project.description}
        </p>
      </a>
    {/each}
  </div>
</section>
