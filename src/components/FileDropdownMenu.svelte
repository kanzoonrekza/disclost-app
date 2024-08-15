<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { createMutation, createQuery } from '@tanstack/svelte-query';
	import { fly } from 'svelte/transition';

	export let itemData: any;

	const {
		elements: { trigger, menu, item, overlay },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true
	});

	const downloadFromUrl = async (url: string, fileName: string) => {
		const response = await fetch(url, {
			method: 'GET'
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const blob = await response.blob();
		const blobUrl = URL.createObjectURL(blob);

		const link = document.createElement('a');
		link.href = blobUrl;
		link.download = fileName || 'download';

		document.body.appendChild(link);
		link.click();

		document.body.removeChild(link);
		URL.revokeObjectURL(blobUrl);
	};

	const downloadMutation = createMutation({
		mutationFn: async (id: string) => {
			const res = await fetch(`${import.meta.env.VITE_BASE_URL}/file_url/${id}`, {
				method: 'GET'
			});
			return res.json();
		},
		onSuccess: (data, id) => {
			downloadFromUrl(data.url, itemData.name);
		},
		onError: (error) => {
			console.log('error', error);
		}
	});

	const options = [
		{
			label: 'Download',
			onClick: () => {
				$downloadMutation.mutate(itemData.id);
			}
		},
		{
			label: 'Delete',
			onClick: () => {
				console.log('Delete', itemData);
			}
		}
	];
</script>

<button type="button" use:melt={$trigger} aria-label="Update dimensions">
	<span>::</span>
</button>

{#if $open}
	<div use:melt={$overlay} class="fixed inset-0" />
	<div
		class="flex min-w-40 flex-col rounded bg-white p-1 drop-shadow-lg"
		use:melt={$menu}
		transition:fly={{ duration: 300, y: -10 }}
	>
		{#each options as option}
			<button class="" use:melt={$item} on:click={option.onClick}>{option.label}</button>
		{/each}
	</div>
{/if}
