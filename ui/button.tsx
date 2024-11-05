'use client';

type TButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  label: string | JSX.Element;
  className?: string;
};
export default function Button(props: TButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`px-10 py-3 h-12 font-helvetica rounded-3xl relative ${props.disabled ? 'bg-[#EFEFEF] text-[#ACACAC]' : 'border border-gray'} ${props.className || ''}`}
    >
      {props.label}
    </button>
  );
}
