module.exports = {
  layout: 'EmptyTitle',
  title: '版本管理',
  items: [
    {
      layout: 'Content',
      component: 'BaseForm',
      config: {
        API: {
          getAPI: '/api/versionCheck/version',
          updateAPI: '/api/versionCheck/version',
        },
        fields: [
          {
            field: 'iconUrl', label: '应用封面', type: 'upload-image',
            options: {
              max: 1,
            }
          },
          { field: 'group_1', type: 'group', value: '桌面端' },
          {
            field: 'pcName', label: '桌面端应用名称', type: 'input',
            // rules: ['required']
          },
          {
            field: 'pcDownloadUrl', label: '桌面端下载地址', type: 'input',
          },
          {
            field: 'pcVersion', label: '桌面端版本', type: 'input',
          },
          {
            field: 'pcDescription', label: '桌面端更新描述', type: 'text-area',
          },

          { field: 'group_2', type: 'group', value: '移动端' },
          {
            field: 'versionType', label: '更新移动端目标', type: 'radio',
            value: 'merge',
            options: [
              { label: '全部', value: 'merge' },
              { label: '安卓', value: 'apk' },
              { label: '苹果', value: 'ios' },
            ],
          },

          {
            field: 'mobileName', label: '移动端应用名称', type: 'input',
          },
          {
            field: 'mobileDownloadUrl', label: '移动端下载地址', type: 'input',
            expect: {
              expectedField: 'versionType',
              expectedValue: 'merge',
            }
          },
          {
            field: 'mobileVersion', label: '移动端版本', type: 'input',
            expect: {
              expectedField: 'versionType',
              expectedValue: 'merge',
            }
          },

          {
            field: 'APKDownloadUrl', label: '安卓端下载地址', type: 'input',
            expect: {
              expectedField: 'versionType',
              expectedValue: 'apk',
            }
          },
          {
            field: 'apkVersion', label: '安卓端版本', type: 'input',
            expect: {
              expectedField: 'versionType',
              expectedValue: 'apk',
            }
          },
          {
            field: 'IOSDownloadUrl', label: '苹果端下载地址', type: 'input',
            expect: {
              expectedField: 'versionType',
              expectedValue: 'ios',
            }
          },
          {
            field: 'iosVersion', label: '苹果端版本', type: 'input',
            expect: {
              expectedField: 'versionType',
              expectedValue: 'ios',
            }
          },

          {
            field: 'mobileDescription', label: '更新描述', type: 'text-area',
          },
        ]
      }
    }
  ]
}