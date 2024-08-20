import { cloneElement, useEffect, useRef, useState } from 'react';
import * as css from './Tooltip.css';

type TooltipProps = {
  children: JSX.Element;
  content: string;
};

export function Tooltip({ children, content }: TooltipProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const clonedChild = cloneElement(children, {
    ref,
  });

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const handleMouseEnter = () => {
      setOpen(true);
    };

    const handleMouseLeave = () => {
      setOpen(false);
    };

    ref.current.addEventListener('mouseenter', handleMouseEnter);
    ref.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ref.current?.removeEventListener('mouseenter', handleMouseEnter);
      ref.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {clonedChild}
      <dialog role="tooltip" className={css.dialog} open={open}>
        {content}
      </dialog>
    </>
  );
}
