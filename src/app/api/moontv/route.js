import { NextResponse } from 'next/server';

const API_KEY = '3f9a1b7c2d4e6f8091a2b3c4d5e6f7a8';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = request.headers.get('x-api-key') || searchParams.get('key');

  if (key !== API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const data = {
    sites: [
      {
        key: 'csp_MoonTV',
        name: '🌙 MoonTV',
        type: 3,
        api: 'https://tv.wawayoyo.top/api/moontv',
        searchable: 1,
        quickSearch: 1,
        filterable: 1,
      },
    ],
    lives: [
      {
        group: 'CCTV',
        channels: [
          { name: 'CCTV-1 综合', urls: ['https://mtv.wawayoyo.top/live.php?id=cctv1'] },
          { name: 'CCTV-13 新闻', urls: ['https://mtv.wawayoyo.top/live.php?id=cctv13'] },
        ],
      },
    ],
    info: 'MoonTV JSON API - Powered by spaceway007',
  };

  return NextResponse.json(data);
}
