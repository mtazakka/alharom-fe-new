// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

const icons = {
  riseOutlined: RiseOutlined,
  fallOutlined: FallOutlined
};
// ==============================|| MENU ITEMS - COMPONENTS ||============================== //

const transaction = {
  id: 'group-transaction',
  title: 'Transaksi',
  type: 'group',
  children: [
    {
      id: 'transaksi-masuk',
      title: 'Transaksi Masuk',
      type: 'collapse',
      icon: icons.riseOutlined,
      children: [
        {
          id: 'transaksi-masuk-baru',
          title: 'Transaksi Baru',
          type: 'item',
          url: '/transaction/income/new'
        },
        {
          id: 'transaksi-masuk-daftar',
          title: 'Daftar Transaksi',
          type: 'item',
          url: '/transaction/income/list'
        }
      ]
    },
    {
      id: 'transaksi-keluar',
      title: 'Transaksi keluar',
      type: 'collapse',
      icon: icons.fallOutlined,
      children: [
        {
          id: 'transaksi-keluar-baru',
          title: 'Transaksi Baru',
          type: 'item',
          url: '/transaction/outcome/new',
          breadcrumbs: false
        },
        {
          id: 'transaksi-keluar-daftar',
          title: 'Daftar Transaksi',
          type: 'item',
          url: '/transaction/outcome/list',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default transaction;
