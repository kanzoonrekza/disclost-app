import { redirect } from '@sveltejs/kit';

// * phase v0.0.1 have no auth or landing page. / will redirect to /dashboard
export async function load() {
	return redirect(302, '/dashboard');
}
