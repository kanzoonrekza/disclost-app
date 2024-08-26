<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import FileGrid from '../../../components/FileGrid.svelte';
	import Icon from '$lib/icons/Icon.svelte';

	const query = createQuery({
		queryKey: ['all-files'],
		queryFn: async () => await fetch(`${import.meta.env.VITE_BASE_URL}/file`).then((r) => r.json())
	});
</script>

<h1 class="sticky top-0 bg-inherit p-4 text-3xl font-bold">Dashboard</h1>
<div class="h-full p-4">
	{#if !$query.isFetching && $query.data.length > 0}
		<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
			{#each $query.data as item}
				<li>
					<FileGrid file={item} refetch={() => $query.refetch()} />
				</li>
			{/each}
		</ul>
	{:else}
		<ul class="grid h-full place-content-center place-items-center gap-3">
			{#if $query.isFetching}
				<span class="animate-spin">
					<Icon icon="spinner-gap" size={80} />
				</span>
			{:else}
				{#if $query.isError}
					Error: {$query.error.message}
				{/if}
				{#if $query.data.length == 0}
					<Icon icon="sun-horizon" size={80} />
					<span class="text-2xl font-medium">Looks like you don't have any files!</span>
				{/if}
			{/if}
		</ul>
	{/if}
</div>
