module.exports = {
  layout: 'EmptyTitle',
  title: '添加渠道',
  items: [
    {
      layout: 'Content',
      component: 'BaseForm',
      config: {
        layout: 'Grid',
        layoutConfig: {
          value: [24],
        },
        API: {
          createAPI: '/api/versionCheck/version',
        },
        fields: [
          {
            field: 'name', label: '渠道名', type: 'input',
            rules: ['required'],
          },
          {
            field: 'code', label: '渠道编码', type: 'input',
            rules: ['required'],
          },

          {
            field: 'iconUrl', label: '应用封面', type: 'upload-image',
            options: {
              API: '/api/versionCheck/upload',
              max: 1,
            },
          },
          {
            field: 'group_1', type: 'group', value: '桌面端',
          },
          {
            field: 'pcName', label: '桌面端应用名称', type: 'input',
            // rules: ['required']
          },
          {
            field: 'pcDownloadUrl', label: '桌面端下载', type: 'upload-file',
            options: {
              API: '/api/versionCheck/upload',
              max: 1,
            },
          },
          {
            field: 'pcVersion', label: '桌面端版本', type: 'input',
          },
          {
            field: 'pcDescription', label: '桌面端更新描述', type: 'text-area',
          },

          {
            field: 'group_2', type: 'group', value: '移动端',
          },
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
            field: 'mobileDownloadUrl', label: '移动端下载', type: 'upload-file',
            options: {
              API: '/api/versionCheck/upload',
              max: 1,
            },
            expect: {
              expectedField: 'versionType',
              expectedValue: 'merge',
            },
          },
          {
            field: 'mobileVersion', label: '移动端版本', type: 'input',
            expect: {
              expectedField: 'versionType',
              expectedValue: 'merge',
            }
          },

          {
            field: 'APKDownloadUrl', label: '安卓端下载', type: 'upload-file',
            options: {
              API: '/api/versionCheck/upload',
              max: 1,
            },
            expect: {
              expectedField: 'versionType',
              expectedValue: 'apk',
            },
          },
          {
            field: 'apkVersion', label: '安卓端版本', type: 'input',
            expect: {
              expectedField: 'versionType',
              expectedValue: 'apk',
            }
          },
          {
            field: 'IOSDownloadUrl', label: '苹果端下载', type: 'upload-file',
            options: {
              API: '/api/versionCheck/upload',
              max: 1,
            },
            expect: {
              expectedField: 'versionType',
              expectedValue: 'ios',
            },
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