<script lang="ts">
	import Icon from '$lib/icons/Icon.svelte';
	import FileDropdownMenu from './FileDropdownMenu.svelte';

	type File = {
		id: number;
		name: string;
		category: string;
		createdAt: string;
	};
	export let file: File;
	export let refetch: () => void;
</script>

<div class="grid h-full grid-rows-[80px_1fr]">
	<!-- TODO: Use icon -->
	<div class="grid place-items-center rounded-lg border-2 border-slate-400 p-2">
		{#if file.name.endsWith('.jpg')}
			<Icon icon="file-image" />
		{:else}
			<Icon icon="file" />
		{/if}
	</div>
	<div class="flex items-start justify-between gap-2 pt-1 align-middle">
		<!-- TODO: hover show full name -->
		<span class="line-clamp-2 text-sm font-medium">{file.name}</span>
		<FileDropdownMenu itemData={file} {refetch} />
	</div>
</div>
