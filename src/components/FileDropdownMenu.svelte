<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';

	export let data: any;

	const {
		elements: { trigger, menu, item, overlay },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true
	});

	const options = [
		{
			label: 'Details',
			onClick: () => {
				console.log('Details', data);
			}
		},
		{
			label: 'Copy link',
			onClick: () => {
				console.log('Copy link', data);
			}
		},
		{
			label: 'Delete',
			onClick: () => {
				console.log('Delete', data);
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
