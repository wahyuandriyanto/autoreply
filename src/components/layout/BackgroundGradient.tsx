export function BackgroundGradient() {
  return (
    <div
      className="absolute left-0 top-0 h-full w-full opacity-20"
      style={{
        backgroundImage: 'linear-gradient(rgb(62, 125, 255) 0%, rgba(62, 125, 255, 0) 100%)',
      }}
    />
  );
}
