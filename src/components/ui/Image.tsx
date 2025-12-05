
const Image = ({ image, alt, className }: { image: string, alt: string, className: string }) => {
    return (
        <img
            loading="lazy"
            src={image}
            alt={alt}
            className={className}
        />
    )
}

export default Image