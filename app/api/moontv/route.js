export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  const headerKey = request.headers.get("x-api-key");
  const url = new URL(request.url, `https://${request.headers.get("host")}`);
  const key = headerKey || url.searchParams.get("key");

  // 如果 key 未传或错误，直接拒绝
  if (key !== "3f9a1b7c2d4e6f8091a2b3c4d5e6f7a8") {
    return new Response("Unauthorized", { status: 401 });
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

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
    status: 200
  });
}
