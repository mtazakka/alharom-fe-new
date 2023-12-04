// assets
import { DashboardOutlined } from '@ant-design/icons';

const icons = {
  dashboard: DashboardOutlined
};
// ==============================|| MENU ITEMS - COMPONENTS ||============================== //

const dashboards = {
  id: 'group-dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'collapse',
      icon: icons.dashboard,
      children: [
        {
          id: 'default',
          title: 'Default',
          type: 'item',
          url: '/dashboard/default',
          breadcrumbs: false
        },
        {
          id: 'analytics',
          title: 'Analytics',
          type: 'item',
          url: '/dashboard/analytics',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default dashboards;
