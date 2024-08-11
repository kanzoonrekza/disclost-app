import type { PageLoad } from './$types';

// This is only a mock data on lo-fi slicing phase.
export const load = (async () => {
	// TODO: fetch data from server
	const response = {
		status: 200,
		data: [
			{ id: 1, name: 'Kitten on a bridge.jpeg', category: 'Image', createdAt: '2023-01-01' },
			{ id: 2, name: 'Running dog fall funny.mp4', category: 'Video', createdAt: '2023-01-02' },
			{ id: 3, name: 'Jazz by the window.mp3', category: 'Audio', createdAt: '2023-01-03' },
			{
				id: 4,
				name: 'Contract with contractor.pdf',
				category: 'Document',
				createdAt: '2023-01-04'
			},
			{ id: 5, name: 'Alligator.png', category: 'Image', createdAt: '2023-01-05' },
			{
				id: 6,
				name: 'Penguin walking timelapse 5 hours.mov',
				category: 'Video',
				createdAt: '2023-01-06'
			},
			{ id: 7, name: 'Drum roll.mp3', category: 'Audio', createdAt: '2023-01-07' },
			{ id: 8, name: 'Sale pitch 20/12/2025.ppt', category: 'Document', createdAt: '2023-01-08' },
			{
				id: 9,
				name: 'Paper on Chemical Formation Between Oil and Phosphor Study Case Metalurgy on West Sulawesi by Andrew and Matthew.pdf',
				category: 'Document',
				createdAt: '2021-01-08'
			}
		]
	};
	return response;
}) satisfies PageLoad;
