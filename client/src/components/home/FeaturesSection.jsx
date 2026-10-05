import { homeFeatures } from "@/data/home";

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Why choose us</span>
          <h2>Care that goes beyond the repair.</h2>
        </div>
        <div className="feature-grid">
          {homeFeatures.map((feature) => (
            <article className="feature-card" key={feature.icon}>
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
