<script lang="ts">
	import MainLayout from '../../layouts/main-layout/MainLayout.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<MainLayout>
	<slot />
</MainLayout>
