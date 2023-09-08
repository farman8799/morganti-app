import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products = [
    {
      cardProducts: [
        {
          name: 'HYPNOTIC',
          description: `Introducing Hypnotic by Morganti Luxury – an extraordinary
          concentrated fragrance that combines the timeless elegance of Iris
          and Cedarwood with the fresh and citrusy notes of Neroli and the
          deep and mysterious aroma of Somalia Frankincense.`,
          price: 950,
          currency: 'AED',
          image: './../../../../assets/image-1.svg',
          logo: './../../../../assets/logo.svg'
        }
      ],
      sliderProducts: {
        title: 'EXPLORE THE FRAGRANCES AND CANDLES',
        products: [
          {
            name: 'Salman by Morganti',
            description: ``,
            price: 1250,
            currency: 'AED',
            image: './../../../../assets/product-img.svg',
            logo: ''
          }
        ]
      }
    },
    {
      cardProducts: [
        {
          name: 'HYPNOTIC',
          description: `Introducing Hypnotic by Morganti Luxury – an extraordinary
          concentrated fragrance that combines the timeless elegance of Iris
          and Cedarwood with the fresh and citrusy notes of Neroli and the
          deep and mysterious aroma of Somalia Frankincense.`,
          price: 850,
          currency: 'AED',
          image: './../../../../assets/image-2.svg',
          logo: './../../../../assets/logo.svg'
        },
        {
          name: 'HYPNOTIC',
          description: `Introducing Hypnotic by Morganti Luxury – an extraordinary
          concentrated fragrance that combines the timeless elegance of Iris
          and Cedarwood with the fresh and citrusy notes of Neroli and the
          deep and mysterious aroma of Somalia Frankincense.`,
          price: 1050,
          currency: 'AED',
          image: './../../../../assets/image-3.svg',
          logo: './../../../../assets/logo.svg'
        }
      ],
      sliderProducts: {
        title: 'WOMENS FRAGRANCES',
        products: [
          {
            name: 'Salman by Morganti',
            description: ``,
            price: 1250,
            currency: 'AED',
            image: './../../../../assets/product-img.svg',
            logo: ''
          }
        ]
      }
    },
    {
      cardProducts: [
        {
          name: 'HYPNOTIC',
          description: `Introducing Hypnotic by Morganti Luxury – an extraordinary
          concentrated fragrance that combines the timeless elegance of Iris
          and Cedarwood with the fresh and citrusy notes of Neroli and the
          deep and mysterious aroma of Somalia Frankincense.`,
          price: 850,
          currency: 'AED',
          image: './../../../../assets/image-4.svg',
          logo: './../../../../assets/logo.svg'
        },
        {
          name: 'HYPNOTIC',
          description: `Introducing Hypnotic by Morganti Luxury – an extraordinary
          concentrated fragrance that combines the timeless elegance of Iris
          and Cedarwood with the fresh and citrusy notes of Neroli and the
          deep and mysterious aroma of Somalia Frankincense.`,
          price: 1050,
          currency: 'AED',
          image: './../../../../assets/image-5.svg',
          logo: './../../../../assets/logo.svg'
        }
      ],
      sliderProducts: {
        title: 'MENS FRAGRANCES',
        products: [
          {
            name: 'Salman by Morganti',
            description: ``,
            price: 1250,
            currency: 'AED',
            image: './../../../../assets/product-img.svg',
            logo: ''
          }
        ]
      }
    }
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
