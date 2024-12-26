import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Đăng ký', href: '/auth/signup' },
    !currentUser && { label: 'Đăng nhập', href: '/auth/signin' },
    currentUser && { label: 'Bán vé', href: '/tickets/new' },
    currentUser && { label: 'Xem đơn hàng', href: '/orders' },
    currentUser && { label: 'Đăng xuất', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link className="nav-link" href={href}>
            {label}
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        Demo - Nhóm 13
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};
