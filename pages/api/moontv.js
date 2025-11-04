export default function handler(req, res) {
  const headerKey = req.headers['x-api-key'];
  const url = new URL(req.url, `https://${req.headers.host}`);
  const urlKey = url.searchParams.get('key');
  const key = headerKey || urlKey;

  if (key !== '3f9a1b7c2d4e6f8091a2b3c4d5e6f7a8') {
    res.status(401).send('Unauthorized');
    return;
  }

  const data = {
    sites: [
      {
        key: 'csp_MoonTV',
        name: '🌙 MoonTV',
        type: 3,
        api: 'https://moon-lknuuxlwj-smithteslas-projects.vercel.app/api/moontv',
        searchable: 1,
        quickSearch: 1,
        filterable: 1
      }
    ],
    lives: [],
    parses: []
  };

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
}
