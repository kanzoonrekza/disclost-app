<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="sticky top-0 bg-inherit p-4 text-3xl font-bold">Dashboard</h1>

<div class="p-4">
	<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
		{#each data.data as item}
			<li>
				<!-- TODO: Export as component -->
				<div class="grid h-full grid-rows-[80px_1fr]">
					<!-- TODO: Use icon -->
					<div class="grid place-items-center rounded-lg border border-slate-600 p-2">
						indicator Icon
					</div>
					<div class="flex items-start justify-between gap-2">
						<!-- TODO: hover show full name -->
						<span class="line-clamp-2 text-sm">{item.name}</span>
						<!-- TODO: on click show options -->
						<button>::</button>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
