<script lang="ts">
	import FileDropdownMenu from './FileDropdownMenu.svelte';

	type File = {
		id: number;
		name: string;
		category: string;
		createdAt: string;
	};
	export let file: File;
</script>

<div class="grid h-full grid-rows-[80px_1fr]">
	<!-- TODO: Use icon -->
	<div class="grid place-items-center rounded-lg border border-slate-600 p-2">
		{file.category} Icon
	</div>
	<div class="flex items-start justify-between gap-2">
		<!-- TODO: hover show full name -->
		<span class="line-clamp-2 text-sm">{file.name}</span>
		<FileDropdownMenu data={file} />
	</div>
</div>
