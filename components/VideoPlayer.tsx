interface VideoPlayerProps {
    className?: string;
    src: string;
    poster: string;
}
const VideoPlayer = ({ className, src, poster }: VideoPlayerProps) => (
    <video
        src={src}
        playsInline={true}
        preload="auto"
        autoPlay={true}
        loop={true}
        muted={true}
        poster={poster}
        className={className}
    ></video>
);

export default VideoPlayer;
