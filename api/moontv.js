export default function handler(req, res) {
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
    parses: [],
  });
}
