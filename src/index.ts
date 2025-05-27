export interface Env {
  API_KEY: string;   // 來自 wrangler.toml
}

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxpnyN2sREKRIbbPI42vqCB61E_N6ipfQte9YdcrzOi7dL4AnC4qZ6k_ndW7OUK09Sdew/exec";

export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/shortcut-text") {
      return new Response(
        JSON.stringify({
          "TW": {
            "update": "有新的捷徑更新項目可供使用，要立即更新嗎？\n\n更新內容：",
            "update_a1": "好",
            "update_a2": "下次再說",
            "update_a3": "暫停直到下個更新"
          },
          "EN": {
            "update": "New shortcut updates are available. Would you like to update now?\n\nRelease Notes:",
            "update_a1": "Yes",
            "update_a2": "Remind me later",
            "update_a3": "Pause until the next update"
          },
          "JP": {
            "update": "新しいショートカットのアップデートがあります。今すぐ更新しますか？\n\nアップデート内容：",
            "update_a1": "はい",
            "update_a2": "後で",
            "update_a3": "次の更新まで停止"
          }
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    if (url.pathname === "/get-cube" && request.method === "POST") {
      try {
        // 1) 轉呼 Apps Script，帶上 key
        const apsUrl = `${APPS_SCRIPT_URL}?key=${encodeURIComponent(env.API_KEY)}`;
        const apsRes = await fetch(apsUrl, { method: "GET" });

        if (!apsRes.ok) {
          return new Response(
            `Apps Script error ${apsRes.status}`,
            { status: 502 }
          );
        }

        // 2) 直接把 Apps Script 回傳的 JSON 丟回給呼叫者
        const body = await apsRes.text();          // 保持字串避免二次 JSON.parse
        return new Response(body, {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });

      } catch (err) {
        return new Response(
          "Worker error: " + (err as Error).message,
          { status: 500 }
        );
      }
    }

    return new Response("Not Found", { status: 404 });
  },
};
