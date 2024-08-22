<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/icons/Icon.svelte';
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { createMutation } from '@tanstack/svelte-query';
	import { fly } from 'svelte/transition';

	export let itemData: any;
	export let refetch: () => void;

	const {
		elements: { trigger, menu, item, overlay },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true,
		positioning: {
			placement: 'bottom-end'
		}
	});

	const downloadFromUrl = async (url: string, fileName: string) => {
		try {
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
		} catch {
			window.open(url, '_blank');
		}
	};

	const downloadMutation = createMutation({
		mutationFn: async (id: string) => {
			const res = await fetch(`${import.meta.env.VITE_BASE_URL}/file_url/${id}`, {
				method: 'GET'
			});
			return res.json();
		},
		onSuccess: (data) => {
			downloadFromUrl(data.url, itemData.name);
		},
		onError: (error) => {
			console.log('error', error);
		}
	});

	const deleteMutation = createMutation({
		mutationFn: async (id: string) => {
			const res = await fetch(`${import.meta.env.VITE_BASE_URL}/file/${id}`, {
				method: 'DELETE'
			});
			return res.json();
		},
		onSuccess: () => {
			refetch();
		},
		onError: (error) => {
			console.log('error', error);
		}
	});

	const recoverMutation = createMutation({
		mutationFn: async (id: string) => {
			const res = await fetch(`${import.meta.env.VITE_BASE_URL}/file/${id}/recover`, {
				method: 'PATCH'
			});
			return res.json();
		},
		onSuccess: () => {
			refetch();
		},
		onError: (error) => {
			console.log('error', error);
		}
	});

	const options =
		$page.url.pathname == '/recycle-bin'
			? [
					{
						label: 'Recover',
						onClick: () => {
							$recoverMutation.mutate(itemData.id);
						}
					},
					{
						label: 'Permanently Delete',
						onClick: () => {
							$deleteMutation.mutate(itemData.id);
						}
					}
				]
			: [
					{
						label: 'Download',
						onClick: () => {
							$downloadMutation.mutate(itemData.id);
						}
					},
					{
						label: 'Delete',
						onClick: () => {
							$deleteMutation.mutate(itemData.id);
						}
					}
				];
</script>

<button type="button" use:melt={$trigger} aria-label="Update dimensions">
	<Icon icon="dots-three-circle" size={20} />
</button>

{#if $open}
	<div use:melt={$overlay} class="fixed inset-0" />
	<div
		class="flex min-w-40 flex-col rounded bg-white p-1 drop-shadow-lg"
		use:melt={$menu}
		transition:fly={{ duration: 300, y: -10 }}
	>
		{#each options as option}
			<button class="text-left" use:melt={$item} on:click={option.onClick}>{option.label}</button>
		{/each}
	</div>
{/if}
