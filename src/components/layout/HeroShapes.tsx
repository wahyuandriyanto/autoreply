import Image from 'next/image';

type ShapeProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const Shape = ({ src, alt, width, height, className = '' }: ShapeProps) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    loading="lazy"
    decoding="async"
  />
);

export function HeroShapes() {
  return (
    <>
      <Shape
        src="/images/hero-shape-1.svg"
        alt="Hero shape 1"
        width={411}
        height={276}
        className="absolute left-0 top-0 z-10"
      />
      <Shape
        src="/images/hero-shape-2.svg"
        alt="Hero shape 2"
        width={820}
        height={692}
        className="absolute right-0 top-0 z-10"
      />
    </>
  );
}
