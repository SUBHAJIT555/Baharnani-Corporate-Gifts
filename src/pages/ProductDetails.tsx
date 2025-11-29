import { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useProductBySlug } from "../hooks/useProducts";
import { useQuote } from "../contexts/QuoteContext";
import { HiMinus, HiPlus } from "react-icons/hi";
import { ArrowLeft } from "lucide-react";
import Loading from "../components/ui/Loading";
import { cn } from "../lib/utilts";

const ProductDetails = () => {
    const { category, slug } = useParams<{ category: string; slug: string }>();
    const navigate = useNavigate();
    const { data: product, isLoading, error } = useProductBySlug(slug || "");
    const { addToQuote, isInQuote } = useQuote();
    const [quantity, setQuantity] = useState(1);

    // Prepare images for react-image-gallery
    const galleryImages = useMemo(() => {
        if (!product) return [];

        const images = [product.main_image, ...product.gallery].map((url, index) => ({
            original: url,
            thumbnail: url,
            originalAlt: `${product.name} - Image ${index + 1}`,
            thumbnailAlt: `${product.name} - Thumbnail ${index + 1}`,
        }));

        return images;
    }, [product]);

    const handleAddToQuote = () => {
        if (!product) return;

        const productForQuote = {
            id: product.id,
            name: product.name,
            image: product.main_image,
            slug: product.slug,
            permalink: product.permalink,
            short_desc: product.short_desc,
            categories: product.categories,
        };

        addToQuote(productForQuote, quantity);
    };

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-bg pt-24">
                <Loading size="lg" message="Loading product details..." />
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-bg pt-24">
                <div className="text-center">
                    <h2 className="text-2xl font-tanker text-textcolor mb-4">
                        Product Not Found
                    </h2>
                    <p className="text-textcolor mb-6">{error?.message || "Product not found"}</p>
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 bg-textcolor hover:bg-textcolor/70 text-white font-tanker font-medium py-3 px-6 rounded-md transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg">
            {/* Hero Section */}
            <section className="relative w-full bg-gradient-to-r from-textcolor via-textcolor/90 to-textcolor/80 overflow-hidden pt-24 sm:pt-28 md:pt-32">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>
                <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-10 md:py-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-switzer font-bold text-white leading-tight">
                        {product.name}
                    </h1>
                    <div className="w-16 sm:w-20 h-1 bg-white/80 rounded-md mt-3 sm:mt-4" />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumbs */}
                <nav className="mb-6">
                    <div className="flex items-center gap-2 text-sm font-switzer text-textcolor/70">
                        <Link to="/" className="hover:text-textcolor transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <Link to="/shop" className="hover:text-textcolor transition-colors">
                            Shop
                        </Link>
                        {category && (
                            <>
                                <span>/</span>
                                <Link
                                    to={`/product-category/${category}`}
                                    className="hover:text-textcolor transition-colors capitalize"
                                >
                                    {category.replace(/-/g, " ")}
                                </Link>
                            </>
                        )}
                        <span>/</span>
                        <span className="text-textcolor">{product.name}</span>
                    </div>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Product Images */}
                    <div className="w-full">
                        <style>{`
              
            `}</style>
                        <div className="custom-image-gallery">
                            <ImageGallery
                                items={galleryImages}
                                showPlayButton={false}
                                showFullscreenButton={true}
                                showBullets={false}
                                showThumbnails={galleryImages.length > 1}
                                thumbnailPosition="bottom"
                                slideInterval={0}
                                slideDuration={450}
                                lazyLoad={true}
                                useBrowserFullscreen={false}   // <- we'll keep it in-page, not real browser fullscreen
                            />
                        </div>

                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        <div>
                            {/* Categories */}
                            {product.categories.length > 0 && (
                                <div className="mb-6">
                                    <span className="text-sm font-switzer text-textcolor/70">
                                        Category:{" "}
                                    </span>
                                    <span className="text-sm font-switzer text-textcolor">
                                        {product.categories.join(", ")}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        {product.description && (
                            <div className="prose max-w-none">
                                <h3 className="text-xl font-tanker text-textcolor mb-3">
                                    Description
                                </h3>
                                <div
                                    className="text-base font-switzer text-textcolor/80 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            </div>
                        )}

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-4">
                            <label className="text-base font-tanker text-textcolor">
                                Quantity:
                            </label>
                            <div className="flex items-center rounded-md bg-white overflow-hidden border border-gray-300">
                                <button
                                    onClick={() => handleQuantityChange(quantity - 1)}
                                    disabled={quantity <= 1}
                                    className={cn(
                                        "w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors",
                                        quantity <= 1 && "opacity-50 cursor-not-allowed"
                                    )}
                                >
                                    <HiMinus className="w-4 h-4 text-textcolor" />
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                                    min={1}
                                    className="w-16 px-2 py-2 text-center font-switzer text-textcolor border-x border-gray-300 no-spinner outline-none focus:outline-none focus:ring-0"
                                />
                                <button
                                    onClick={() => handleQuantityChange(quantity + 1)}
                                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                                >
                                    <HiPlus className="w-4 h-4 text-textcolor" />
                                </button>
                            </div>
                        </div>

                        {/* Add to Quote Button */}
                        <button
                            onClick={handleAddToQuote}
                            disabled={isInQuote(product.id)}
                            className={cn(
                                "w-full font-tanker font-medium py-4 px-6 rounded-md transition-colors duration-200 text-lg",
                                isInQuote(product.id)
                                    ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                                    : "bg-textcolor hover:bg-textcolor/70 text-white"
                            )}
                        >
                            {isInQuote(product.id) ? "Added to Quote" : "Add to Quote"}
                        </button>

                        {/* Back Button */}
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 text-textcolor hover:text-textcolor/70 font-switzer transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Products
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;

