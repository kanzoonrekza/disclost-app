<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import FileGrid from '../../../components/FileGrid.svelte';

	const query = createQuery({
		queryKey: ['all-files'],
		queryFn: async () =>
			await fetch(`${import.meta.env.VITE_BASE_URL}/file/recycle-bin`).then((r) => r.json())
	});
</script>

<h1 class="sticky top-0 bg-inherit p-4 text-3xl font-bold">Recycle Bin</h1>
{#if $query.isLoading}
	Loading...
{/if}
{#if $query.isError}
	Error: {$query.error.message}
{/if}
{#if $query.isSuccess}
	<div class="p-4">
		<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
			{#each $query.data as item}
				<li>
					<FileGrid file={item} refetch={() => $query.refetch()} />
				</li>
			{/each}
		</ul>
	</div>
{/if}
