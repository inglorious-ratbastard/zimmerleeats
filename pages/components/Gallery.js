import React from "react";
import ImageGallery from "../components/ImageGallery"; 

export default class Gallery extends React.Component {
    state = {
    showImageGallery: false,
    galleryTitle: '',
  };

    componentDidMount() {
      this.initCardEvents();
    }

    cardBackgrounds = {
      "Signature Charcuterie Boards": "https://fox11online.com/resources/media2/16x9/514/986/0x176/90/61ff3392-29b7-48eb-9971-e53b0f9ba49e-SarasCharcuterieTree.jpg",
      "Private Dining Experiences": "https://www.resto.be/across/resources/static/site/images/placeholder-detail-resto.jpg",
      "Seasonal Ingredients": "https://insidebusiness.com/wp-content/uploads/2024/10/Conor-Colangelo.jpg",
      "Artisan Cheeses & Meats": "https://media.istockphoto.com/id/1292301452/photo/charcuterie-board.jpg?s=612x612&w=0&k=20&c=LPSunUSE8s9Pg8YKwRIEuniJBQQlB9zMGl9wF7N-vRQ=",
      "Plated Chef Creations": "https://img.freepik.com/free-photo/chef-working-together-professional-kitchen_23-2149727953.jpg",
      "Intimate Dinner Parties": "https://images.stockcake.com/public/3/9/b/39b5f945-e808-4029-ac3f-f7e907456a08_large/elegant-dinner-party-stockcake.jpg",
      "Custom Menu Design": "https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1728011134/ideas-and-advice-prod/blogadmin/Rustic-Sunflower-Menu-Placeholder_238992b5d9/Rustic-Sunflower-Menu-Placeholder_238992b5d9.png?_i=AA",
      "Elegant Event Catering": "https://t3.ftcdn.net/jpg/18/86/80/92/360_F_1886809267_iMvraASVMaIYDsxuQR3UdN7xNY232Ksy.jpg",
      "Desserts & Finishing Touches": "https://www.tastingtable.com/img/gallery/why-you-should-order-a-chocolate-dessert-after-a-steak-dinner/intro-1740568254.jpg",
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
