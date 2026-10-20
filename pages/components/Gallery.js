import React from "react";
import ImageGallery from "../components/ImageGallery"; 

export default class Gallery extends React.Component {
    state = {
    showImageGallery: false,
    galleryTitle: '',
  };

    componentDidMount() {
      this.initCardEvents();
      window.returnToMainGallery = this.handleBack;
    }

  componentWillUnmount() {
    if (window.returnToMainGallery === this.handleBack) {
      delete window.returnToMainGallery;
    }
  }

   cardBackgrounds = {
      "Signature Charcuterie Boards": "/images/gallery/place/charcuterie_place.jpg",
      "Private Dining Experiences": "/images/gallery/place/dining_place.jpg",
      "Seasonal Ingredients": "/images/gallery/place/seasonal_place.jpg",
      "Artisan Cheeses & Meats": "/images/gallery/place/artisan_place.jpg",
      "Plated Chef Creations": "/images/gallery/place/plated_place.jpg",
      "Intimate Dinner Parties": "/images/gallery/place/intimate_place.jpg",
      "Custom Menu Design": "/images/gallery/place/custom_place.jpg",
      "Elegant Event Catering": "/images/gallery/place/elegant_place.jpg",
      "Desserts & Finishing Touches": "/images/gallery/place/desserts_place.jpg",
    };

    initCardEvents = () => {
      const cells = document.querySelectorAll('.ecg-card');

      cells.forEach(cell => {
        const titleElement = cell.querySelector('.js-ecg-expander span');
        const title = titleElement?.textContent?.trim();

        if (title && this.cardBackgrounds[title]) {
          const inner = cell.querySelector('.ecg-card__inner');

          if (title && this.cardBackgrounds[title] && inner) {
            inner.style.backgroundImage = `url(${this.cardBackgrounds[title]})`;
          }

          cell.style.backgroundSize = "cover";
          cell.style.backgroundPosition = "center";
          cell.style.backgroundRepeat = "no-repeat";
        }

        const expander = cell.querySelector('.js-ecg-expander');
        if (expander) {
          expander.replaceWith(expander.cloneNode(true));
          const newExpander = cell.querySelector('.js-ecg-expander');

          newExpander.addEventListener('click', () => {
            const thisCell = newExpander.closest('.ecg-card');
            
            if (thisCell.classList.contains('ecg-is-collapsed')) {
              cells.forEach(otherCell => {
                if (otherCell !== thisCell) {
                  otherCell.classList.remove('ecg-is-expanded');
                  otherCell.classList.add('ecg-is-collapsed');
                  otherCell.classList.add('ecg-is-inactive');
                }
              });
              thisCell.classList.remove('ecg-is-collapsed');
              thisCell.classList.add('ecg-is-expanded'); 
            } else {
              thisCell.classList.remove('ecg-is-expanded');
              thisCell.classList.add('ecg-is-collapsed');
              cells.forEach(otherCell => {
                if (otherCell !== thisCell) {
                  otherCell.classList.remove('ecg-is-inactive');
                }
              });
            }
          });
        }

        const collapser = cell.querySelector('.js-ecg-collapser');

          if (collapser) {
            collapser.addEventListener('click', (e) => {
              e.stopPropagation();

              const thisCell = collapser.closest('.ecg-card');

              thisCell.classList.remove('ecg-is-expanded');
              thisCell.classList.add('ecg-is-collapsed');

              cells.forEach(otherCell => {
                if (otherCell !== thisCell) {
                  otherCell.classList.remove('ecg-is-inactive');
                }
              });
            });
          }

        const discoverBtn = cell.querySelector('.js-ecg-discover');

        if (discoverBtn) {
          discoverBtn.addEventListener('click', (e) => {
            e.stopPropagation();

            const thisCell = discoverBtn.closest('.ecg-card');
            if (!thisCell.classList.contains('ecg-is-expanded')) return;

            const cardTitle =
              thisCell.querySelector('.js-ecg-expander span')?.textContent ||
              'Image Gallery';

            this.setState({
              showImageGallery: true,
              galleryTitle: cardTitle
            });
          });
        } 
      });
    };

