interface MenuButtonProps {
    onClick: () => boolean | void, 
    isActive?: boolean,
    icon: any,
    title: string,
    shortcut?: string
};

/**
 * Editor toolbar menu button component
 */
export const MenuButton = ({ 
    onClick, 
    isActive = false, 
    icon: Icon,
    title,
    shortcut 
  }: MenuButtonProps) => (
    <div className="relative group">
      <button
        onClick={() => onClick()}
        className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800
          ${isActive ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
        type="button"
      >
        <Icon className="w-5 h-5" />
      </button>
      
      {/* Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 
        text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 
        transition-opacity whitespace-nowrap pointer-events-none">
        {title} {shortcut && <span className="text-gray-400">({shortcut})</span>}
      </div>
    </div>
);