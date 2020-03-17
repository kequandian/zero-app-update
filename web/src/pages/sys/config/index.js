module.exports = {
  layout: 'EmptyTitle',
  title: '版本管理',
  items: [
    {
      layout: 'Content',
      component: 'BaseForm',
      config: {
        layout: 'Grid',
        layoutConfig: {
          value: [12, 12],
        },
        API: {
          // getAPI: '/api/versionCheck/version',
          // updateAPI: '/api/versionCheck/version',
          getAPI: '/api/v/api/versionCheck/version',
          updateAPI: '/api/v/api/versionCheck/version',
        },
        fields: [
          {
            field: 'iconUrl', label: '应用封面', type: 'upload-image',
            options: {
              API: '/api/v/api/versionCheck/upload',
              max: 1,
            },
            span: 24,
          },
          {
            field: 'group_1', type: 'group', value: '桌面端',
            span: 24,
          },
          {
            field: 'pcName', label: '桌面端应用名称', type: 'input',
            // rules: ['required']
          },
          {
            field: 'pcDownloadUrl', label: '桌面端下载', type: 'upload-file',
            options: {
              API: '/api/v/api/versionCheck/upload',
              max: 1,
            },
            span: 16,
          },
          {
            field: 'pcVersion', label: '桌面端版本', type: 'input',
          },
          {
            field: 'pcDescription', label: '桌面端更新描述', type: 'text-area',
            span: 16,
          },

          {
            field: 'group_2', type: 'group', value: '移动端',
            span: 24,
          },
          {
            field: 'versionType', label: '更新移动端目标', type: 'radio',
            value: 'merge',
            options: [
              { label: '全部', value: 'merge' },
              { label: '安卓', value: 'apk' },
              { label: '苹果', value: 'ios' },
            ],
            span: 16,
          },

          {
            field: 'mobileName', label: '移动端应用名称', type: 'input',
          },
          {
            field: 'mobileDownloadUrl', label: '移动端下载', type: 'upload-file',
            options: {
              API: '/api/v/api/versionCheck/upload',
              max: 1,
            },
            expect: {
              expectedField: 'versionType',
              expectedValue: 'merge',
            },
            span: 16,
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
              API: '/api/v/api/versionCheck/upload',
              max: 1,
            },
            expect: {
              expectedField: 'versionType',
              expectedValue: 'apk',
            },
            span: 16,
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
              API: '/api/v/api/versionCheck/upload',
              max: 1,
            },
            expect: {
              expectedField: 'versionType',
              expectedValue: 'ios',
            },
            span: 16,
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
            span: 16,
          },
        ]
      }
    }
  ]
}