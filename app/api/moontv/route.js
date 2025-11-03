// ✅ 强制在 Node.js runtime 下运行，避免 Edge 环境丢失 URL 参数
export const runtime = "nodejs";

// ✅ 禁用缓存，防止 401 缓存
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    // 使用完整解析方式获取 URL 参数
    const fullUrl = request.nextUrl || new URL(request.url, `https://${request.headers.get("host")}`);
    const key = fullUrl.searchParams.get("key") || request.headers.get("x-api-key");

    // 控制台输出调试（在 Vercel Logs 可见）
    console.log("Incoming key:", key);

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
          filterable: 1,
        },
      ],
      lives: [],
      parses: [],
    };

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error in handler:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}

