interface VideoPlayerProps {
    className?: string;
    src: string;
}
const VideoPlayer = ({ className, src }: VideoPlayerProps) => (
    <video
        src={src}
        playsInline={true}
        preload="auto"
        autoPlay={true}
        loop={true}
        muted={true}
        className={className}
    ></video>
);

export default VideoPlayer;
