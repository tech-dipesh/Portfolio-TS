import { createPortal } from 'react-dom';

export default function MobileDrawer({ open, onClose }) {
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-40 flex">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <aside className="relative w-64 bg-white dark:bg-gray-800 p-4 transition-transform transform translate-x-0">
        {/* nav links */}
      </aside>
    </div>,
    document.body
  );
}