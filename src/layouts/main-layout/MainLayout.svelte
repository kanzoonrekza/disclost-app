<script>
	import Header from './components/Header.svelte';
	import Sidebar from './components/Sidebar.svelte';
</script>

<!-- TODO: Mobile responsiveness -->
<div
	class="grid h-screen w-screen grid-cols-[12rem_1fr] grid-rows-[40px_1fr] gap-2 bg-slate-50 p-2"
>
	<div class="text-2xl font-bold">Disclost</div>

	<Header />
	<Sidebar />

	<div class="flex flex-col overflow-scroll rounded-lg border border-slate-400 bg-white">
		<slot />
	</div>
</div>
