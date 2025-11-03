export default function handler(req, res) {
  const key = req.query.key || req.headers['x-api-key'];
  if (key !== '3f9a1b7c2d4e6f8091a2b3c4d5e6f7a8') {
    return res.status(401).send('Unauthorized');
  }

  res.status(200).json({
    sites: [
      {
        key: "csp_MoonTV",
        name: "🌙 MoonTV",
        type: 3,
        api: "https://moon-lknuuxlwj-smithteslas-projects.vercel.app/api/moontv.js",
        searchable: 1,
        quickSearch: 1,
        filterable: 1
      }
    ],
    lives: [],
    parses: []
  });
}

