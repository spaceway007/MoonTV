// api/proxy.js  （放到项目的 api/ 目录下，Vercel 会自动部署为 Serverless Function）
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const password = process.env.PASSWORD || ''; // 从 Vercel env 获取
    // 把 queryString 透传（例如 ?ac=list&page=1）
    const qs = new URLSearchParams({ ...req.query });
    // 确保 password 有被设置
    if (!qs.has('password')) qs.set('password', password);

    const target = `https://tv.wawayoyo.top/api.php?${qs.toString()}`;
    const r = await fetch(target, { method: 'GET', timeout: 10000 });
    const text = await r.text();

    // 尝试把返回解析成 JSON，否则原样返回文本
    try {
      const json = JSON.parse(text);
      res.setHeader('Content-Type', 'application/json');
      return res.status(200).json(json);
    } catch {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      return res.status(r.status).send(text);
    }
  } catch (e) {
    return res.status(500).json({ error: e.message || String(e) });
  }
}
