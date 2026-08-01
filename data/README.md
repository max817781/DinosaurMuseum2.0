# data 資料夾說明

這個資料夾放的是網站內容資料。

大部分日常維護，都在這裡完成。

---

## 檔案總覽

| 檔案 | 用途 |
|---|---|
| `vodData.js` | VOD、精華、活動影片資料 |
| `songData.js` | 歌單資料 |
| `heroData.js` | 首頁輪播資料 |
| `contentMap.js` | 共用內容資料 |
| `timelineData.js` | 成長時間軸 |
| `marshmallowData.js` | 半周年棉花糖資料 |
| `marshmallowInfo.js` | 棉花糖活動連結 |
| `quoteData.js` | 語錄區資料 |
| `playgroundLinks.js` | 恐龍遊樂場連結 |
| `annualReview.js` | 年度回顧文字 |
| `originalSong.js` | 原創曲主展示資料 |
| `originalSongs.js` | 其他原創曲資料 |

---

## VOD 資料格式

檔案：

```txt
vodData.js
```

常用格式：

```js
{
    id: "vod_example_20260707",
    type: "vod",
    title: "VOD 標題",
    link: "https://discord.com/...",
    image: "images/example.jpg",
    category: "活動",
    emoji: "🎉",
    story: "這段 VOD 的簡短故事。",
    tags: "名場面,小籠包",
    addedAt: "2026-07-07",
    streamDate: "2026-07-07"
}
```

### VOD 欄位說明

| 欄位 | 必填 | 說明 |
|---|---|---|
| `id` | 建議必填 | 每支 VOD 的唯一名字，不要重複 |
| `type` | 建議填 | 通常是 `"vod"` |
| `title` | 必填 | 前台顯示標題 |
| `link` | 建議填 | Discord / YouTube / 其他連結 |
| `image` | 可空白 | 封面圖路徑 |
| `category` | 建議填 | 主分類 |
| `emoji` | 可空白 | 卡片預設圖示 |
| `story` | 可空白 | VOD 卡片故事描述 |
| `tags` | 可空白 | 進階標籤 |
| `addedAt` | 建議填 | 收錄日期，用於排序與 NEW 標籤 |
| `streamDate` | 可空白 | 直播實際日期 |
| `pinnedRank` | 可空白 | 永久置頂順序 |

### category 主分類

目前建議只使用：

```txt
遊戲
唱歌
雜談
活動
精華
其他
```

不要把細標籤塞進 `category`。

細標籤請放 `tags`。

### tags 進階標籤

可以用字串：

```js
tags: "哥布林,哈橘,名場面"
```

也可以用陣列：

```js
tags: ["哥布林", "哈橘", "名場面"]
```

### pinnedRank 永久置頂

如果想讓重要 VOD 永遠排前面：

```js
pinnedRank: 1
```

規則：

```txt
數字越小，越前面
有 pinnedRank 的 VOD 永遠排在一般 VOD 前面
沒有 pinnedRank 的 VOD 才照 addedAt 排序
```

---

## 歌單資料格式

檔案：

```txt
songData.js
```

常用格式：

```js
{
    id: "song_example",
    type: "song",
    title: "歌曲名稱",
    artist: "歌手",
    language: "中文",
    status: "已唱",
    tags: "頻道歌,原創曲",
    link: "https://..."
}
```

如果同一首歌有多次演唱，可以使用：

```js
{
    id: "song_example",
    type: "song",
    title: "歌曲名稱",
    artist: "歌手",
    language: "中文",
    status: "已唱",
    performances: [
        {
            date: "2026/03/21",
            label: "3/21 歌回",
            sourceId: "vod_example_20260321"
        }
    ]
}
```

### 歌單欄位說明

| 欄位 | 必填 | 說明 |
|---|---|---|
| `id` | 建議必填 | 每首歌自己的唯一 id |
| `type` | 建議填 | 通常是 `"song"` |
| `title` | 必填 | 歌名 |
| `artist` | 建議填 | 原唱 / 歌手 |
| `language` | 建議填 | 中文 / 英文 / 日文 |
| `status` | 建議填 | 已唱 / 練習中 |
| `tags` | 可空白 | 歌曲標籤 |
| `link` | 可空白 | 單一連結 |
| `performances` | 可空白 | 多次演唱版本 |

### performances 注意事項

`performances.sourceId` 要指向 `vodData.js` 裡的 VOD id。

不要讓 `songData.id` 和 `vodData.id` 使用同一個 id。

建議：

```txt
songData.id = song_歌曲名稱
vodData.id = vod_歌曲名稱_日期
```

---

## 首頁輪播 heroData

檔案：

```txt
heroData.js
```

輪播可以直接寫資料，也可以用 `sourceId` 引用其他資料。

範例：

```js
{
    sourceId: "vod_example_20260707",
    label: "館長推薦",
    title: "想顯示的標題"
}
```

如果 `sourceId` 和本區塊有同名欄位，會以本區塊自己的資料為主。

---

## contentMap 共用資料

檔案：

```txt
contentMap.js
```

這裡放會被其他地方引用的共用資料。

例如：

```txt
諾諾個人頁
原創曲
語錄
特殊內容
```

如果不確定資料該不該放這裡，通常先不要放。

VOD 請放 `vodData.js`。

歌單請放 `songData.js`。

---

## 圖片路徑

圖片通常放：

```txt
images/
```

資料裡寫：

```js
image: "images/example.jpg"
```

注意：

```txt
檔名要完全一樣
副檔名要完全一樣
大小寫要完全一樣
```

GitHub Pages 對檔名大小寫比較敏感。

---

## 最重要的安全規則

```txt
id 不要重複
圖片要真的存在
category 不要亂塞細標籤
tags 可以自由新增
sourceId 要指向真的存在的 id
```

新增資料時如果網站突然壞掉，優先檢查：

```txt
逗號是不是少了
引號是不是少了
中括號 / 大括號是不是少了
上一筆資料後面是不是忘記加逗號
```

