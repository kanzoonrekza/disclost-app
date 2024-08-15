<script lang="ts">
	import { createMutation } from '@tanstack/svelte-query';

	const uploadMutation = createMutation({
		mutationFn: (formData: FormData) => {
			return fetch(`${import.meta.env.VITE_BASE_URL}/file`, {
				method: 'POST',
				body: formData
			});
		},
    onSuccess: () => {
      window.location.reload();
    },
	});

	const uploadFile = (e: Event) => {
		const input = e.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
      const formData = new FormData();
      formData.append('file', input.files[0]);
			$uploadMutation.mutate(formData);
		}
	};
</script>

<button
	on:click={() => {
		//@ts-ignore
		document.getElementById('file-input').click();
	}}>Upload File</button
>
<input id="file-input" type="file" hidden on:change={uploadFile} />
