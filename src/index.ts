export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/shortcut-text") {
      return new Response(
        JSON.stringify({
            "TW": {
                "api": "使用 Gemini 模型需要 API 金鑰",
                "api_a1": "🔗 前往 Google AI Studio 申請或複製",
                "api_a2": "🗝️ 在捷徑中下滑找到文字欄位並貼上",
                "update": "有新的捷徑更新項目可供使用，要立即更新嗎？\n\n更新內容：",
                "update_a1": "好",
                "update_a2": "下次再說",
                "update_a3": "暫停直到下個更新",
                "update_b1": "已自動複製 API 金鑰，方便在更新過程中直接貼上到設定欄位中。",
                "update_b2": "已自動複製分享連結，避免在更新過程中 App 重新整理而遺失，需要時可以貼上返回。",
                "empty": "嗯⋯你發現了一包新鮮的空氣！再分享一次試試。",
                "reminder_title": "首次使用提醒",
                "reminder_content": "當你選擇使用 ChatGPT 的 AI 模型時，有時可能會出現「You are logged out」的錯誤，通常是因為 ChatGPT App 並未在手機的背景執行。\n\n要解決這個問題，只要打開 ChatGPT App，並且確保不要上滑關閉即可。",
                "video": "選擇摘要來源",
                "video_a1": "說明欄文字（較快）",
                "video_a2": "影片（取決於內容長度）",
                "result": "（對結果不滿意時可以取消並重新摘要）",
                "select": "選擇地點：",
                "next": "你要前往下一個地點嗎？"
            },
            "EN": {
                "api": "Using the Gemini model requires an API key",
                "api_a1": "🔗 Go to Google AI Studio to apply or copy",
                "api_a2": "🗝️ In the shortcut, scroll down to find the text field and paste it",
                "update": "New shortcut updates are available. Would you like to update now?\n\nRelease Notes:",
                "update_a1": "Yes",
                "update_a2": "Remind me later",
                "update_a3": "Pause until the next update",
                "update_b1": "The API key has been automatically copied, allowing you to paste it directly into the settings field during the update process.",
                "update_b2": "The share link has been automatically copied to prevent progress loss in case the app refreshes during the update. You can paste it to return when needed.",
                "empty": "Hmm... You've discovered a package of fresh air! Try sharing again.",
                "reminder_title": "First-time Reminder",
                "reminder_content": "When selecting the ChatGPT AI model, you might occasionally encounter a \"You are logged out\" error. This usually happens because the ChatGPT app isn't running in the background.\n\nTo resolve this, open the ChatGPT app and ensure it remains running without swiping up to close it.",
                "video": "Select summary source",
                "video_a1": "Description text (faster)",
                "video_a2": "Video (depends on content length)",
                "result": "(You can cancel and re-summarize if you are not satisfied with the results)",
                "select": "Select a place:",
                "next": "Do you want to proceed to the next location?"
            },
            "JP": {
                "api": "Gemini モデルを使用するには API キーが必要です",
                "api_a1": "🔗 Google AI Studio で申請またはコピーし",
                "api_a2": "🗝️ ショートカット内を下にスクロールしてテキスト欄に貼り付けてください",
                "update": "新しいショートカットのアップデートがあります。今すぐ更新しますか？\n\nアップデート内容：",
                "update_a1": "はい",
                "update_a2": "後で",
                "update_a3": "次の更新まで停止",
                "update_b1": "API キーを自動でコピーしました。更新中に設定欄へ直接貼り付けられます。",
                "update_b2": "共有リンクを自動でコピーしました。更新中にアプリがリロードされても失われません。必要な時に貼り付けて戻れます。",
                "empty": "うーん...新鮮な空気のパッケージを発見しました！もう一度共有してみてください。",
                "reminder_title": "初回使用時の注意点",
                "reminder_content": "ChatGPT の AI モデルを選択するとき、「You are logged out」というエラーが表示される場合があります。これは通常、ChatGPT アプリがバックグラウンドで動作していないためです。\n\nこの問題を解決するには、ChatGPT アプリを開き、終了せずにバックグラウンドで実行し続けてください。",
                "video": "要約元を選択してください。",
                "video_a1": "説明欄のテキスト（高速）",
                "video_a2": "動画（内容の長さによる）",
                "result": "（結果に満足できない場合、キャンセルして再要約が可能です。）",
                "select": "場所を選択してください：",
                "next": "次の場所に進みますか？"
            }
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response("Not Found", { status: 404 });
  },
};
