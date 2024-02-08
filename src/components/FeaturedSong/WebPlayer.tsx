function WebPlayer({ url }: { url: string }) {
  return (
    <iframe
      src={url}
      width="50%"
      height="152"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}

export default WebPlayer;
