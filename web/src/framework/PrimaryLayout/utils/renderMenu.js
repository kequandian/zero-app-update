import React from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';

const { SubMenu } = Menu;

/**
 * 渲染导航菜单数据
 *
 * @export
 * @param {Array} menuData
 * @param {boolean} divider 是否要把没有 path 的子项渲染成 分割线
 * @returns React.element
 */
export default function renderMenu(menuData, divider) {
  const stack = [menuData];
  const rst = [];
  while (stack.length) {
    const menu = stack.shift();

    if (!menu) {
      break;
    };
    if (menu.invisible) {
      continue;
    }

    if (Array.isArray(menu)) {
      stack.push(...menu);
    } else {
      const { icon, name, path, items } = menu;

      if (Array.isArray(items)) {
        rst.push(<SubMenu key={path} title={
          <>
            <Icon type={icon} />
            {name}
          </>
        }>
          {renderMenu(items)}
        </SubMenu>);
      } else {
        if (path) {
          rst.push(<Menu.Item key={path}>
            <Link to={path}>
              <div>
                <Icon type={icon} />
                <span>{name}</span>
              </div>
            </Link>
          </Menu.Item>);
        } else {
          divider && rst.push(<Menu.Divider key={menu.key || name} />);
        }
      }
    }
  }

  return rst;
}