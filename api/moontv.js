export default function handler(req, res) {
  // 从 URL 原始字符串中手动解析 ?key= 参数，兼容所有 Vercel 部署环境
  let urlKey = '';
  try {
    const fullUrl = req.url || '';
    const match = fullUrl.match(/[?&]key=([^&]+)/);
    if (match) urlKey = decodeURIComponent(match[1]);
  } catch (e) {}

  // 同时支持 Header 的 X-API-KEY
  const headerKey = req.headers['x-api-key'];
  const key = urlKey || headerKey;

  // 校验密钥
  if (key !== '3f9a1b7c2d4e6f8091a2b3c4d5e6f7a8') {
    return res.status(401).send('Unauthorized');
  }

  // 输出 JSON 配置
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

