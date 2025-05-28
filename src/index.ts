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

    return new Response("Not Found", { status: 404 });
  },
};
