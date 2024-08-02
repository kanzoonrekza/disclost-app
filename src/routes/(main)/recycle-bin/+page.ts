import type { PageLoad } from './$types';

export const load = (async () => {
	// TODO: fetch data from server
	const response = {
		status: 200,
		data: [
			{
				id: 10,
				name: 'Cat playing with yarn ball.mp4',
				category: 'Video',
				createdAt: '2024-08-02'
			},
			{
				id: 11,
				name: 'Sunset over rice fields.jpg',
				category: 'Image',
				createdAt: '2024-08-02'
			},
			{
				id: 12,
				name: 'Vacation itinerary.docx',
				category: 'Document',
				createdAt: '2024-08-02'
			},
			{
				id: 13,
				name: 'Ocean waves ambience.mp3',
				category: 'Audio',
				createdAt: '2024-08-02'
			},

			{
				id: 14,
				name: 'Butterfly wings close-up.png',
				category: 'Image',
				createdAt: '2024-08-02'
			},
			{
				id: 15,
				name: 'Heartbeat sound effect.mp3',
				category: 'Audio',
				createdAt: '2024-08-02'
			},
			{
				id: 16,
				name: 'Timelapse of a flower blooming.mov',
				category: 'Video',
				createdAt: '2024-08-02'
			},
			{
				id: 17,
				name: 'Grocery list.txt',
				category: 'Document',
				createdAt: '2024-08-02'
			},
			{
				id: 18,
				name: 'Research paper on sustainable farming.pdf',
				category: 'Document',
				createdAt: '2024-08-02'
			}
		]
	};
	return response;
}) satisfies PageLoad;
