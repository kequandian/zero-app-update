## API 路径

```
/api/app/version
```

API 应只有 GET UPDATE 两种方法。

response:

```
{
  code: 200,
  data: {
    iconUrl: '',
    pcName: '',
    ...
  }
}
```

resopnse 具体字段:



| 字段              | 描述                                           |
| ----------------- | ---------------------------------------------- |
| iconUrl           | 应用封面                                       |
| pcName            | 桌面端应用名称                                 |
| pcDownloadUrl     | 桌面端下载地址                                 |
| pcVersion         | 桌面端版本                                     |
| pcDescription     | 桌面端更新描述                                 |
| versionType       | 移动端版本, 取值: merge apk ios                |
| mobileName        | 移动端应用名称                                 |
| mobileDownloadUrl | 移动端下载地址                                 |
| mobileVersion     | 移动端版本                                     |
| APKDownloadUrl    | 安卓端下载地址, 只在 versionType 为 apk 时可用 |
| apkVersion        | 安卓端版本, 只在 versionType 为 apk 时可用     |
| IOSDownloadUrl    | 苹果端下载地址, 只在 versionType 为 ios 时可用 |
| iosVersion        | 苹果端版本, 只在 versionType 为 ios 时可用     |
| mobileDescription | 移动端更新描述                                 |



## 额外需求

应该同时提上传 api 以便处理 应用图片 url，安卓 apk 上传 等功能。

