<script lang="ts">
	import FileGrid from '../../../components/FileGrid.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="sticky top-0 bg-inherit p-4 text-3xl font-bold">Dashboard</h1>

<div class="p-4">
	<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
		{#each data.data as item}
			<li>
				<FileGrid file={item} />
			</li>
		{/each}
	</ul>
</div>
