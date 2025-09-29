import { createPortal } from 'react-dom';

// this is for the making a resposive site, this only for the mobile device with custom ui.
// but as of now this is not a major part which is also not necessery.
interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  links?: {
    name: string;
    path: string;
  }[];
}

export default function MobileDrawer({ open, onClose, links }: MobileDrawerProps) {
  if (!open) return null;
  
  return createPortal(
    <div className="fixed inset-0 z-40 flex">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <aside className="relative w-64 bg-white dark:bg-gray-800 p-4 transition-transform transform translate-x-0">
        {links?.map((link) => (
          <a 
            key={link.path} 
            href={link.path}
            className="block py-2 text-gray-700 dark:text-gray-200 hover:text-[#3498db]"
            onClick={onClose}
          >
            {link.name}
          </a>
        ))}
      </aside>
    </div>,
    document.body
  );
}