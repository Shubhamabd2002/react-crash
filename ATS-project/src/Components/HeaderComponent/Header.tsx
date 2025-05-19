import { useState, useRef } from "react";
import type { headerMenurItem } from "../../Types/HeaderTypes";

type headerProp = {
  headerData: headerMenurItem[];
};

const Header = ({ headerData }: headerProp) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeItem, setActiveItem] = useState<headerMenurItem | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement>,
    item: headerMenurItem
  ) => {
    if (!item.options?.length) return;

    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    setPosition({ x: rect.left, y: rect.bottom + window.scrollY });
    setActiveItem(item);
    setIsPopoverVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMouseLeaveWithDelay = (e: React.MouseEvent) => {
    timeoutRef.current = setTimeout(() => {
      const related = e.relatedTarget as HTMLElement;
      if (!related || !related.closest("#popover")) {
        setIsPopoverVisible(false);
        setActiveItem(null);
      }
    }, 200);
  };

  const handlePopoverLeave = () => {
    setIsPopoverVisible(false);
    setActiveItem(null);
  };

  return (
    <div className="relative flex divide-x-2">
      {headerData.map((item) => (
        <div
          key={item.type}
          className="relative px-3 font-bold cursor-pointer"
          onMouseEnter={(e) => handleMouseEnter(e, item)}
          onMouseLeave={(e) => handleMouseLeaveWithDelay(e)}
        >
          {item.label}
        </div>
      ))}

      {isPopoverVisible && activeItem && (
        <div
          id="popover"
          className="absolute z-1 p-3 bg-gray-500 text-white rounded shadow-md"
          style={{ top: position.y, left: position.x }}
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsPopoverVisible(true);
          }}
          onMouseLeave={handlePopoverLeave}
        >
          {activeItem.options?.map((option, idx) => (
            <div
              key={idx}
              className="cursor-pointer hover:bg-white p-1 rounded"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
