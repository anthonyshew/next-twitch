export const Video = () => {
  return (
    <div className="relative">
      <img
        alt="Live stream content"
        className="w-full h-[60vh]"
        src="https://generated.vusercontent.net/placeholder.svg"
        style={{
          filter: "invert(90%)",
          objectFit: "cover",
        }}
        width="1280"
      />
    </div>
  );
};
