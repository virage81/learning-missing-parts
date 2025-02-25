import { forwardRef, PropsWithChildren } from 'react';
import { ButtonSize, ButtonVariant } from '@/shared/types/button';
import cn from 'classnames';
import Spinner from '@/shared/ui/Spinner';

type ButtonProps = {
	onClick?: () => void;
	loading?: boolean;
	variant?: ButtonVariant;
	size?: ButtonSize;
	className?: string;
	disabled?: boolean;
} & PropsWithChildren;

type VariantMapper = {
	[key in ButtonVariant]: string;
};

type SizeMapper = {
	[key in ButtonSize]: string;
};

const variantMapper: VariantMapper = {
	primary: 'bg-black-800 border-white/15 hover:bg-white hover:text-black',
	secondary: 'bg-black-800 text-white/85 border-transparent hover:text-white hover:border-white',
	success: 'bg-green-600 border-green-600 hover:bg-green-800 hover:border-green-800',
	danger: 'bg-red-600 border-red-600 hover:bg-red-800 hover:border-red-800',
	warning: 'bg-amber-600 border-amber-600 hover:bg-amber-800 hover:border-amber-800',
};

const sizeMapper: SizeMapper = {
	xs: 'px-3 py-1 text-xs leading-none min-h-[1.375em]',
	sm: 'px-3 py-1 text-sm leading-none min-h-[1.5em]',
	md: 'px-5 py-1.5 text-base leading-none min-h-[1.625em]',
	lg: 'px-5 py-2 text-lg leading-none min-h-[1.75em]',
	xl: 'px-7 py-2 text-xl leading-none min-h-[2.375em]',
};

const spinnerSizeMapper: SizeMapper = {
	xs: '!size-2',
	sm: '!size-3',
	md: '!size-4',
	lg: '!size-5',
	xl: '!size-6',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { children, onClick, loading = false, size = 'md', variant = 'primary', disabled, className = '' } = props;

	return (
		<button
			ref={ref}
			onClick={onClick}
			disabled={loading ? true : disabled}
			className={cn(
				'capitalize text-white',
				'cursor-pointer border rounded-full',
				'transition-all duration-200',
				variantMapper[variant],
				sizeMapper[size],
				{ 'pointer-events-none': loading || disabled },
				className,
			)}
		>
			<div className='flex gap-2 items-center'>
				{loading ? <Spinner className={cn(spinnerSizeMapper[size])} /> : null}
				{children}
			</div>
		</button>
	);
});

Button.displayName = 'CustomButton';

export default Button;
