import { COST_PLUS_FORMULA } from "@/data/costPlus";

export default function CostPlusFormula() {
  return (
    <section className="formula" id="cost-plus-formula">
      <div className="wrap">
        <div className="formula-shell">
          <div className="formula-copy">
            <span className="expertise-pill">{COST_PLUS_FORMULA.eyebrow}</span>
            <h2 className="formula-heading">{COST_PLUS_FORMULA.heading}</h2>
            <p className="formula-body">{COST_PLUS_FORMULA.body}</p>
          </div>

          <dl className="formula-tiles">
            {COST_PLUS_FORMULA.tiles.map((tile) => (
              <div className="formula-tile" key={tile.label}>
                <dt>{tile.value}</dt>
                <dd>{tile.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