    handleBack = () => {
      this.setState({ showImageGallery: false }, () => {
        const cells = document.querySelectorAll('.ecg-card');
        cells.forEach(cell => {
          cell.classList.remove('ecg-is-expanded', 'ecg-is-inactive');
          cell.classList.add('ecg-is-collapsed');
        });
        this.initCardEvents(); 
        if (this.galleryRef) {
          this.galleryRef.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    };

    render() { 
      if (this.state.showImageGallery) {
          return (
            <ImageGallery
              title={this.state.galleryTitle}
              onBack={this.handleBack} 
            />
          );
        }
      
        return (
          <React.Fragment>
        
<div className="u-text-center pt-5" id="gallery" ref={(el) => (this.galleryRef = el)} >
  <div className="gallery-content" id="gallery-info">  
    <h6 className="gallery-title">Celebrations and Cuisine</h6>
    <div className="ecg-wrapper"> 
      <div className="ecg-cards">
         
        <div className="ecg-card ecg-is-collapsed">
          <div className="ecg-card__inner js-ecg-expander">
            <span>Signature Charcuterie Boards</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="ecg-card__expander">
            <i className="fa fa-close js-ecg-collapser"></i>
            <span className="js-ecg-discover">Discover More</span>
          </div>
        </div> 

        <div className="ecg-card ecg-is-collapsed">
          <div className="ecg-card__inner js-ecg-expander">
            <span>Private Dining Experiences</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="ecg-card__expander">
            <i className="fa fa-close js-ecg-collapser"></i>
            <span className="js-ecg-discover">Discover More</span>
          </div>
        </div>

        <div className="ecg-card ecg-is-collapsed">
          <div className="ecg-card__inner js-ecg-expander">
            <span>Seasonal Ingredients</span>
            <i className="fa fa-folder-o"></i>
          </div>
           <div className="ecg-card__expander">
            <i className="fa fa-close js-ecg-collapser"></i>
            <span className="js-ecg-discover">Discover More</span>
          </div>
        </div>

        <div className="ecg-card ecg-is-collapsed">
          <div className="ecg-card__inner js-ecg-expander">
            <span>Artisan Cheeses & Meats</span>
            <i className="fa fa-folder-o"></i>
          </div>
           <div className="ecg-card__expander">
            <i className="fa fa-close js-ecg-collapser"></i>
            <span className="js-ecg-discover">Discover More</span>
          </div>
        </div>

        <div className="ecg-card ecg-is-collapsed">
          <div className="ecg-card__inner js-ecg-expander">
            <span>Plated Chef Creations</span>
            <i className="fa fa-folder-o"></i>
          </div>
           <div className="ecg-card__expander">
            <i className="fa fa-close js-ecg-collapser"></i>
            <span className="js-ecg-discover">Discover More</span>
          </div>
        </div>

        <div className="ecg-card ecg-is-collapsed">
          <div className="ecg-card__inner js-ecg-expander">
            <span>Intimate Dinner Parties</span>
            <i className="fa fa-folder-o"></i>
          </div>
           <div className="ecg-card__expander">
            <i className="fa fa-close js-ecg-collapser"></i>
            <span className="js-ecg-discover">Discover More</span>
          </div>
        </div>

        <div className="ecg-card ecg-is-collapsed">
          <div className="ecg-card__inner js-ecg-expander">
            <span>Custom Menu Design</span>
            <i className="fa fa-folder-o"></i>
          </div>
           <div className="ecg-card__expander">
            <i className="fa fa-close js-ecg-collapser"></i>
            <span className="js-ecg-discover">Discover More</span>
          </div>
        </div>

        <div className="ecg-card ecg-is-collapsed">
          <div className="ecg-card__inner js-ecg-expander">
            <span>Elegant Event Catering</span>
            <i className="fa fa-folder-o"></i>
          </div>
           <div className="ecg-card__expander">
            <i className="fa fa-close js-ecg-collapser"></i>
            <span className="js-ecg-discover">Discover More</span>
          </div>
        </div>

        <div className="ecg-card ecg-is-collapsed">
          <div className="ecg-card__inner js-ecg-expander">
            <span>Desserts & Finishing Touches</span>
            <i className="fa fa-folder-o"></i>
          </div>
           <div className="ecg-card__expander">
            <i className="fa fa-close js-ecg-collapser"></i>
            <span className="js-ecg-discover">Discover More</span>
          </div>
        </div>

      </div>

    </div>

  </div>
</div>
        
          </React.Fragment>
        )
    }
}
