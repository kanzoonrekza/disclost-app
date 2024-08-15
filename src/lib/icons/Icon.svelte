<script lang="ts">
	import { onMount } from 'svelte';
	import type { IconName } from './iconTypes';

	export let icon: IconName;
	export let size = 40;
	export let fill = 'currentColor';

	let iconContent = '';

	onMount(async () => {
		try {
			const module = await import(`./assets/${icon}.svg?raw`);
			let svgContent = module.default;

			// Replace the `fill`, `width`, and `height` attributes within the SVG tag
			svgContent = svgContent
				.replace(/<svg/, `<svg fill="${fill}" width="${size}" height="${size}"`)
				.replace(/fill="[^"]*"/, `fill="${fill}"`) // Ensure fill is updated if already present
				.replace(/width="[^"]*"/, `width="${size}"`) // Ensure width is updated if already present
				.replace(/height="[^"]*"/, `height="${size}"`); // Ensure height is updated if already present

			iconContent = svgContent;
		} catch (error) {
			console.error(`Failed to load icon: ${icon}`, error);
		}
	});
</script>

{@html iconContent}
