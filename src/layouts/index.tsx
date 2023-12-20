import { Link, Outlet } from 'umi';
import styles from './index.less';
import '../css/app.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <Outlet />
    </div>
  );
}
