interface UnderlineProps {
  className?: string;
}

export function Underline({ className }: UnderlineProps) {
  return (
    <svg 
      width="286" 
      height="10" 
      viewBox="0 0 286 10" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M2 8C4.21611 6.41621 229.705 -4.67028 284 8" 
        stroke="#5476FE" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
} 