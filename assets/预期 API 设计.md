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



| 字段           | 描述                                           |
| -------------- | ---------------------------------------------- |
| iconUrl        | 应用封面                                       |
| pcName         | 桌面端应用名称                                 |
| pcDownloadUrl  | 桌面端下载地址                                 |
| pcVersion      | 桌面端版本                                     |
| versionType    | 移动端版本, 取值: merge part                   |
| mobileName     | 移动端应用名称                                 |
| APKDownloadUrl | 安卓端下载地址                                 |
| IOSDownloadUrl | 苹果端下载地址                                 |
| mobileVersion  | 移动端版本, 只在 versionType 为 merge 时才有效 |
| apkVersion     | 安卓端版本, 只在 versionType 为 part 时才有效  |
| iosVersion     | 苹果端版本, 只在 versionType 为 part 时才有效  |
| description    | 更新描述                                       |



## 额外需求

应该同时提供标准的上传 api:  `/api/upload/files`, 以便处理 应用图片 url，安卓 apk 上传 等功能。

