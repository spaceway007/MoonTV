export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get('key') || req.headers.get('x-api-key');

  if (key !== '3f9a1b7c2d4e6f8091a2b3c4d5e6f7a8') {
    return new Response('Unauthorized', { status: 401 });
  }

  const data = {
    sites: [
      {
        key: "csp_MoonTV",
        name: "🌙 MoonTV",
        type: 3,
        api: "https://moon-lknuuxlwj-smithteslas-projects.vercel.app/api/moontv",
        searchable: 1,
        quickSearch: 1,
        filterable: 1
      }
    ],
    lives: [],
    parses: []
  };

  return Response.json(data);
}
