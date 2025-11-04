export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const keyFromQuery = searchParams.get("key");
    const keyFromHeader = request.headers.get("x-api-key");
    const key = keyFromHeader || keyFromQuery;

    if (key !== "3f9a1b7c2d4e6f8091a2b3c4d5e6f7a8") {
      return new Response("Unauthorized", { status: 401 });
    }

    const data = {
      sites: [
        {
          key: "csp_MoonTV",
          name: "🌙 MoonTV",
          type: 3,
          api: "https://tv.wawayoyo.top/api/moontv",
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
  } catch (e) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
