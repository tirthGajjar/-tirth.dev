import clsx from "clsx";
import Link from "next/link";

export interface size {
  [key: string]: {
    height: number;
    width: number;
  };
}

const sqaureSizes: size = {
  default: {
    height: 32,
    width: 32,
  },
  small: {
    height: 24,
    width: 24,
  },
  xs: {
    height: 16,
    width: 16,
  },
  large: {
    height: 48,
    width: 48,
  },
};

type Size = "default" | "small" | "xs" | "large";

interface IProps {
  label?: string;
  size?: Size;
  withText?: boolean;
  loading?: boolean;
}

const Logo = ({ size = "default", loading = false }: IProps) => {
  const logoSize = sqaureSizes[size];
  return (
    <Link href="/">
      <svg
        {...logoSize}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className={clsx({
          "animate-spin": loading,
          "cursor-pointer": !loading,
        })}
      >
        <path
          d="M6.84802 5.94399l-3.00773-.34292C1.35701 8.49586-.0055859 12.1853.0000215 15.9993c-.0035918 2.185.4422425 4.3474 1.3097985 6.3528.86755 2.0055 2.13828 3.811 3.73322 5.3045l.35144-3.0794 3.10667-.3804c-1.14064-1.0389-2.05136-2.3049-2.67365-3.7166-.62229-1.4118-.94238-2.9381-.93971-4.4809-.00486-2.4791.82371-4.8879 2.35261-6.83945l-.39238-3.21586z"
          fill="#343F4A"
        />
        <path
          d="M26.9242 4.31299l-.3515 3.08108-3.1049.38045c1.1495 1.03954 2.0678 2.30908 2.6953 3.72618.6274 1.4172.9501 2.9504.947 4.5003.0045 2.4927-.8336 4.9137-2.3782 6.8701l.3873 3.1579 3.0589.3497c2.4719-2.8921 3.8275-6.5732 3.8215-10.3777.0034-2.1015-.4089-4.183-1.2132-6.1245-.8043-1.94151-1.9847-3.70475-3.4732-5.18819-.1272-.12771-.2568-.25285-.389-.37532z"
          fill="#F2C94C"
        />
        <path
          d="M24.198 23.4973c-1.0391 1.1409-2.3053 2.0517-3.7174 2.674-1.4121.6223-2.9387.9423-4.4818.9394-2.4935.0044-4.9152-.8343-6.87187-2.3799l-3.18686.3907-.34632 3.0333c2.89583 2.4866 6.58805 3.8512 10.40505 3.8454 2.1015.0034 4.183-.4089 6.1245-1.2132 1.9415-.8043 3.7047-1.9847 5.1882-3.4733.1262-.1262.249-.2525.3702-.3822l-3.1067-.3548-.377-3.0794z"
          fill="#2F80ED"
        />
        <path
          d="M22.0182 1.17206C20.1067.395391 18.0626-.002658 15.9993.000022 13.8131-.0036166 11.6494.44268 9.64309 1.31114c-2.00637.86847-3.81255 2.14052-5.30618 3.73702l3.05379.34802.38386 3.13398c1.12082-1.2312 2.50214-2.19694 4.04324-2.82689 1.3282-.53895 2.7482-.8153 4.1815-.81378 2.4785-.00448 4.8867.82407 6.8378 2.35262l3.1885-.39069.3464-3.03331c-1.2994-1.11069-2.7696-2.00421-4.3538-2.64605z"
          fill="#27AE60"
        />
      </svg>
    </Link>
  );
};

export default Logo;
