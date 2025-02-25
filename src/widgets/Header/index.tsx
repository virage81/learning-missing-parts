import Button from '@/widgets/Button';
import Image from 'next/image';

const Header = () => {
	return (
		<header className='sticky top-0 left-0 right-0 bg-black-800 p-5 flex items-center justify-between gap-2'>
			<div className='flex items-center gap-3'>
				<Image src={'/raven.svg'} alt={'Raven'} width={50} height={50} />
				<a href='#' className='Capitalize text-3xl font-medium text-amber-600'>
					Raven
				</a>
			</div>
			<div className='flex items-center gap-5'>
				<Button>Log In</Button>
				<Button variant='secondary'>Sign Up</Button>
			</div>
		</header>
	);
};

export default Header;
