module.exports = {
  layout: 'Content',
  title: '版本管理',
  items: [
    {
      layout: 'Empty',
      component: 'BaseList',
      config: {
        API: {
          listAPI: '/api/versionCheck/version/list',
          deleteAPI: '/api/versionCheck/version/(id)'
        },
        actions: [
          {
            title: '添加渠道', type: 'path',
            options: {
              path: '/sys/version-add',
            }
          }
        ],
        fields: [
          { label: '渠道名', field: 'name', },
          { label: '渠道编码', field: 'id', },
          { label: '渠道版本', field: 'version', },
        ],
        operation: [
          {
            title: '编辑', action: 'path',
            options: {
              outside: true,
              path: '/sys/version-edit',
            },
          },
          { title: '删除', action: 'delete' }
        ]
      },
    }
  ]
}