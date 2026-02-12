import React from "react";

export default class Board extends React.Component {
    state = {
        openAccordion: null
    };

    componentDidMount() {
    window.addEventListener("openAccordion", this.handleOpenAccordion);
    }

    componentWillUnmount() {
    window.removeEventListener("openAccordion", this.handleOpenAccordion);
    }

    handleOpenAccordion = (e) => {
    const index = e.detail;
    this.setState({ openAccordion: index });
    };


    toggleAccordion = (index) => {
        this.setState((prev) => ({
            openAccordion: prev.openAccordion === index ? null : index
        }));
    };

    render() {
        const { openAccordion } = this.state;
        return (
          <React.Fragment>

  <div className="u-text-center pt-8 bg-black text-gray-300 u-opacity-60" id="board">
    <div className="board-cont" id="board-content">
        <h6 className="board-title">The Tasting Board</h6>

        <div className="row u-justify-center u-gap-6">
            <div className="col-4">
                <div className="p-4 board-highlight">
                    <h6>Board & Menu Offerings</h6>
                    <p>
                     Our private chef services offer a curated selection of seasonal dishes crafted with locally sourced ingredients and refined techniques. From intimate dinners to celebratory gatherings, each menu is thoughtfully designed to balance flavor, presentation, and experience. Our charcuterie boards feature an artful assortment of artisan cheeses, cured meats, house-made accompaniments, and fresh elements that complement every palate. Whether served as a centerpiece or a shared tasting experience, each offering reflects a commitment to quality, creativity, and elevated hospitality.
                    </p>
                </div> 
                <dl>
                    <dt>The Tasting Experience</dt>
                    <dd>
                       A guided selection of flavors designed to be savored slowly, highlighting balance, texture, and thoughtful pairings.
                       Each tasting invites engaging conversation, careful exploration of each bite, and a deeper appreciation for the artistry behind every ingredient.
                    </dd>
                </dl>
            </div>

            <div className="col-4">
                <div className="p-4 board-highlight">
                    <h6>Curated Menu</h6>
                    <details className="accordion p-3" open={openAccordion === 0}
                        onClick={(e) => {
                        e.preventDefault();
                        this.toggleAccordion(0);
                        }}>
                        <summary className="accordion__summary">Beverages</summary>
                        <p>Our beverage offerings are thoughtfully selected to complement each tasting board and course.
                        Choose from curated wine pairings, craft cocktails, and non-alcoholic options designed to enhance
                        flavor without overpowering it. Seasonal selections may include bold reds, crisp whites, sparkling
                        finishes, and house-infused mocktails, all chosen to balance richness, acidity, and texture.
                        Pairings can be customized to suit the occasion, preferences, or dietary needs of your guests.</p>
                    </details>
                    <details className="accordion" open={openAccordion === 1}
                        onClick={(e) => {
                            e.preventDefault();
                            this.toggleAccordion(1);
                        }}>
                        <summary className="accordion__summary">Apps & Entrees</summary>
                        <ul>
                          <li>Seasonal small plates highlighting fresh, locally sourced ingredients</li>
                          <li>Chef-driven appetizers designed for sharing and layered flavor</li>
                          <li>Refined entrées prepared with classic techniques and modern presentation</li>
                          <li>Optional tasting portions that transition seamlessly from board to main course</li>
                        </ul>
                    </details>
                    <details className="accordion" open={openAccordion === 2}
                        onClick={(e) => {
                            e.preventDefault();
                            this.toggleAccordion(2);
                        }}>
                        <summary className="accordion__summary">Desserts</summary>
                        <p>Desserts are crafted as a balanced conclusion to the tasting experience, focusing on restrained
                        sweetness and refined textures. Offerings may include plated desserts, shared finishes, or
                        small indulgences designed to cleanse the palate while providing a memorable final note.
                        Seasonal ingredients and house-made elements ensure each dessert feels thoughtful rather than heavy.</p>
                    </details>
                </div>
            </div>
        </div>

    </div>
</div>  
        
          </React.Fragment>
        )
    }
}
