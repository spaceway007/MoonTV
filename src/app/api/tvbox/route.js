export async function GET(request) {
  const data = {
    sites: [
      {
        key: "csp_MoonTV",
        name: "🌙 MoonTV",
        type: 3,
        api: "https://moontv.vercel.app/api/moontv.js",
        searchable: 1,
        quickSearch: 1,
        filterable: 1
      }
    ],
    parses: [
      {
        name: "默认解析",
        url: "https://jx.jsonplayer.com/player/?url="
      }
    ],
    lives: [
      {
        group: "央视",
        channels: [
          {
            name: "CCTV-1 综合",
            urls: ["https://mtv.wawayoyo.top/live.php?id=cctv1"]
          }
        ]
      }
    ]
  };

  return Response.json(data);
}
