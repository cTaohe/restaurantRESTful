# 我的餐廳清單

使用 RESTful 方式重構路由

## 安裝環境

- Windows 10
- Node.js
- Express
- Express-handlebars
- Mongoose
- body-parser
- nodemon
- method-override

## 下載及安裝

### 安裝

安裝 [MongoDB](https://www.mongodb.com/download-center/community)

安裝專案
```
nvm install 10.15.3
git clone https://github.com/cTaohe/restaurantRESTful.git
npm install
```

在 restaurantRESTful/models/seeds/ 產生種子檔案

```
cd restaurantRESTful/models/seeds
node restaurantSeeder.js
```

### 執行

在 restaurantRESTful 資料夾下
```
npm run dev
```
在 Browser 網址輸入 `localhost:3000` ，就可以在瀏覽器觀看。

## 功能

- 搜尋餐廳名稱、英文名稱、類型
- 點選圖片顯示詳細資訊
- 新增餐廳
- 編輯餐廳
- 刪除餐廳
- 排序瀏覽

## 畫面
新增排序
![image](https://lh3.googleusercontent.com/gcevGGOHw7s09N7OxmA063YC8I02y1R_GgIZmGJ2uhd82o1fBheuhLCRZR8OAoxTLH_5O0wdY0tbUFoUmPMEBybpdqNNU2YeaTmAP2eJmbn5uHd190F3JIyI2MS4n6jHc0YcRdsIl7nDSUqNCaP6MkLxheSKo_xqCaDWzsx0Uc5aho82wP1V7r5HW9xp68LlVCNEf7oUGzt2of1K84hKyQ69RH8eMHoYfDTmgjkLfcoUeFGiylxcykghwUMx65DG_vrxjPuK37Cp4etKwgkcvcOf6svNZUd7h_0N9MI-_HgJlTONS3GuAVcnYNpDntPzybriprPqbl0l_RdenJMyp9LBcrWbAgcsPdIzZ1Iqv-uPVyEemhZdZy-cXUtIqeDY-RESfHHv9Fiff2sG65xq0jNNUXmsBMWz3ZYP65v-91DCkYdg2P4fvJHJfXSYfWZmqYHIPjZSE-Xj7tYTRkcrywRWYOA1IsrlYMe6cMx74RwAq5cOZ-NTrB_d3i6jbQC5xJgiQ9rksbMV0_SaUMaDW-7Q4HsZUr82ZSEW9UMbU9A4opKd3Ym7CHmHlbzr1bbbUUfVkZIR4Om-aXeYBLkrWzLaX9aQfN7An77wNUS26VqdzpKoUUFCsYsh6H0ggBrDpZmGMLWVv6GKwwJvF7RS2jA5G2FSZNWQ_fYuRI6raAMIyDowrChJfodSsdTJVsm4VTdw-miljOVz_r6cTpMn60G7=w1358-h951-no)

驗證
![image](https://lh3.googleusercontent.com/C6Vz5h7y0fwF36-w8dCrmoC-eUm3wg6C9BOksWjR_WlwRhMTJwYxIDjwq7OfPp4xUSxZ1X6VF3kiOruYCAonvZh0Z8IzAybmzayhZMDcBUNxqHcGHmk4I5ZYl3V6thHfCwI-jsHOXAsGwsUB9NTRzJecafYH8gLHvokYVMBBgwNte_vA2AS6aeUOJ08bsL33lzOOyh6Pn9q0nz16KsW8WlorAj6xfc68lb_SA6vN6yydnsD-QLzcQa-G6rHIjvhjh0UbRAIKJFBXo8_-sxFGhV5OgWxmVEZcsjPSpDb6jKqoQpnIRWfrdN7BfUV6KauLkT5eeofe_KNqX_TGOnQvp81_yqB07uc2OZfZnzrCV-NjKAcWcorPVc2slPMQ1A0N-NYvGK8ubhTjOxPirvdH3cligBMt942r0d3zWG5CtD6sWN7Kcc7QEHCsG_0Oxg5eqAn3BPYt0KpN6UwB2NvC1XzIZnQy5iGQjLGG6gNT7rIcxiJv8oZHTQgarZZSX-ypZ_vBxzBnRIhjXsDD5oQlhpq01JOJhlcPfKEaSutz0sOo8-BosAK1wIX4PnnesOh_FFtWVJuzQE_drlqEuVT4-u3hzu5ihyQnhHXbETT8PqXbJUGiFf0VxV9LFivbjPn16d1Vwz63-PIgCkSB6-pW8jWeh_H0oyuSPNVOBT3XMsEdCEfrSuwVVVbnHVhZXf6gXUIztqBGWN2VXHIUk5FmzxzY=w1358-h951-no)
