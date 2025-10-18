const Youtube = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center min-h-[700px]">
      <iframe
        width="760"
        height="500"
        src="https://www.youtube-nocookie.com/embed/dAv2vatCcVE?rel=0&modestbranding=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        // Sandbox attribute helps isolate the iframe and reduces tracking
        sandbox="allow-scripts allow-same-origin allow-presentation"
        // Add referrer policy to limit information sent to YouTube
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Youtube;
