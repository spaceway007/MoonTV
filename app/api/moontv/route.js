export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    // ✅ 获取 header
    const headerKey = request.headers.get("x-api-key");
    // ✅ 同时兼容 query（以防未来恢复）
    const url = new URL(request.url, `https://${request.headers.get("host")}`);
    const urlKey = url.searchParams.get("key");
    const key = headerKey || urlKey;

    // ✅ 校验密钥
    if (key !== "3f9a1b7c2d4e6f8091a2b3c4d5e6f7a8") {
      return new Response("Unauthorized", { status: 401 });
    }

    // ✅ 输出 JSON
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

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
