import { COST_PLUS_VS } from "@/data/costPlus";

export default function CostPlusVs() {
  return (
    <section className="cpvs" id="cost-plus-vs">
      <div className="wrap">
        <span className="expertise-pill">{COST_PLUS_VS.eyebrow}</span>
        <h2 className="cpvs-heading">{COST_PLUS_VS.heading}</h2>
        <p className="cpvs-lede">{COST_PLUS_VS.body}</p>

        {/* Wide table — scrolls inside its own container rather than pushing
            the page sideways on narrow screens. */}
        <div className="cpvs-scroll">
          <table className="cpvs-table">
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Comparison point</span>
                </th>
                {COST_PLUS_VS.columns.map((col) => (
                  <th
                    scope="col"
                    key={col.id}
                    className={col.featured ? "is-featured" : undefined}
                  >
                    <b>{col.title}</b>
                    <small>{col.note}</small>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COST_PLUS_VS.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td className="is-featured">{row.costPlus}</td>
                  <td>{row.lumpSum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
