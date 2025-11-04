// src/app/api/moontv/route.js
import { NextResponse } from 'next/server';

// ✅ 允许自定义访问密钥
const API_KEY = '3f9a1b7c2d4e6f8091a2b3c4d5e6f7a8';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = request.headers.get('x-api-key') || searchParams.get('key');

  // 🔒 验证密钥
  if (key !== API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // ✅ 返回影视源配置（示例，可自定义）
  const data = {
    sites: [
      {
        key: 'csp_MoonTV',
        name: '🌙 MoonTV',
        type: 3,
        api: 'https://tv.wawayoyo.top/api/moontv',
        searchable: 1,
        quickSearch: 1,
        filterable: 1
      }
    ],
    lives: [
      {
        group: 'CCTV',
        channels: [
          { name: 'CCTV-1 综合', urls: ['https://mtv.wawayoyo.top/live.php?id=cctv1'] },
          { name: 'CCTV-13 新闻', urls: ['https://mtv.wawayoyo.top/live.php?id=cctv13'] }
        ]
      }
    ],
    info: 'MoonTV JSON API - Powered by spaceway007'
  };

  return NextResponse.json(data);
}
