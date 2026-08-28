import Image from "next/image";
import {
  BRANDS,
  BRANDS_HEADING,
  BRAND_LOGO_HEIGHT,
  BRAND_LOGO_WIDTH,
} from "@/data/brands";

export default function TrustedBrands() {
  return (
    <section className="brands" aria-label={BRANDS_HEADING}>
      <div className="wrap">
        <h2 className="brands-heading">{BRANDS_HEADING}</h2>
        <ul className="brands-grid">
          {BRANDS.map((brand) => (
            <li className="brand" key={brand.name}>
              <Image
                className="brand-logo"
                src={brand.logo}
                alt={brand.name}
                width={BRAND_LOGO_WIDTH}
                height={BRAND_LOGO_HEIGHT}
                style={brand.scale ? { "--brand-scale": brand.scale } : undefined}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
